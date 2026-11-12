import Image from "next/image";
import wordmark from "@/assets/name-wordmark.svg";

// The name is set in Born2bSporty FS (a commercial font), so it ships as the
// vector outlines exported from Figma.
export default function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__name">
        <Image src={wordmark} alt="Nazibuddoula Nayeem" width={1215} height={291} priority />
      </h1>
    </header>
  );
}
