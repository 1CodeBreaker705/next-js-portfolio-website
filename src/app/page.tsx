import Hero from "./components/Hero";
import TerminalSection from "./components/TerminalSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
     <Hero/>
     <Projects limit={3} />
     <Skills/>
     <TerminalSection/>
    </>
  );
}
