import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type ContactDict = Dictionary["contact"];

export default function ContactSection({ dict }: { dict: ContactDict }) {
  return (
    <section id="contact" className="pt-18 pb-24 px-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <header className="mb-24">
        <h2 className="text-6xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter leading-[0.9] text-on-surface">
          {dict.heading} <br />
          <span className="text-primary italic">{dict.headingHighlight}</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface-container-low p-12 flex flex-col gap-12 group transition-all duration-500 hover:bg-surface-container-high">
            <div className="flex flex-col gap-1">
              <span className="text-tertiary font-mono text-xs uppercase tracking-[0.3em] mb-2">
                {dict.portfolioIdentity}
              </span>
              <h3 className="text-3xl font-[family-name:var(--font-headline)] font-bold text-white">
                Isabela Rodríguez Rocha
              </h3>
              <p className="text-on-surface-variant">
                {dict.role}
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="mt-1 w-10 h-10 flex items-center justify-center bg-surface-container-highest">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-[family-name:var(--font-headline)]">
                    {dict.electronicMail}
                  </p>
                  <a
                    href="mailto:isabelafrr06@gmail.com"
                    className="text-xl font-[family-name:var(--font-headline)] font-semibold text-white hover:text-primary transition-colors"
                  >
                    isabelafrr06@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="mt-1 w-10 h-10 flex items-center justify-center bg-surface-container-highest">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-[family-name:var(--font-headline)]">
                    {dict.directLine}
                  </p>
                  <a
                    href="tel:+50683047863"
                    className="text-xl font-[family-name:var(--font-headline)] font-semibold text-white hover:text-primary transition-colors"
                  >
                    (506) 8304-7863
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-6">
                <div className="mt-1 w-10 h-10 flex items-center justify-center bg-surface-container-highest">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-[family-name:var(--font-headline)]">
                    {dict.basedIn}
                  </p>
                  <p className="text-xl font-[family-name:var(--font-headline)] font-semibold text-white">
                    {dict.locationValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-[family-name:var(--font-headline)] transition-colors group-focus-within:text-primary">
                  {dict.fullName}
                </label>
                <input
                  type="text"
                  placeholder={dict.namePlaceholder}
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-b-2 focus:border-primary"
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-[family-name:var(--font-headline)] transition-colors group-focus-within:text-primary">
                  {dict.emailAddress}
                </label>
                <input
                  type="email"
                  placeholder={dict.emailPlaceholder}
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-b-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-[family-name:var(--font-headline)] transition-colors group-focus-within:text-primary">
                {dict.yourMessage}
              </label>
              <textarea
                placeholder={dict.messagePlaceholder}
                rows={4}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-xl text-white placeholder:text-white/20 resize-none focus:outline-none focus:border-b-2 focus:border-primary"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 pt-2">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 neon-gradient text-on-primary-fixed font-bold font-[family-name:var(--font-headline)] uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                {dict.sendMessage}
              </button>
              <p className="text-xs text-on-surface-variant max-w-xs">
                {dict.disclaimer}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
