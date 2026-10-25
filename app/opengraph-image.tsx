import { ImageResponse } from "next/og";

export const alt = "Fabricio Orihuela | Desarrollador Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ef4444",
          }}
        >
          Desarrollador full stack
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>
          Fabricio Orihuela Figueroa
        </div>
        <div style={{ fontSize: 36, marginTop: 32, color: "#a3a3a3" }}>
          Portafolio de proyectos y experiencia profesional
        </div>
      </div>
    ),
    size,
  );
}
