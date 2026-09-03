import type { Dictionary } from "@/app/[lang]/dictionaries";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

type ExpDict = Dictionary["experience"];

export default function ExperienceSection({ dict }: { dict: ExpDict }) {
  return (
    <Section id="experience">
      <SectionHeading eyebrow={dict.eyebrow}>{dict.sectionTitle}</SectionHeading>

      <ol className="flex flex-col">
        {dict.items.map((item, i) => (
          <li
            key={item.title}
            className="group flex flex-col md:flex-row gap-6 md:gap-8 border-b border-outline-variant/10 py-10 first:pt-0"
          >
            <span
              aria-hidden
              className="text-5xl md:text-7xl font-[family-name:var(--font-headline)] font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 leading-none md:w-32 shrink-0"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-headline)] font-bold text-on-surface">
                  {item.title}
                </h3>
                <span
                  className={`font-mono text-sm shrink-0 ${
                    i === 0 ? "text-tertiary" : "text-white/40"
                  }`}
                >
                  {item.period}
                </span>
              </div>

              <p className="text-primary text-lg md:text-xl font-medium mb-4">
                {item.company}
              </p>

              <p className="text-on-surface-variant max-w-3xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
