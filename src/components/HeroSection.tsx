import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type HeroDict = Dictionary["hero"];
type AboutDict = Dictionary["about"];

export default function HeroSection({
  heroDict,
  aboutDict,
}: {
  heroDict: HeroDict;
  aboutDict: AboutDict;
}) {
  return (
    <>
      <section id="home" className="relative pt-30 xl:pt-0 min-h-screen flex items-center">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary" />
              <span className="font-mono text-tertiary uppercase tracking-[0.3em] text-xs">
                {heroDict.tagline}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-glow font-[family-name:var(--font-headline)]">
              Isabela
              <br />
              Rodríguez
              <br />
              Rocha
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-on-surface-variant font-light leading-relaxed mb-12 border-l-2 border-outline-variant pl-8">
              {heroDict.description}
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-linear-to-br from-primary to-primary-container text-on-primary-fixed font-bold rounded-sm hover:brightness-110 transition-all flex items-center gap-2 group"
              >
                {heroDict.viewWork}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-outline-variant/30 text-primary font-bold rounded-sm hover:bg-white/5 transition-all"
              >
                {heroDict.readCV}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-12 border-t border-outline-variant/10 pt-12 w-full max-w-2xl">
              <a href="#about" className="group">
                <div className="text-primary font-bold text-2xl mb-1 group-hover:brightness-125 transition-all">{heroDict.stat1Value}</div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] group-hover:text-white/60 transition-colors">
                  {heroDict.stat1Label}
                </div>
              </a>
              <a href="#projects" className="group">
                <div className="text-primary font-bold text-2xl mb-1 group-hover:brightness-125 transition-all">{heroDict.stat2Value}</div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] group-hover:text-white/60 transition-colors">
                  {heroDict.stat2Label}
                </div>
              </a>
              <a href="#skills" className="group">
                <div className="text-primary font-bold text-2xl mb-1 group-hover:brightness-125 transition-all">{heroDict.stat3Value}</div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] group-hover:text-white/60 transition-colors">
                  {heroDict.stat3Label}
                </div>
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="relative w-full max-w-[280px] mx-auto aspect-square glass-card overflow-hidden rounded-sm">
              <Image
                src="/portrait.png"
                alt={aboutDict.portraitAlt}
                fill
                sizes="280px"
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Foundation */}
      <section id="about" className="py-20 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-[family-name:var(--font-headline)] font-extrabold tracking-tighter text-on-surface text-center mb-4">
              {aboutDict.academicTitle} {aboutDict.academicTitle2}
            </h2>
          </div>

          <div className="group flex flex-col md:flex-row gap-8 items-center border-b border-outline-variant/10 pb-12">
            <span className="text-7xl font-[family-name:var(--font-headline)] font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 md:w-32">
              01
            </span>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-3xl font-[family-name:var(--font-headline)] font-bold text-on-surface">
                  {aboutDict.degreeTitle}
                </h3>
                <span className="text-tertiary font-mono">
                  {aboutDict.degreeYear}
                </span>
              </div>
              <h4 className="text-primary text-xl font-medium mb-4">
                {aboutDict.university}
              </h4>
              <p className="text-on-surface-variant max-w-3xl leading-relaxed mb-6">
                {aboutDict.degreeDescription}
              </p>
              <div className="flex gap-4">
                <div className="bg-surface-container-high px-3 py-1 text-xs font-mono border border-outline-variant/20 text-tertiary">
                  {aboutDict.statusValue}
                </div>
                <div className="bg-surface-container-high px-3 py-1 text-xs font-mono border border-outline-variant/20">
                  {aboutDict.focusValue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
