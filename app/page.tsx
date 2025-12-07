import Image from "next/image";
import Hero from "./components/Hero";
import About from "./about/page";
import Certifications from "./certifications/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Certifications />
      <Projects />
    </main>
  );
} 