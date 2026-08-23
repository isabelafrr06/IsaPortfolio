import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Isabela Rodríguez Rocha";
export const size = { width: 1200, height: 1200 };
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
        {/* Soft purple glow */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-15%",
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(183,109,255,0.35) 0%, rgba(183,109,255,0) 68%)",
            display: "flex",
          }}
        />
        {/* Soft blue glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-5%",
            left: "-10%",
            width: "55%",
            height: "55%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(5,102,217,0.22) 0%, rgba(5,102,217,0) 70%)",
            display: "flex",
          }}
        />
        {/* Soft green accent */}
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            right: "12%",
            width: "30%",
            height: "30%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,225,118,0.12) 0%, rgba(74,225,118,0) 70%)",
            display: "flex",
          }}
        />

        {/* Portrait frame */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 780,
            height: 780,
            borderRadius: "50%",
            background:
              "linear-gradient(145deg, #ddb7ff 0%, #b76dff 45%, #0566d9 100%)",
            padding: 6,
            position: "relative",
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
              width={768}
              height={768}
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
