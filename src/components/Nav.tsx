import { navLinks } from "./navLinks";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <ul className="nav__list">
        {navLinks.map((l) => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
