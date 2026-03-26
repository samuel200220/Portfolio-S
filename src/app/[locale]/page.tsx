import About from "@/components/About";
import Certifications from "@/components/Certifications";
import ContactForm from "@/components/ContactForm";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="space-y-0">
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experiences />
        <ContactForm />
      </div>
    </div>
  );
}
