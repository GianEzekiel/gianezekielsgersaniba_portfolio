import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/scroll_trigger";

export default function Home() {
  return (
    <>
      <Hero />
      <hr style={{ border: "none", borderTop: "1px solid #2a2a2a", margin: 0 }} />
      <Reveal>
        <Projects />
      </Reveal>
      <hr style={{ border: "none", borderTop: "1px solid #2a2a2a", margin: 0 }} />

      <Reveal>
        <About />
      </Reveal>
      <hr style={{ border: "none", borderTop: "1px solid #2a2a2a", margin: 0 }} />

      <Reveal>
        <Contact />
      </Reveal>
      
      <Footer />
    </>
  );
}
