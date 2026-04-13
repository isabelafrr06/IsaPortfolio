import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const acceptLang = request.headers.get("accept-language") || "";
  const preferred = acceptLang.includes("es") ? "es" : defaultLocale;

  request.nextUrl.pathname = `/${preferred}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon\\.ico|.*\\.(?:jpg|png|svg|ico|webp)$).*)"],
};
