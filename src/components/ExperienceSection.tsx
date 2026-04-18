import type { Dictionary } from "@/app/[lang]/dictionaries";

type ExpDict = Dictionary["experience"];

const experienceMeta = [
  { num: "01", period: "2024", periodActive: true },
  { num: "02", period: "2020 — Present", periodActive: false },
  { num: "03", period: "2019 — 2020", periodActive: false },
];

export default function ExperienceSection({ dict }: { dict: ExpDict }) {
  return (
    <section id="experience" className="py-2">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-6xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter leading-[0.9] text-on-surface">
            {dict.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experienceMeta.map((meta, i) => {
            const item = dict.items[i];
            return (
              <div
                key={meta.num}
                className="group flex flex-col md:flex-row gap-8 items-center border-b border-outline-variant/10 pb-12"
              >
                <span className="text-7xl font-[family-name:var(--font-headline)] font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 md:w-32">
                  {meta.num}
                </span>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-3xl font-[family-name:var(--font-headline)] font-bold text-on-surface">
                      {item.title}
                    </h3>
                    <span
                      className={`font-mono ${
                        meta.periodActive ? "text-tertiary" : "text-white/40"
                      }`}
                    >
                      {meta.period}
                    </span>
                  </div>
                  <h4 className="text-primary text-xl font-medium mb-4">
                    {item.company}
                  </h4>
                  <p className="text-on-surface-variant max-w-3xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Projects */}
      <div id="projects" className="max-w-[1440px] mx-auto px-8 my-12 scroll-mt-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-6xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter leading-[0.9] text-on-surface mb-2">
              {dict.projectsTitle}
            </h2>
            <p className="text-tertiary font-mono text-xs uppercase tracking-widest">
              {dict.projectsSubtitle}
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-outline-variant/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 flex flex-col gap-4 hover:bg-surface-container-high transition-all duration-300 border-l-4 border-transparent hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
              <span className="text-tertiary font-mono text-xs uppercase tracking-widest mt-auto">
                {dict.visitProject} &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
