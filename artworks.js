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
  {
    src: "images/painting-01.svg",
    title: "Morning Light",
    year: "2026",
    medium: "Oil on canvas",
    category: "colours",
    featured: true,
  },
  {
    src: "images/sketch-01.svg",
    title: "Study in Form",
    year: "2025",
    medium: "Graphite on paper",
    category: "lines",
  },
  {
    src: "images/painting-02.svg",
    title: "Still Water",
    year: "2025",
    medium: "Acrylic on panel",
    category: "weights",
  },
  {
    src: "images/mixed-01.svg",
    title: "Fragments",
    year: "2024",
    medium: "Mixed media",
    category: "someone, almost",
  },
  {
    src: "images/sketch-02.svg",
    title: "Gesture III",
    year: "2024",
    medium: "Ink on paper",
    category: "lines",
  },
  {
    src: "images/painting-03.svg",
    title: "Dusk",
    year: "2024",
    medium: "Oil on linen",
    category: "colours",
    featured: true,
  },
];
