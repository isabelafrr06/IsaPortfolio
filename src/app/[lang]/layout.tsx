import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "../globals.css";
import BackgroundShapes from "@/components/BackgroundShapes";
import CustomCursor from "@/components/CustomCursor";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");

  const pageUrl = `${siteUrl.replace(/\/$/, "")}/${lang}`;
  const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID;

  return {
    metadataBase: new URL(siteUrl),
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.png", type: "image/png", sizes: "256x256" },
      ],
      apple: "/favicon.png",
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: pageUrl,
      type: "website",
      locale: lang === "es" ? "es_CR" : "en_US",
      images: [
        {
          url: "/favicon.png",
          width: 256,
          height: 256,
          alt: "Isabela Rodríguez Rocha",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["/favicon.png"],
    },
    ...(fbAppId ? { facebook: { appId: fbAppId } } : {}),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`dark ${plusJakarta.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-surface text-on-surface overflow-x-hidden">
        <BackgroundShapes />
        <CustomCursor />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
