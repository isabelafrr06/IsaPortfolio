import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main>
        <HeroSection heroDict={dict.hero} aboutDict={dict.about} />
        <ExperienceSection dict={dict.experience} />
        <SkillsSection dict={dict.skills} />
        <ContactSection dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
