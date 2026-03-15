document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll(".highlight pre");

  codeBlocks.forEach(block => {
    const screenWidth = window.innerWidth;
    const originalWidth = block.scrollWidth;

    if (screenWidth < 768 && originalWidth > screenWidth - 32) {
      let scale = (screenWidth - 32) / originalWidth;
      scale = Math.max(0.5, scale); // never smaller than 50% of original font
      block.style.fontSize = `${16 * scale}px`;
      block.style.whiteSpace = "pre-wrap"; // allow wrapping
    } else {
      block.style.fontSize = ""; // default
      block.style.whiteSpace = "pre";
    }
  });

  // Remove the resize event listener to prevent dynamic resizing
  // window.removeEventListener("resize", resizeCode);
});