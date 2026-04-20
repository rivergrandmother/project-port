(() => {
  // ── Banner dismiss ──
  const banner = document.getElementById("banner");
  const bannerClose = document.getElementById("banner-close");
  bannerClose.addEventListener("click", () => {
    banner.classList.add("hidden");
  });

  const grid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbInfo = document.getElementById("lightbox-info");
  const gallery = document.getElementById("gallery");

  let currentIndex = 0;
  let visibleArtworks = [];

  // ── Build category filters ──

  function getCategories() {
    const cats = new Set();
    ARTWORKS.forEach((a) => {
      if (a.category) cats.add(a.category);
    });
    return Array.from(cats);
  }

  function buildFilters() {
    const categories = getCategories();
    if (categories.length <= 1) return;

    const bar = document.createElement("div");
    bar.className = "filter-bar";

    const allBtn = document.createElement("button");
    allBtn.className = "filter-btn active";
    allBtn.textContent = "All";
    allBtn.addEventListener("click", () => filterBy(null, allBtn));
    bar.appendChild(allBtn);

    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.textContent = cat;
      btn.addEventListener("click", () => filterBy(cat, btn));
      bar.appendChild(btn);
    });

    gallery.insertBefore(bar, grid);
  }

  function filterBy(category, activeBtn) {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    activeBtn.classList.add("active");
    renderGallery(category);
  }

  // ── Render gallery ──

  function sortArtworks(artworks) {
    return [...artworks].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }

  function renderGallery(category) {
    const filtered = category
      ? ARTWORKS.filter((a) => a.category === category)
      : ARTWORKS;

    visibleArtworks = sortArtworks(filtered);
    grid.innerHTML = "";

    visibleArtworks.forEach((artwork, i) => {
      const card = document.createElement("div");
      card.className = "artwork-card";

      if (artwork.featured) {
        card.classList.add("featured");
      }

      const img = document.createElement("img");
      img.src = artwork.src;
      img.alt = artwork.title || "Artwork";
      img.loading = "lazy";
      card.appendChild(img);

      const overlay = document.createElement("div");
      overlay.className = "card-overlay";

      if (artwork.title) {
        const title = document.createElement("div");
        title.className = "card-title";
        title.textContent = artwork.title;
        overlay.appendChild(title);
      }

      const metaParts = [artwork.year, artwork.medium].filter(Boolean);
      if (metaParts.length) {
        const meta = document.createElement("div");
        meta.className = "card-meta";
        meta.textContent = metaParts.join(" • ");
        overlay.appendChild(meta);
      }

      card.appendChild(overlay);

      card.addEventListener("click", () => openLightbox(i));
      grid.appendChild(card);
    });
  }

  // ── Lightbox ──

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const artwork = visibleArtworks[currentIndex];
    lbImg.src = artwork.src;
    lbImg.alt = artwork.title || "Artwork";

    let html = "";
    if (artwork.title) {
      html += `<div class="lb-title">${artwork.title}</div>`;
    }
    const meta = [artwork.year, artwork.medium].filter(Boolean).join(" • ");
    if (meta) {
      html += `<div class="lb-meta">${meta}</div>`;
    }
    if (artwork.description) {
      html += `<div class="lb-meta" style="margin-top:0.4rem">${artwork.description}</div>`;
    }
    lbInfo.innerHTML = html;
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + visibleArtworks.length) % visibleArtworks.length;
    updateLightbox();
  }

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => navigate(-1));
  document.getElementById("lightbox-next").addEventListener("click", () => navigate(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });

  // ── Init ──

  buildFilters();
  renderGallery(null);
})();