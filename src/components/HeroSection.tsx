import type { Dictionary } from "@/app/[lang]/dictionaries";
import HeroHeadline from "@/components/HeroHeadline";
import PortraitTilt from "@/components/PortraitTilt";

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
    <section
      id="home"
      className="relative pt-32 pb-24 xl:pt-0 xl:pb-0 min-h-screen flex items-center scroll-mt-24"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-primary" />
            <span className="font-mono text-tertiary uppercase tracking-[0.3em] text-xs">
              {heroDict.tagline}
            </span>
          </div>

          <HeroHeadline />

          <p className="max-w-xl text-lg md:text-xl text-on-surface-variant font-light leading-relaxed mb-12 border-l-2 border-outline-variant pl-6 md:pl-8">
            {heroDict.description}
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
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
              {heroDict.aboutMe}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-12 border-t border-outline-variant/10 pt-12 w-full max-w-2xl">
            <a href="#about" className="group">
              <div className="text-primary font-bold text-xl md:text-2xl mb-1 group-hover:brightness-125 transition-all">
                {heroDict.stat1Value}
              </div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] group-hover:text-white/60 transition-colors">
                {heroDict.stat1Label}
              </div>
            </a>
            <a href="#skills" className="group">
              <div className="text-primary font-bold text-xl md:text-2xl mb-1 group-hover:brightness-125 transition-all">
                {heroDict.stat2Value}
              </div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] group-hover:text-white/60 transition-colors">
                {heroDict.stat2Label}
              </div>
            </a>
            <a href="#skills" className="group">
              <div className="text-primary font-bold text-xl md:text-2xl mb-1 group-hover:brightness-125 transition-all">
                {heroDict.stat3Value}
              </div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] group-hover:text-white/60 transition-colors">
                {heroDict.stat3Label}
              </div>
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="lg:col-span-5 relative">
          <PortraitTilt alt={aboutDict.portraitAlt} />
        </div>
      </div>
    </section>
  );
}
