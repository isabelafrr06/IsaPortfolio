import type { Dictionary } from "@/app/[lang]/dictionaries";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import {
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiKotlin,
  SiSwift,
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import type { IconType } from "react-icons";

type SkillsDict = Dictionary["skills"];

const techStack: { name: string; Icon: IconType }[] = [
  { name: "Java", Icon: SiOpenjdk },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Kotlin", Icon: SiKotlin },
  { name: "Swift", Icon: SiSwift },
  { name: "SQL", Icon: FaDatabase },
  { name: "MySQL", Icon: SiMysql },
  { name: "Firebase", Icon: SiFirebase },
  { name: "HTML/CSS", Icon: SiHtml5 },
  { name: "React.js", Icon: SiReact },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: ".NET", Icon: SiDotnet },
];

const aiTools = [
  "Claude Code",
  "ChatGPT",
  "Cursor",
  "GitHub Copilot",
  "Prompt Engineering",
  "AI Automation",
];

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight mb-6 flex items-center gap-3">
      <span className="w-8 h-[2px] bg-primary shrink-0" />
      {children}
    </h3>
  );
}

export default function SkillsSection({ dict }: { dict: SkillsDict }) {
  return (
    <Section id="skills">
      <SectionHeading eyebrow={dict.eyebrow}>
        {dict.title}{" "}
        <span className="text-primary italic">{dict.titleHighlight}</span>
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Development Ecosystem */}
        <div className="lg:col-span-8 bg-surface-container-low p-6 sm:p-8 rounded-lg relative overflow-hidden">
          <CardTitle>{dict.devEcosystem}</CardTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map(({ name, Icon }) => (
              <div
                key={name}
                className="glass-panel p-5 rounded-sm hover:bg-surface-container-high transition-all duration-300 border-l-2 border-transparent hover:border-primary flex flex-col gap-3"
              >
                <Icon className="w-7 h-7 text-primary/70" aria-hidden />
                <h4 className="font-bold text-base font-[family-name:var(--font-headline)]">
                  {name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Soft skills */}
        <div className="lg:col-span-4 bg-surface-container p-6 sm:p-8 rounded-lg flex flex-col gap-10">
          <div>
            <CardTitle>{dict.aiIntelligence}</CardTitle>
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

          <div>
            <CardTitle>{dict.softSkills}</CardTitle>
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
        <div className="lg:col-span-5 bg-surface-container p-6 sm:p-8 rounded-lg relative overflow-hidden">
          <div className="relative z-10">
            <CardTitle>{dict.techSupport}</CardTitle>
            <p className="text-on-surface-variant leading-relaxed">
              {dict.techSupportDesc}
            </p>
          </div>
          <div
            className="absolute -bottom-6 -right-6 text-primary/5 select-none pointer-events-none"
            aria-hidden
          >
            <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
            </svg>
          </div>
        </div>

        {/* Languages */}
        <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-lg">
          <CardTitle>{dict.languages}</CardTitle>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dict.languageList.map((language) => (
              <li
                key={language.name}
                className="glass-panel rounded-sm p-5 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold font-[family-name:var(--font-headline)]">
                    {language.name}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono rounded-full shrink-0">
                    {language.level}
                  </span>
                </div>
                <span className="text-sm text-on-surface-variant">
                  {language.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
