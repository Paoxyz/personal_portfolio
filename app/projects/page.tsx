import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiquidGlassBackground from "@/components/effects/LiquidGlassBackground";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <LiquidGlassBackground />
      <Navbar />
      <main>
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
