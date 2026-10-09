import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Meer Mehran Khan - Data Analyst | Business Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent gradient bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #818cf8, #a78bfa)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-2px",
            marginBottom: "12px",
          }}
        >
          Meer Mehran Khan
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            background: "linear-gradient(90deg, #818cf8, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "24px",
          }}
        >
          Data Analyst | Business Analyst
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["SQL", "Python", "Power BI", "Excel"].map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: "1px solid #27272a",
                background: "#18181b",
                color: "#a1a1aa",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: 16,
            color: "#71717a",
          }}
        >
          portfolio-meer-mehran-khan.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
