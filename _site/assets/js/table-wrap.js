document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 768) return; // mobile only

  // wrap all tables, including those with class "sortable"
  document.querySelectorAll("table").forEach(table => {
    // skip if already wrapped
    if (table.parentNode.classList.contains("table-wrapper")) return;

    const wrapper = document.createElement("div");
    wrapper.classList.add("table-wrapper");
    wrapper.style.overflowX = "auto";
    wrapper.style.webkitOverflowScrolling = "touch"; // smooth scroll iOS
    wrapper.style.width = "100%";

    // insert wrapper before table and move table inside
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
});