import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiquidGlassBackground from "@/components/effects/LiquidGlassBackground";
import ScrollReveal from "@/components/effects/ScrollReveal";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LiquidGlassBackground />
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <ProjectsGrid />
        </ScrollReveal>
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>
        <ScrollReveal>
          <EducationSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
