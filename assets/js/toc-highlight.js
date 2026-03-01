window.addEventListener("error", e => {
  console.warn("Script error caught:", e.message);
});

window.addEventListener("unhandledrejection", e => {
  console.warn("Unhandled promise:", e.reason);
});

document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = document.querySelectorAll(".toc ul a[href^='#']");
  if (!tocLinks.length) return; // no TOC present → exit safely

  const headings = Array.from(tocLinks)
    .map(link => {
      const id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!headings.length) return; // TOC exists but headings missing

  const OFFSET = 120;

  function setActive() {
    let current = null;

    for (const heading of headings) {
      const rect = heading.getBoundingClientRect();
      if (rect.top - OFFSET <= 0) {
        current = heading;
      } else {
        break;
      }
    }

    if (!current) return; // nothing in view yet

    tocLinks.forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(
      `.toc a[href="#${current.id}"]`
    );

    if (activeLink) activeLink.classList.add("active");
  }

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
});