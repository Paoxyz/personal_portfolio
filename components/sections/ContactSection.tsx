"use client";

import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:paobutdiff@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto mt-24 w-[92%] max-w-5xl scroll-mt-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-2 max-w-lg text-mist/60">Have a role or a project in mind? Let&apos;s talk.</p>

      <GlassCard className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-mist/50">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-signal"
              />
            </div>
            <div>
              <label className="text-sm text-mist/50">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-signal"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-mist/50">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-signal"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            Send message
          </button>
          <p className="text-xs text-mist/40">
            This opens your email app with the message pre-filled.
          </p>
        </form>
      </GlassCard>
    </section>
  );
}