import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

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
        <RevealOnScroll>
          <AboutSection dict={dict.about} />
        </RevealOnScroll>
        <RevealOnScroll>
          <ExperienceSection dict={dict.experience} />
        </RevealOnScroll>
        <RevealOnScroll>
          <ProjectsSection dict={dict.projects} />
        </RevealOnScroll>
        <RevealOnScroll>
          <SkillsSection dict={dict.skills} />
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactSection dict={dict.contact} lang={lang} />
        </RevealOnScroll>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
