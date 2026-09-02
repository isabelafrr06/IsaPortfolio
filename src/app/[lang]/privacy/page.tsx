import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: dict.privacy.metadataTitle,
    description: dict.privacy.metadataDescription,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const privacy = dict.privacy;

  return (
    <>
      <Navbar dict={dict.nav} lang={lang as Locale} />
      <main className="min-h-screen pt-32 pb-24 px-8 max-w-3xl mx-auto">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mb-12 font-[family-name:var(--font-headline)] uppercase tracking-[0.2em]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {privacy.backHome}
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter leading-[0.95] text-on-surface mb-4">
            {privacy.title}
          </h1>
          <p className="text-on-surface-variant text-sm">{privacy.lastUpdated}</p>
        </header>

        <div className="space-y-12">
          {privacy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold font-[family-name:var(--font-headline)] text-primary mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer dict={dict.footer} lang={lang as Locale} />
    </>
  );
}
