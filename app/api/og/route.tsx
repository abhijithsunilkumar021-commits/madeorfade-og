import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

const heading =
  searchParams.get("heading") ?? "Help Zack Unlock • 15% Off";

const description =
  searchParams.get("description") ??
  "Vote now to help Zack earn a discount — you might unlock an offer too.";

const logo =
  searchParams.get("logo") ??
  "https://de8afdb6bb32a20d5e48e45f0172a0a5.cdn.bubble.io/f1784040620687x486632144730352960/madeorfade%201.svg";
  const origin = new URL(request.url).origin;

const apiKey = request.headers.get("x-api-key");

if (apiKey !== process.env.OG_API_KEY) {
  return new Response("Unauthorized", {
    status: 401,
  });
}

const regular = await fetch(
  `${origin}/fonts/ZalandoSans-Regular.ttf`
).then((r) => r.arrayBuffer());

const black = await fetch(
  `${origin}/fonts/ZalandoSans-Black.ttf`
).then((r) => r.arrayBuffer());

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
              width={36}
              height={36}
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
              display: "flex",
              width: "930px",
              fontSize: 72,
              fontWeight: 900,
              color: "#0C1E41",
              lineHeight: 1.1,
              whiteSpace: "normal",
              flexWrap: "wrap",
            }}
          >
            {heading}
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
}