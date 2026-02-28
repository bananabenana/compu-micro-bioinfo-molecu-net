document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("search-input");
  const box = document.getElementById("search-results");
  if (!input || !box) return;

  // load search index
  const posts = await (await fetch("/search.json")).json();

  function getAllSnippets(text, query, wordsAround = 10) {
    const regex = new RegExp(query, "gi");
    const matches = [...text.matchAll(regex)];
    if (!matches.length) return [];

    const words = text.split(/\s+/);
    const snippets = matches.map(match => {
      const charIndex = match.index;

      // compute word index from character position
      let cumIndex = 0;
      let wordIndex = 0;
      for (; wordIndex < words.length; wordIndex++) {
        cumIndex += words[wordIndex].length + 1; // +1 for space
        if (cumIndex > charIndex) break;
      }

      const start = Math.max(0, wordIndex - wordsAround);
      const end = Math.min(words.length, wordIndex + wordsAround + 1);
      const snippetWords = words.slice(start, end).join(" ");

      const snippetHighlighted = snippetWords.replace(regex, "<mark>$&</mark>");
      return {
        html: (start > 0 ? "… " : "") + snippetHighlighted + (end < words.length ? " …" : ""),
        raw: snippetWords  // store raw text for scrolling
      };
    });

    return snippets;
  }

  input.addEventListener("input", () => {
    const q = input.value.trim();
    if (q.length < 4) return box.style.display = "none";

    const results = posts.filter(p => 
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.content.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 8);

    box.innerHTML = results.map(p => {
      const snippets = getAllSnippets(p.content, q, 10);
      const imageHtml = p.image
        ? `<a href="${p.url}">
             <img src="${p.image}" class="search-thumb" style="height:120px; width:auto;" />
           </a>`
        : "";

      return `
        <div class="search-result">
          <a href="${p.url}" class="search-result-title">${p.title}</a>
          <div class="search-result-content" style="display:flex; gap:0.8rem; align-items:flex-start;">
            ${imageHtml}
            <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
              ${snippets.map(s => `<a href="${p.url}" class="search-snippet" data-snippet="${encodeURIComponent(s.raw)}">${s.html}</a>`).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");

    // attach click listeners for snippet scrolling
    box.querySelectorAll(".search-snippet").forEach(a => {
      a.addEventListener("click", e => {
        sessionStorage.setItem("scrollToSnippet", a.dataset.snippet);
      });
    });

    box.style.display = results.length ? "block" : "none";
  });

  // hide dropdown when clicking outside
  document.addEventListener("click", e => {
    if (!box.contains(e.target) && e.target !== input) box.style.display = "none";
  });

  // focus search on "/"
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
  });
});


// Scroll to snippet and highlight on page load
document.addEventListener("DOMContentLoaded", () => {
  const snippetText = sessionStorage.getItem("scrollToSnippet");
  if (!snippetText) return;

  const decoded = decodeURIComponent(snippetText);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const idx = node.nodeValue.indexOf(decoded);
    if (idx !== -1) {
      // Use Range to wrap only the matched text
      const range = document.createRange();
      range.setStart(node, idx);
      range.setEnd(node, idx + decoded.length);
      const mark = document.createElement("mark");
      range.surroundContents(mark);

      // Scroll mark into middle of viewport
      const rect = mark.getBoundingClientRect();
      const middleOffset = window.pageYOffset + rect.top - (window.innerHeight / 2) + (rect.height / 2);
      window.scrollTo({ top: middleOffset, behavior: "smooth" });

      // Highlight lasts 10 seconds
      setTimeout(() => mark.replaceWith(mark.textContent), 10000);

      break; // only first match
    }
  }

  sessionStorage.removeItem("scrollToSnippet");
});