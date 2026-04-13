"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type NavDict = Dictionary["nav"];

const navKeys = ["home", "about", "experience", "skills", "contact"] as const;
const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "#home",
  about: "#about",
  experience: "#experience",
  skills: "#skills",
  contact: "#contact",
};

export default function Navbar({
  dict,
  lang,
}: {
  dict: NavDict;
  lang: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto font-[family-name:var(--font-headline)] tracking-tighter">
        <div className="text-2xl font-bold tracking-tighter text-primary">
          IRR
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navKeys.map((key) => (
            <a
              key={key}
              href={navHrefs[key]}
              className="text-white/60 font-medium hover:text-primary transition-all duration-300"
            >
              {dict[key]}
            </a>
          ))}
          <LanguageSwitcher lang={lang} />
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-linear-to-br from-primary to-primary-container text-on-primary-fixed font-bold py-2.5 px-6 rounded-sm scale-95 duration-200 ease-in-out hover:scale-100 transition-all"
        >
          {dict.hireMe}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-low px-8 pb-6 flex flex-col gap-4 font-[family-name:var(--font-headline)]">
          {navKeys.map((key) => (
            <a
              key={key}
              href={navHrefs[key]}
              className="text-white/60 font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {dict[key]}
            </a>
          ))}
          <LanguageSwitcher lang={lang} />
        </div>
      )}
    </nav>
  );
}
