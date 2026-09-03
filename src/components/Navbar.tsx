"use client";

import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type NavDict = Dictionary["nav"];

// Each key doubles as the id of the section it points to.
const navKeys = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

export default function Navbar({
  dict,
  lang,
}: {
  dict: NavDict;
  lang: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      // Sections sit inside transformed reveal wrappers, so offsetTop is
      // relative to those wrappers and unusable here.
      const marker = window.innerHeight * 0.4;
      let active = "home";
      for (const key of navKeys) {
        const el = document.getElementById(key);
        if (el && el.getBoundingClientRect().top <= marker) active = key;
      }
      setActiveSection(active);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Absolute so the nav also works from pages like /[lang]/privacy.
  const hrefFor = (key: string) => `/${lang}#${key}`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto font-[family-name:var(--font-headline)] tracking-tighter">
        <a
          href={hrefFor("home")}
          className="text-2xl font-bold tracking-tighter text-primary"
        >
          IRR
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navKeys.map((key) => (
            <a
              key={key}
              href={hrefFor(key)}
              className={`relative font-medium transition-all duration-300 ${
                activeSection === key
                  ? "text-primary"
                  : "text-white/60 hover:text-primary"
              }`}
            >
              {dict[key]}
              {activeSection === key && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary" />
              )}
            </a>
          ))}
          <LanguageSwitcher lang={lang} />
        </div>

        <a
          href={hrefFor("contact")}
          className="hidden lg:inline-block bg-linear-to-br from-primary to-primary-container text-on-primary-fixed font-bold py-2.5 px-6 rounded-sm scale-95 duration-200 ease-in-out hover:scale-100 transition-all"
        >
          {dict.hireMe}
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-on-surface cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
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
        <div className="lg:hidden bg-surface-container-low px-6 md:px-12 pb-6 flex flex-col gap-4 font-[family-name:var(--font-headline)]">
          {navKeys.map((key) => (
            <a
              key={key}
              href={hrefFor(key)}
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
