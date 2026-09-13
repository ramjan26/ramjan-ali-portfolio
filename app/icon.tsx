import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18151d",
          borderRadius: 14,
          color: "#f5f1f8",
          fontFamily: "Georgia, serif",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <span style={{ color: "#8d66ea" }}>&lt;</span>RA<span style={{ color: "#8d66ea" }}>&gt;</span>
      </div>
    ),
    { ...size }
  );
}
