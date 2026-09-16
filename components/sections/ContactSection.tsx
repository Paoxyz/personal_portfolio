import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto mt-24 w-[92%] max-w-5xl scroll-mt-24">
      <GlassCard className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Have a role or a project in mind?
          </h2>
          <p className="mt-2 text-mist/60">{profile.email} · {profile.phone}</p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="whitespace-nowrap rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
        >
          Send an email
        </a>
      </GlassCard>
    </section>
  );
}
