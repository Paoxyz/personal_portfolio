import { notFound } from "next/navigation";
import { ArrowUpRight, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiquidGlassBackground from "@/components/effects/LiquidGlassBackground";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import LiveFrame from "@/components/ui/LiveFrame";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <LiquidGlassBackground />
      <Navbar />
      <main className="mx-auto mt-24 w-[92%] max-w-3xl">
        <p className="text-sm text-mist/45">{project.period} · {project.role}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-4 text-lg text-mist/70">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8">
          <LiveFrame url={project.liveUrl} title={project.title} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#111111] border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/25"
            >
              <Github size={16} /> Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-signal2"
            >
              View Live <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <GlassCard className="mt-10">
          <p className="text-sm text-mist/50">What it does</p>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((point) => (
              <li key={point} className="text-mist/85">{point}</li>
            ))}
          </ul>
        </GlassCard>
      </main>
      <Footer />
    </>
  );
}