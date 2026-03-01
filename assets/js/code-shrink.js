// File: code-shrink.js
document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll(".highlight pre");

  function resizeCode() {
    const screenWidth = window.innerWidth;
    codeBlocks.forEach(block => {
      const originalWidth = block.scrollWidth;

      if (screenWidth < 768 && originalWidth > screenWidth - 32) {
        // sharper scaling factor for smaller code blocks
        let scale = (screenWidth - 32) / originalWidth;
        scale = Math.max(0.5, scale); // never smaller than 50% of original font
        block.style.fontSize = `${16 * scale}px`;
        block.style.whiteSpace = "pre-wrap"; // allow wrapping after shrinking
      } else {
        block.style.fontSize = ""; // reset to default
        block.style.whiteSpace = "pre";    // reset whitespace
      }
    });
  }

  resizeCode();
  window.addEventListener("resize", resizeCode);
});