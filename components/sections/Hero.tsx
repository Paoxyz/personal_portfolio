"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const log = projects.slice(0, 4).map((p) => ({ label: p.title, detail: p.period }));

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="mx-auto mt-16 grid w-[92%] max-w-5xl grid-cols-1 gap-6 md:mt-24 md:grid-cols-5 md:items-center"
    >
      <div className="md:col-span-3">
        <motion.div variants={item} className="mb-6">
          <PhotoFrame src={profile.photo} alt={profile.name} />
        </motion.div>
        <motion.p variants={item} className="font-display text-sm font-medium text-signal">
          {profile.title} · {profile.location}
        </motion.p>
        <motion.h1 variants={item} className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          I build the systems institutions run on.
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-md text-lg text-mist/70">
          {profile.summary}
        </motion.p>
        <motion.div variants={item} className="mt-8 flex gap-3">
          <a href="#work" className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]">
            See the work
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-mist/90 transition-colors hover:border-white/40">
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div variants={item} className="md:col-span-2">
        <GlassCard>
          <p className="mb-4 text-sm text-mist/50">Recent builds</p>
          <ul className="space-y-3">
            {log.map((entry) => (
              <li key={entry.label} className="flex items-start justify-between gap-4 text-sm">
                <span className="text-mist/85">{entry.label}</span>
                <span className="whitespace-nowrap text-mist/40">{entry.detail}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </motion.section>
  );
}