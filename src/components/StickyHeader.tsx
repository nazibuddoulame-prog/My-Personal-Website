"use client";

import { useEffect } from "react";
import Image from "next/image";
import nameSmall from "@/assets/name-small.svg";
import { navLinks } from "./navLinks";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const ramp = (t: number, from: number, to: number) => clamp((t - from) / (to - from));

type Box = { x: number; y: number; w: number; h: number };

// Figma "Nav scroll" (465:12620). The bar itself is only a backdrop plus
// invisible target slots: as the page scrolls, the large name and the main
// nav links are transformed from where they sit in the page into those slots.
export default function StickyHeader() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>(".sticky-header");
    const lines = Array.from(document.querySelectorAll<HTMLElement>(".hero__line"));
    const links = Array.from(document.querySelectorAll<HTMLElement>(".nav__list li"));
    if (!bar || lines.length !== 2 || !links.length) return;
    const nameSlot = bar.querySelector<HTMLElement>(".sticky-header__name img")!;
    const linkSlots = Array.from(bar.querySelectorAll<HTMLElement>(".sticky-header__list li"));

    let m: { lines: Box[]; nameSlot: Box; links: Box[]; linkSlots: Box[]; distance: number } | null = null;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!m) return;
      const sy = window.scrollY;
      const p = clamp(sy / m.distance);

      // Name: both lines shrink to the bar's letter height and rise into one
      // line, "NAZIBUDDOULA" at the left of the slot and "NAYEEM" at its right.
      // Easing out lets the name clear the way before the links arrive.
      const e = easeOut(p);
      const slot = m.nameSlot;
      const k = slot.h / m.lines[0].h;
      const targets = [slot.x, slot.x + slot.w - m.lines[1].w * k];
      const swap = ramp(p, 0.95, 1); // hand over to the exact one-line SVG at the very end
      const scale = lerp(1, k, e);
      const top = lerp(m.lines[0].y, slot.y, e); // line 1 glides from its resting spot into the slot
      // Line 2 keeps its (shrinking) place under line 1 while it slides right,
      // and only rises beside it once it has cleared line 1's right edge.
      const rise = easeInOut(ramp(p, 0.8, 1));
      const ys = [top, top + (m.lines[1].y - m.lines[0].y) * scale * (1 - rise)];
      lines.forEach((el, i) => {
        const a = m!.lines[i];
        // translate is relative to where the page currently puts it (a.y - sy)
        el.style.transform = `translate(${(targets[i] - a.x) * e}px, ${ys[i] - (a.y - sy)}px) scale(${scale})`;
        el.style.opacity = String(1 - swap);
      });
      bar.style.setProperty("--name-swap", String(swap));

      // Links: each slides across into its place in the pill.
      const ex = easeInOut(p);
      links.forEach((li, i) => {
        const a = m!.links[i], b = m!.linkSlots[i];
        const now = a.y - sy;
        const ls = lerp(1, b.w / a.w, ex); // 1 on desktop; phones use smaller text in the bar
        li.style.transform = `translate(${(b.x - a.x) * ex}px, ${(b.y - now) * p}px) scale(${ls})`;
      });

      bar.style.setProperty("--bar-bg", String(ramp(p, 0.55, 1)));
      bar.style.setProperty("--pill", String(ramp(p, 0.65, 1)));
      bar.classList.toggle("is-docked", p >= 1);
    };

    const measure = () => {
      [...lines, ...links].forEach((el) => (el.style.transform = ""));
      const sy = window.scrollY;
      const page = (el: HTMLElement): Box => {
        const r = el.getBoundingClientRect();
        return { x: r.left, y: r.top + sy, w: r.width, h: r.height };
      };
      const fixed = (el: HTMLElement): Box => {
        const r = el.getBoundingClientRect();
        return { x: r.left, y: r.top, w: r.width, h: r.height };
      };
      const ls = links.map(page), ts = linkSlots.map(fixed);
      // Finish when the links reach the bar, so they travel up at scroll speed.
      m = { lines: lines.map(page), nameSlot: fixed(nameSlot), links: ls, linkSlots: ts, distance: Math.max(1, ls[0].y - ts[0].y) };
      update();
    };

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="sticky-header" aria-hidden="true">
      <div className="sticky-header__inner">
        <div className="sticky-header__name">
          <Image src={nameSmall} alt="" width={256} height={18} />
        </div>
        <div className="sticky-header__pill">
          <ul className="sticky-header__list">
            {navLinks.map((l) => (
              <li key={l.label}>{l.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
