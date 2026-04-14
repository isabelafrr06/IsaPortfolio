import type { Dictionary } from "@/app/[lang]/dictionaries";

type FooterDict = Dictionary["footer"];

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/isabelafrr06" },
  { label: "GitHub", href: "https://github.com/isabelafrr06" },
  { label: "Email", href: "mailto:isabelafrr06@gmail.com" },
];

export default function Footer({ dict }: { dict: FooterDict }) {
  return (
    <footer className="w-full py-12 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-8 w-full max-w-[1440px] mx-auto font-[family-name:var(--font-headline)] uppercase tracking-[0.2em] text-[10px]">
        <div className="text-white/40">{dict.copyright}</div>
        <div className="flex gap-12">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-tertiary transition-colors duration-500 opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
