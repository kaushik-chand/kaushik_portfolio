import { ImageResponse } from "next/og";

export const alt = "Kaushik — UX/UI Designer & Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0C0E",
          color: "#EEEFF1",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#E86F2A", letterSpacing: 4 }}>
          PORTFOLIO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05 }}>Kaushik.</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#8B909A" }}>
            UX/UI Designer & Front-End Developer
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8B909A" }}>
          Product interfaces · Research → Next.js
        </div>
      </div>
    ),
    { ...size },
  );
}
