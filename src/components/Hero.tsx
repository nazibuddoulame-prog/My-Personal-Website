import Image from "next/image";
import line1 from "@/assets/name-line1.svg";
import line2 from "@/assets/name-line2.svg";

// The name is set in Born2bSporty FS (a commercial font), so it ships as the
// vector outlines exported from Figma, one SVG per line. On scroll the two
// lines shrink into the one-line name in the top bar (see StickyHeader).
export default function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__name">
        <a href="#top" aria-label="Nazibuddoula Nayeem">
          <Image className="hero__line hero__line--1" src={line1} alt="" priority />
          <Image className="hero__line hero__line--2" src={line2} alt="" priority />
        </a>
      </h1>
    </header>
  );
}
