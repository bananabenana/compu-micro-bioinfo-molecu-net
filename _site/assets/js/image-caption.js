// =========================
// Dynamically constrain figcaption to image width
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const resizeCaptions = () => {
    document.querySelectorAll(".centered-figure").forEach(figure => {
      const img = figure.querySelector("img");
      const caption = figure.querySelector("figcaption");
      if (!img || !caption) return;

      // set caption max-width to current image width
      caption.style.maxWidth = `${img.offsetWidth}px`;
    });
  };

  // Wait for all images in centered-figure to load
  const figures = document.querySelectorAll(".centered-figure img");
  let loadedCount = 0;

  if (figures.length === 0) {
    // Resize captions
    resizeCaptions();
  } else {
    figures.forEach(img => {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === figures.length) resizeCaptions();
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === figures.length) resizeCaptions();
        });
      }
    });
  }

  // Update dynamically on window resize (throttled)
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCaptions, 100);
  });
});