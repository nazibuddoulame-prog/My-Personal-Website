"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import nameSmall from "@/assets/name-small.svg";
import { navLinks } from "./navLinks";

// Figma "Nav scroll" (465:12620): appears fixed at the top once the large
// name and the main nav have scrolled out of view.
export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const io = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    io.observe(nav);
    return () => io.disconnect();
  }, []);

  return (
    <header className={`sticky-header${visible ? " is-visible" : ""}`} aria-hidden={!visible} inert={!visible}>
      <div className="sticky-header__inner">
        <a className="sticky-header__name" href="#top" aria-label="Nazibuddoula Nayeem — back to top">
          <Image src={nameSmall} alt="" width={256} height={18} />
        </a>
        <nav className="sticky-header__pill" aria-label="Primary (compact)">
          <ul className="sticky-header__list">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
