import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #334155 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "8px",
          fontSize: 14,
          fontWeight: "bold",
          letterSpacing: "-1px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        MMK
      </div>
    ),
    {
      ...size,
    }
  );
}
