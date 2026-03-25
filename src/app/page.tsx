import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Certifications from "@/components/Certifications";
import ContactForm from "@/components/ContactForm";

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
