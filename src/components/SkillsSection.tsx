import type { Dictionary } from "@/app/[lang]/dictionaries";

type SkillsDict = Dictionary["skills"];

const techStack = [
  { num: "01", name: "Java" },
  { num: "02", name: "C" },
  { num: "03", name: "C++" },
  { num: "04", name: "Python" },
  { num: "05", name: "JavaScript" },
  { num: "06", name: "Kotlin" },
  { num: "07", name: "Swift" },
  { num: "08", name: "SQL" },
  { num: "09", name: "MySQL" },
  { num: "10", name: "Firebase" },
  { num: "11", name: "HTML/CSS" },
  { num: "12", name: "React.js" },
  { num: "13", name: "Tailwind" },
  { num: "14", name: "Node.js" },
  { num: "15", name: ".NET" },
];

const aiTools = [
  "Claude Code",
  "ChatGPT",
  "Cursor",  
  "GitHub Copilot",
  "Prompt Engineering",
  "AI Automation",
];

export default function SkillsSection({ dict }: { dict: SkillsDict }) {
  return (
    <section id="skills" className="px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Header */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter leading-[0.9] text-on-surface">
              {dict.title}{" "}
              <span className="text-primary italic">{dict.titleHighlight}</span>
            </h2>
          </div>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Development Ecosystem */}
        <div className="md:col-span-8 bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 px-2 opacity-10">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM7.293 15.707a1 1 0 11-1.414-1.414L8.586 12 5.879 9.293a1 1 0 011.414-1.414l3.414 3.414a1 1 0 010 1.414l-3.414 3z M14 15a1 1 0 010-2h4a1 1 0 010 2h-4z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary" />
            {dict.devEcosystem}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.num}
                className="glass-panel p-6 rounded-sm hover:bg-surface-container-high transition-all duration-300 border-l-2 border-transparent hover:border-primary"
              >
                <p className="text-xs font-mono text-tertiary mb-2">
                  {tech.num}
                </p>
                <h4 className="font-bold text-lg font-[family-name:var(--font-headline)]">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Intelligence */}
        <div className="md:col-span-4 bg-surface-container p-8 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight mb-6">
              {dict.aiIntelligence}
            </h3>
            <div className="flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h4 className="text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight mb-6">
              {dict.softSkills}
            </h4>
            <div className="flex flex-wrap gap-2">
              {dict.softSkillsList.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-mono rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Support */}
        <div className="md:col-span-5 bg-surface-container p-8 rounded-lg relative overflow-hidden group">
          <div className="z-10 relative">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight mb-4">
              {dict.techSupport}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {dict.techSupportDesc}
            </p>
          </div>
          <div className="absolute -bottom-6 -right-6 text-primary/5 select-none pointer-events-none">
            <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
            </svg>
          </div>
        </div>

        {/* Languages */}
        <div className="md:col-span-7 bg-surface-container-low p-8 rounded-lg">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight mb-8">
            {dict.languages}
          </h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-bold font-[family-name:var(--font-headline)]">
                  {dict.spanish}
                </span>
                <span className="text-xs font-mono text-tertiary uppercase">
                  {dict.nativeProficiency}
                </span>
              </div>
              <div className="h-3 bg-surface-container-highest w-full rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-primary to-primary-container w-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-bold font-[family-name:var(--font-headline)]">
                  {dict.english}
                </span>
                <span className="text-xs font-mono text-outline uppercase">
                  {dict.intermediateB2}
                </span>
              </div>
              <div className="h-3 bg-surface-container-highest w-full rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-primary/60 to-primary w-[75%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
