import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Isabela Rodríguez Rocha";
/** Small square thumbnail — keeps link previews compact (not a large media card). */
export const size = { width: 400, height: 400 };
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "linear-gradient(145deg, #ddb7ff 0%, #b76dff 45%, #0566d9 100%)",
            padding: 3,
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
              width={254}
              height={254}
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
