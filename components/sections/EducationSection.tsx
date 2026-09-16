import GlassCard from "@/components/ui/GlassCard";
import { education, awards } from "@/data/profile";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto mt-24 w-[92%] max-w-5xl scroll-mt-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Education & awards</h2>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="space-y-5 md:col-span-2">
          {education.map((item) => (
            <GlassCard key={item.school}>
              <p className="text-xs text-mist/45">{item.location}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.school}</h3>
              <p className="mt-1 text-sm text-mist/75">{item.credential}</p>
              {item.note && <p className="mt-1 text-sm text-signal2">{item.note}</p>}
              {item.detail && <p className="mt-3 text-sm text-mist/55">{item.detail}</p>}
            </GlassCard>
          ))}
        </div>

        <GlassCard>
          <p className="text-sm text-mist/50">Awards</p>
          <ul className="mt-4 space-y-3">
            {awards.map((award) => (
              <li key={award} className="text-sm text-mist/85">
                {award}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
