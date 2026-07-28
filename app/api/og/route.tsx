import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "red",
          color: "white",
          fontSize: "80px",
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