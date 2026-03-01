document.addEventListener("DOMContentLoaded", () => {
  const navTrigger = document.getElementById("nav-trigger");
  document.addEventListener("click", (e) => {
    const nav = document.querySelector(".site-nav");
    if (!nav.contains(e.target)) {
      navTrigger.checked = false;
    }
  });
});