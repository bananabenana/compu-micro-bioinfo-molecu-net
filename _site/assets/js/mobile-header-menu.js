const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-right");

if (!btn || !menu) return;

btn.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.toggle("open");
});

document.addEventListener("click", () => {
  menu.classList.remove("open");
});

menu.addEventListener("click", e => e.stopPropagation());