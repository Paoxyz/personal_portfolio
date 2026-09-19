"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import BentoGrid from "@/components/ui/BentoGrid";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="mx-auto mt-24 w-[92%] max-w-5xl scroll-mt-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Selected work</h2>
      <p className="mt-2 max-w-lg text-mist/60">
        Five systems, five different problems — document workflows, prediction, scheduling, grading, and finance.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                isActive
                  ? "border-signal bg-signal text-white"
                  : "border-white/15 text-mist/65 hover:border-white/35"
              }`}
            >
              {cat} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <BentoGrid className="mt-8">
        {filtered.map((project, i) => {
          const span = i % 3 === 0 ? "md:col-span-4" : i % 3 === 1 ? "md:col-span-2" : "md:col-span-3";

          return (
            <GlassCard
              key={project.slug}
              padded={false}
              className={`h-full overflow-hidden transition-transform hover:-translate-y-1 ${span}`}
            >
              {/* Live preview strip — always rendered, no hover needed */}
              <div className="relative h-64 w-full overflow-hidden border-b border-white/10 bg-[#0d0d0d]">
                {project.liveUrl ? (
                  <div className="absolute inset-0" style={{ overflow: "hidden" }}>
                    <iframe
                      src={project.liveUrl}
                      title={`Live preview of ${project.title}`}
                      loading="lazy"
                      tabIndex={-1}
                      style={{
                        width: "180%",
                        height: "180%",
                        transform: "scale(0.5556)",
                        transformOrigin: "top left",
                        border: "none",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-mist/30">
                    No live preview yet
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-mist/45">{project.period}</p>
                  <Badge>{project.category}</Badge>
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="mt-2 font-display text-xl font-semibold transition-colors hover:text-signal">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 text-sm text-mist/65">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#111111] border border-white/10 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:border-white/25"
                    >
                      <Github size={14} /> Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-signal2"
                    >
                      View Live <ArrowUpRight size={14} />
                    </a>
                  )}
                  {!project.liveUrl && !project.repoUrl && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-mist/85 transition-colors hover:border-white/40"
                    >
                      View details <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </GlassCard>
          );
        })}
      </BentoGrid>
    </section>
  );
}