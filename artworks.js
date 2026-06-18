/*
 * ── Artwork Data ──
 *
 * To add a new piece:
 *   1. Drop the image into the images/ folder
 *   2. Add an entry to the array below
 *
 * Fields:
 *   src         – path to the image file (required)
 *   title       – artwork title (optional)
 *   year        – year created (optional)
 *   medium      – e.g. "Oil on canvas" (optional)
 *   description – short note (optional)
 *   category    – for filtering, e.g. "painting", "sketch" (optional)
 *   featured    – set true to pin at top (optional)
 */

const ARTWORKS = [
  // {
  //   src: "images/colours-brown.jpg",
  //   title: "brown",
  //   year: "2025",
  //   medium: "Oil pastel on paper",
  //   category: "colours"
  // },
  //   {
  //   src: "images/colours-grey.jpg",
  //   title: "grey",
  //   year: "2025",
  //   medium: "Oil pastel on paper",
  //   category: "colours"
  // },
      {
    src: "images/colours-orange.jpg",
    title: "orange",
    year: "2025",
    medium: "Oil pastel on paper",
    category: "colours",
    featured: true,
  },
  //       {
  //   src: "images/colours-yellow.jpg",
  //   title: "yellow",
  //   year: "2025",
  //   medium: "Oil pastel on paper",
  //   category: "colours",
  //   featured: true,
  // },
  // {
  //   src: "images/lines-chair.jpg",
  //   title: "Chair Study",
  //   year: "2025",
  //   medium: "Ink on paper",
  //   category: "lines",
  // },
  // {
  //   src: "images/lines-4chairs.jpg",
  //   title: "Four Chairs",
  //   year: "2025",
  //   medium: "Ink on paper",
  //   category: "lines",
  // },
  // {
  //   src: "images/lines-light-house.jpg",
  //   title: "Light House",
  //   year: "2025",
  //   medium: "Ink on paper",
  //   category: "lines",
  // },
  // {
  //   src: "images/lines-person-sit.jpg",
  //   title: "Person Sitting",
  //   year: "2025",
  //   medium: "Ink on paper",
  //   category: "lines",
  // },
  //   {
  //   src: "images/lines-sea.jpg",
  //   title: "Sea View",
  //   year: "2025",
  //   medium: "Ink on paper",
  //   category: "lines",
  // },
  // {
  //   src: "images/lines-sea-2.jpg",
  //   title: "Sea View",
  //   year: "2025",
  //   medium: "Ink on paper",
  //   category: "lines",
  // },
];

const SKETCHES = [
  { src: "images/april-2026/sketch-sicily-2026-1-hills.png", title: "hills", year: "2026", medium: "Ink on paper" },
  { src: "images/april-2026/sketch-sicily-2026-2-palermo.png", title: "palermo", year: "2026", medium: "Ink on paper" },
  { src: "images/april-2026/sketch-sicily-2026-3-sea-water.png", title: "sea-water", year: "2026", medium: "Ink on paper" },
  { src: "images/april-2026/sketch-sicily-2026-4-sea-island.png", title: "sea-island", year: "2026", medium: "Ink on paper" },
  { src: "images/april-2026/sketch-sicily-2026-5-castle.png", title: "castle", year: "2026", medium: "Ink on paper" },
  { src: "images/october-2025/sketch-hania-2025-blue.png", title: "blue", year: "2025", medium: "Ink on paper" },
  { src: "images/october-2025/sketch-hania-2025-chair.png", title: "chair", year: "2025", medium: "Ink on paper" },
  { src: "images/october-2025/sketch-hania-2025-sea-line-2.png", title: "sea-line-2", year: "2025", medium: "Ink on paper" },
  { src: "images/october-2025/sketch-hania-2025-sea-line-3.png", title: "sea-line-3", year: "2025", medium: "Ink on paper" },
  { src: "images/october-2025/sketch-hania-2025-sea-line.png", title: "sea-line", year: "2025", medium: "Ink on paper" },
];

