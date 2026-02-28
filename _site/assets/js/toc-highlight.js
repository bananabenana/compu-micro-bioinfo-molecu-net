document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = document.querySelectorAll(".toc ul a[href^='#']");
  const headings = Array.from(tocLinks)
    .map(link => {
      const id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);
  const OFFSET = 120; // adjust if you have fixed header

  function setActive() {
    let current = headings[0];

    for (const heading of headings) {
      const rect = heading.getBoundingClientRect();
      if (rect.top - OFFSET <= 0) {
        current = heading;
      } else {
        break;
      }
    }

    tocLinks.forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(
      `.toc a[href="#${current.id}"]`
    );
    if (activeLink) activeLink.classList.add("active");
  }

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
});