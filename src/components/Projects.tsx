// Caption widths come from the Figma text boxes, so the lines wrap as designed.
const projects = [
  { title: "01 — Dentist Platform Design", width: 187 },
  { title: "02 — Aurevé — Brand Identity for a Modern Skincare Label", width: 330 },
  { title: "03 — AI Driven advanced analytics Platform Design", width: 355 },
  { title: "04 — Personal Branding Design", width: 187 },
  { title: "05 — Sportsman Personal Website", width: 187 },
  { title: "06 — Sports Club Website Design", width: 187 },
];

export default function Projects() {
  return (
    <section className="projects" id="explorations" aria-label="Projects">
      <div className="projects__track">
        {projects.map((p) => (
          <figure className="project" key={p.title}>
            <div className="project__media" />
            <figcaption style={{ width: p.width }}>{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
