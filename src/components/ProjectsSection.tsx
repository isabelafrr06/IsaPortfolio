import type { Dictionary } from "@/app/[lang]/dictionaries";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

type ProjectsDict = Dictionary["projects"];

export default function ProjectsSection({ dict }: { dict: ProjectsDict }) {
  return (
    <Section id="projects">
      <SectionHeading eyebrow={dict.eyebrow}>{dict.title}</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dict.items.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card rounded-lg p-8 flex flex-col gap-4 hover:bg-surface-container-high transition-all duration-300 border-l-4 border-transparent hover:border-primary"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-headline)] font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <svg
                className="w-5 h-5 shrink-0 text-white/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>

            <p className="text-on-surface-variant leading-relaxed">
              {project.description}
            </p>

            <span className="text-tertiary font-mono text-xs uppercase tracking-widest mt-auto pt-2">
              {dict.visitProject}&nbsp;&rarr;
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
