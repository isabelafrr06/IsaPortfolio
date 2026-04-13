"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const otherLang = lang === "en" ? "es" : "en";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const basePath = pathname.replace(`/${lang}`, `/${otherLang}`);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${basePath}${hash}`);
  };

  return (
    <a
      href={pathname.replace(`/${lang}`, `/${otherLang}`)}
      onClick={handleClick}
      className="text-white/60 font-medium hover:text-primary transition-all duration-300 uppercase text-sm tracking-wide cursor-pointer"
    >
      {otherLang === "es" ? "ES" : "EN"}
    </a>
  );
}
