import { ImageResponse } from "@vercel/og";

export const runtime = "nodejs";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "red",
          color: "white",
          fontSize: 80,
        }}
      >
        Hello
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}