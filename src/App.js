import React, { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  return (
    <div
      style={{
        background: "radial-gradient(circle at 50% 20%, #111 0%, #000 100%)",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Golden particle background animation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,215,0,0.08), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.06), transparent 60%)",
          animation: "moveParticles 10s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      ></div>

      {/* Smoky light layer */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.15) 0%, transparent 70%)",
          filter: "blur(90px)",
          transform: "translate(-50%, -50%)",
          animation: "floatGlow 12s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      ></div>

      {/* Main container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          paddingTop: "90px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "all 1.8s ease",
        }}
      >
        {/* LOGO with cinematic glow */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          <img
            src="/logo.png"
            alt="Target Marketing Logo"
            style={{
              width: "230px",
              opacity: 0,
              transform: loaded
                ? "translateY(0) scale(1)"
                : "translateY(100px) scale(0.8)",
              animation: loaded ? "logoRise 2s ease forwards" : "none",
              filter:
                "drop-shadow(0 0 40px rgba(255,215,0,0.7)) drop-shadow(0 0 80px rgba(255,215,0,0.3))",
            }}
          />
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: 900,
            color: "#FFD700",
            textShadow:
              "0 0 40px #FFD700, 0 0 90px rgba(255,215,0,0.6), 0 0 160px rgba(255,215,0,0.4)",
            marginBottom: "20px",
            letterSpacing: "2px",
            opacity: loaded ? 1 : 0,
            animation: loaded ? "titleFade 2.5s ease 1s forwards" : "none",
          }}
        >
          TARGET MARKETING ACADEMY
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.4rem",
            color: "#ddd",
            marginBottom: "30px",
            opacity: loaded ? 1 : 0,
            animation: loaded ? "fadeIn 2s ease 2s forwards" : "none",
          }}
        >
          Innovation. Intelligence. Impact.
        </p>

        {/* Description */}
        <p
          style={{
            maxWidth: "780px",
            margin: "0 auto 60px auto",
            fontSize: "1.1rem",
            color: "#bbb",
            lineHeight: "1.8",
            opacity: loaded ? 1 : 0,
            animation: loaded ? "fadeIn 2s ease 2.3s forwards" : "none",
          }}
        >
          Explore the{" "}
          <span style={{ color: "#FFD700", fontWeight: 600 }}>GPS</span>{" "}
          ecosystem — <b>Trading</b>, <b>Marketing</b>, <b>Dropshipping</b>,{" "}
          <b>Languages</b>, and <b>Design Studio</b> — where education meets
          innovation powered by{" "}
          <span style={{ color: "#FFD700", fontWeight: 600 }}>AI</span>.
        </p>

        {/* Buttons with cinematic hover */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          {[
            "GPS TRADING",
            "GPS MARKETING",
            "GPS DROPSHIPPING",
            "GPS LANGUAGES",
            "GPS STUDIO",
          ].map((item, i) => (
            <button
              key={i}
              style={{
                background:
                  "linear-gradient(135deg, #FFD700 0%, #B8860B 100%)",
                border: "none",
                borderRadius: "14px",
                padding: "16px 30px",
                fontWeight: "700",
                fontSize: "1rem",
                color: "#000",
                cursor: "pointer",
                transition: "all 0.4s ease",
                boxShadow:
                  "0 0 25px rgba(255,215,0,0.3), inset 0 0 10px rgba(255,255,255,0.1)",
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-6px) scale(1.05)";
                e.target.style.boxShadow =
                  "0 0 50px rgba(255,215,0,0.8), 0 0 80px rgba(255,215,0,0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow =
                  "0 0 25px rgba(255,215,0,0.3), inset 0 0 10px rgba(255,255,255,0.1)";
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        © 2025 Target Marketing Systems | Powered by GPS AI
      </footer>

      <style>
        {`
          @keyframes moveParticles {
            0% { background-position: 0 0, 100px 100px; }
            100% { background-position: 200px -200px, -200px 200px; }
          }

          @keyframes floatGlow {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            100% { transform: translate(-50%, -55%) scale(1.1); opacity: 1; }
          }

          @keyframes logoRise {
            0% {
              transform: translateY(100px) scale(0.8);
              opacity: 0;
              filter: brightness(0) blur(20px);
            }
            60% {
              opacity: 1;
              filter: brightness(1.4) blur(0);
            }
            100% {
              transform: translateY(0) scale(1);
            }
          }

          @keyframes titleFade {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
