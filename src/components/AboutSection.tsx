import type { Dictionary } from "@/app/[lang]/dictionaries";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

type AboutDict = Dictionary["about"];

export default function AboutSection({ dict }: { dict: AboutDict }) {
  return (
    <Section id="about">
      <SectionHeading eyebrow={dict.eyebrow}>
        {dict.title}{" "}
        <span className="text-primary italic">{dict.titleHighlight}</span>
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Narrative + quick facts */}
        <div className="lg:col-span-7">
          <div className="space-y-6 max-w-2xl">
            {dict.narrative.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/15 border border-outline-variant/15 rounded-lg overflow-hidden">
            {dict.facts.map((fact) => (
              <div key={fact.label} className="bg-surface px-6 py-5">
                <dt className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-[family-name:var(--font-headline)]">
                  {fact.label}
                </dt>
                <dd className="font-[family-name:var(--font-headline)] font-semibold text-on-surface">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Education */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-lg p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="font-mono text-tertiary uppercase tracking-[0.3em] text-xs">
                {dict.educationLabel}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface">
                {dict.degreeTitle}
              </h3>
              <span className="text-tertiary font-mono text-sm shrink-0 mt-1">
                {dict.degreeYear}
              </span>
            </div>

            <p className="text-primary text-lg font-medium mb-6">
              {dict.university}
            </p>

            <p className="text-on-surface-variant leading-relaxed mb-8">
              {dict.degreeDescription}
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="bg-surface-container-high px-3 py-1 text-xs font-mono border border-outline-variant/20 text-tertiary rounded-sm">
                {dict.statusValue}
              </span>
              <span className="bg-surface-container-high px-3 py-1 text-xs font-mono border border-outline-variant/20 rounded-sm">
                {dict.focusValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
