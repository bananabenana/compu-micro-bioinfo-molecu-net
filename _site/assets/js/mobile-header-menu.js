document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navRight = document.querySelector(".nav-right");

  if (!hamburger || !navRight) return;

  // toggle nav-right on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent document click from immediately closing it
    navRight.style.display = (navRight.style.display === "flex") ? "none" : "flex";
  });

  // close nav if clicking outside
  document.addEventListener("click", (e) => {
    if (!navRight.contains(e.target) && !hamburger.contains(e.target)) {
      navRight.style.display = "none";
    }
  });
});