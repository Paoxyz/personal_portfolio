"use client";

import { motion } from "framer-motion";
import CodeSnippet from "@/components/ui/CodeSnippet";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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

        {profile.available && (
          <motion.div
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-mist/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Available to work
          </motion.div>
        )}

        <motion.p variants={item} className="font-display text-sm font-medium text-signal">
          {profile.title} · {profile.location}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
        >
          I build the systems institutions run on.
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-md text-lg text-mist/70">
          {profile.summary}
        </motion.p>
        
        <motion.div variants={item} className="mt-8 flex gap-3">
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            View resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-mist/90 transition-colors hover:border-white/40"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex items-center gap-4 text-sm text-mist/50">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">LinkedIn</a>
          <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">Facebook</a>
          <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">Instagram</a>
        </motion.div>
      </div>

      <motion.div variants={item} className="md:col-span-2">
        <CodeSnippet />
      </motion.div>
    </motion.section>
  );
}