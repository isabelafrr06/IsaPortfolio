import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Isabela Rodríguez Rocha";
/**
 * Must stay under 300×200 so WhatsApp uses the compact thumbnail layout.
 * Without this tag, WhatsApp scrapes the large portrait from the page instead.
 */
export const size = { width: 200, height: 200 };
export const contentType = "image/png";

export default async function Image() {
  const portrait = await readFile(
    join(process.cwd(), "public/portrait.png")
  );
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131313",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-20%",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(183,109,255,0.4) 0%, rgba(183,109,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 164,
            height: 164,
            borderRadius: "50%",
            background:
              "linear-gradient(145deg, #ddb7ff 0%, #b76dff 45%, #0566d9 100%)",
            padding: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#131313",
            }}
          >
            <img
              src={portraitSrc}
              alt=""
              width={160}
              height={160}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
