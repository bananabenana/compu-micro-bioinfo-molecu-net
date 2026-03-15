document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("custom-lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCaption = document.getElementById("lb-caption");
  const lbClose = document.getElementById("lb-close");
  const lbPrev = document.getElementById("lb-prev");
  const lbNext = document.getElementById("lb-next");
  const galleryImages = document.querySelectorAll(".image-grid img");

  let currentIndex = -1;
  const imagesArray = Array.from(galleryImages);

  const openLightbox = (index) => {
    const img = imagesArray[index];
    lbImg.src = img.dataset.full;
    lbCaption.innerHTML = img.dataset.caption || img.alt;
    lightbox.classList.remove("hidden");
    currentIndex = index;
  };

  const closeLightbox = () => {
    lightbox.classList.add("hidden");
    lbImg.src = "";
    currentIndex = -1;
  };

  const showPrev = () => {
    if (currentIndex > 0) openLightbox(currentIndex - 1);
  };

  const showNext = () => {
    if (currentIndex < imagesArray.length - 1) openLightbox(currentIndex + 1);
  };

  // Thumbnail clicks
  imagesArray.forEach((img, idx) => img.addEventListener("click", () => openLightbox(idx)));

  // Close button
  lbClose.addEventListener("click", closeLightbox);

  // Arrow clicks
  lbPrev.addEventListener("click", showPrev);
  lbNext.addEventListener("click", showNext);

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (currentIndex === -1) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  });

  // Click outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
});