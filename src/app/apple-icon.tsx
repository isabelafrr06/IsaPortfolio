import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Small app icon used by WhatsApp/iMessage as the compact link thumbnail. */
export default async function Icon() {
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
            width: 148,
            height: 148,
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
              width={144}
              height={144}
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
