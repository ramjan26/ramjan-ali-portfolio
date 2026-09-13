import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #18151d 0%, #241d30 100%)",
          color: "#f5f1f8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#8d66ea",
            fontFamily: "Arial, sans-serif",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          SOFTWARE / AI / DATA / PRODUCT
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1.1, marginBottom: 24 }}>
          Ramjan Ali
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 820,
            fontFamily: "Arial, sans-serif",
            fontSize: 30,
            lineHeight: 1.4,
            color: "#c9c2d1",
          }}
        >
          I turn ideas, data and intelligent systems into useful digital experiences.
        </div>
      </div>
    ),
    { ...size }
  );
}
