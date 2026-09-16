import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiquidGlassBackground from "@/components/effects/LiquidGlassBackground";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <>
      <LiquidGlassBackground />
      <Navbar />
      <main className="mx-auto mt-24 w-[92%] max-w-2xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight">Let's talk</h1>
        <p className="mt-4 text-mist/65">
          The fastest way to reach me is email. I'm based in {profile.location} and open to
          full-stack, backend, or applied ML roles.
        </p>

        <GlassCard className="mt-10">
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-mist/50">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-signal2">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-mist/50">Phone</dt>
              <dd>{profile.phone}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-mist/50">Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </GlassCard>
      </main>
      <Footer />
    </>
  );
}
