import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import Feature from "@/components/Feature";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <Nav />
      <Intro />
      <Feature />
      <Highlights />
      <Projects />
    </main>
  );
}
