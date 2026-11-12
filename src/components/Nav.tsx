const links = [
  { label: "Resume", href: "#resume" },
  { label: "About", href: "#about" },
  { label: "Explorations", href: "#explorations" },
  { label: "Start a Project", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <ul className="nav__list">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
