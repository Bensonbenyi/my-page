/* ── Render Project Cards ──────────────────────────────────── */
const grid = document.getElementById("project-grid");

PROJECTS.forEach((project, i) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const link = document.createElement("a");
  link.href = `project.html?id=${i}`;
  link.className = "card-link";
  link.setAttribute("aria-label", `View details for ${project.title}`);
  link.innerHTML = `
    <div>
      <p class="project-index">${project.index}</p>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
    </div>
    <span class="card-cta">View Details →</span>
  `;

  card.appendChild(link);
  grid.appendChild(card);
});

/* ── Scroll Reveal ─────────────────────────────────────────── */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
);

revealElements.forEach((el) => revealObserver.observe(el));
