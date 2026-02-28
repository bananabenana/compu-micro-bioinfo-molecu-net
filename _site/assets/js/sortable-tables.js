document.addEventListener("DOMContentLoaded", () => {
  const getCellValue = (row, idx) =>
    row.children[idx].innerText || row.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

  document.querySelectorAll("table.sortable").forEach((table) => {
    table.querySelectorAll("th").forEach((th, idx) => {
      th.style.cursor = "pointer";
      th.addEventListener("click", () => {
        const tbody = table.tBodies[0];
        Array.from(tbody.querySelectorAll("tr"))
          .sort(comparer(idx, (this.asc = !this.asc)))
          .forEach((tr) => tbody.appendChild(tr));
      });
    });
  });
});
