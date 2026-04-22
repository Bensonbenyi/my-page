/* ── Project Detail Page ────────────────────────────────────── */
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

if (isNaN(id) || id < 0 || id >= PROJECTS.length) {
  document.getElementById("project-detail").innerHTML =
    '<p style="padding:20vh 0;text-align:center;color:var(--muted)">Project not found. <a href="index.html">Go back</a></p>';
} else {
  const p = PROJECTS[id];

  document.title = `${p.title} | Zheng Benyi`;

  document.getElementById("pd-label").textContent = `Project ${p.index}`;
  document.getElementById("pd-title").textContent = p.title;
  document.getElementById("pd-body").innerHTML = p.detail;

  // Tags
  if (p.tags && p.tags.length) {
    document.getElementById("pd-tags").innerHTML = p.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");
  }

  // Images
  if (p.images && p.images.length) {
    document.getElementById("pd-images").innerHTML = p.images
      .map((img) => `<img src="${img.src}" alt="${img.alt}" loading="lazy" />`)
      .join("");
  } else {
    document.getElementById("pd-images").remove();
  }

  // Links
  if (p.links && p.links.length) {
    const isFirst = true;
    document.getElementById("pd-links").innerHTML = p.links
      .map((l, i) => {
        const style = i === 0 ? "project-link-btn--primary" : "project-link-btn--secondary";
        return `<a class="project-link-btn ${style}" href="${l.url}" target="_blank" rel="noreferrer">${l.label} →</a>`;
      })
      .join("");
  } else {
    document.getElementById("pd-links").remove();
  }
}
