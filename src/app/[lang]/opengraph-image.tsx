import { ImageResponse } from "next/og";
import { hasLocale } from "./dictionaries";

export const alt = "Isabela Rodríguez Rocha — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEs = hasLocale(lang) && lang === "es";

  const tagline = isEs ? "Desarrollo de Software" : "Software Development";
  const subtitle = isEs
    ? "Graduada en Computación · Construyendo software con propósito"
    : "Computing graduate · Building purposeful software";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#131313",
          color: "#e5e2e1",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(183,109,255,0.28) 0%, rgba(183,109,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            left: "-60px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,225,118,0.12) 0%, rgba(74,225,118,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "2px",
                background: "#ddb7ff",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 22,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#4ae176",
                fontWeight: 700,
              }}
            >
              {tagline}
            </span>
          </div>
          <span
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#ddb7ff",
              letterSpacing: "-0.04em",
            }}
          >
            IRR
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 0.95,
              color: "#e5e2e1",
            }}
          >
            Isabela
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 0.95,
              color: "#e5e2e1",
            }}
          >
            Rodríguez
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 0.95,
              color: "#ddb7ff",
            }}
          >
            Rocha
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(77,67,84,0.6)",
            paddingTop: "28px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#cfc2d6",
              letterSpacing: "-0.01em",
            }}
          >
            {subtitle}
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#988d9f",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
