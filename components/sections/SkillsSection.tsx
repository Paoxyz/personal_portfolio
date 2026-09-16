import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { technicalSkills, softSkills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto mt-24 w-[92%] max-w-5xl scroll-mt-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Skills</h2>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        <GlassCard>
          <p className="text-sm text-mist/50">Technical</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technicalSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <p className="text-sm text-mist/50">Working style</p>
          <ul className="mt-4 space-y-3">
            {softSkills.map((skill) => (
              <li key={skill.label}>
                <p className="text-sm font-medium text-mist/90">{skill.label}</p>
                <p className="text-sm text-mist/55">{skill.note}</p>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
