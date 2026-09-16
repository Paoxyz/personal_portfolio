import GlassCard from "@/components/ui/GlassCard";
import { softSkills } from "@/data/skills";

const icons = [
  { name: "HTML5", code: "html" },
  { name: "CSS3", code: "css" },
  { name: "JavaScript", code: "javascript" },
  { name: "PHP", code: "php" },
  { name: "Python", code: "python" },
  { name: "React", code: "react" },
  { name: "Node.js", code: "nodejs" },
  { name: "MySQL", code: "mysql" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto mt-24 w-[92%] max-w-5xl scroll-mt-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Skills</h2>
      <p className="mt-2 max-w-lg text-mist/60">Technologies I build with.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        <GlassCard>
          <div className="grid grid-cols-4 gap-4">
            {icons.map((tech) => (
              <div key={tech.code} className="flex flex-col items-center gap-2">
                <img
                  src={`https://skillicons.dev/icons?i=${tech.code}&theme=dark`}
                  alt={tech.name}
                  width={40}
                  height={40}
                />
                <span className="text-xs text-mist/60">{tech.name}</span>
              </div>
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