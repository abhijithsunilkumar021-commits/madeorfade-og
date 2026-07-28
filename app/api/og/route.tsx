import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title =
      searchParams.get("title") ?? "Help Zack Unlock";

    const subtitle =
      searchParams.get("subtitle") ?? "15% Off";

    const description =
      searchParams.get("description") ??
      "Vote now to help Zack earn a discount — you might unlock an offer too.";

    const logo =
      searchParams.get("logo") ??
      "https://de8afdb6bb32a20d5e48e45f0172a0a5.cdn.bubble.io/f1784040620687x486632144730352960/madeorfade%201.svg";

    const regular = await readFile(
      path.join(process.cwd(), "fonts", "ZalandoSans-Regular.ttf")
    );

    const black = await readFile(
      path.join(process.cwd(), "fonts", "ZalandoSans-Black.ttf")
    );

    return new ImageResponse(
      (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#EEF3FF",
          padding: "70px",
          boxSizing: "border-box",
          fontFamily: "Zalando",
        }}
      >
        {/* ========= Decorative Background ========= */}

        <div
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "rgba(93,139,255,0.10)",
            right: -100,
            top: -90,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 470,
            height: 470,
            borderRadius: "50%",
            background: "rgba(93,139,255,0.08)",
            left: -170,
            bottom: -230,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 720,
            height: 720,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.30)",
            left: 250,
            top: -120,
          }}
        />

        {/* ========= Main Container ========= */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ========= Brand ========= */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <img
              src={logo}
              width={42}
              height={42}
            />

            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#3602A9",
              }}
            >
              Made or Fade
            </div>
          </div>

          {/* ========= Spacer ========= */}

          <div style={{ height: 72 }} />

          {/* ========= Hero ========= */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 760,
            }}
          >
            <div
              style={{
                fontSize: 92,
                lineHeight: 0.98,
                letterSpacing: "-4px",
                fontWeight: 900,
                color: "#3602A9",
              }}
            >
              {title}
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 92,
                lineHeight: 0.98,
                letterSpacing: "-4px",
                fontWeight: 900,
                color: "#3602A9",
              }}
            >
              {subtitle}
            </div>

            <div
              style={{
                marginTop: 40,
                width: 690,
                fontSize: 31,
                lineHeight: 1.4,
                fontWeight: 400,
                color: "#6B7382",
              }}
            >
              {description}
            </div>
          </div>

          {/* ========= Bottom Accent ========= */}

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 90,
                height: 6,
                borderRadius: 100,
                background: "#3602A9",
              }}
            />

            <div
              style={{
                marginLeft: 16,
                fontSize: 18,
                color: "#7C8595",
              }}
            >
              madeorfade.com
            </div>
          </div>
        </div>
      </div>
    ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Zalando",
            data: regular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Zalando",
            data: black,
            weight: 900,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify(
        {
          error:
            error instanceof Error ? error.message : String(error),
        },
        null,
        2
      ),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}