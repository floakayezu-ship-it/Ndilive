import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Bell, Share2 } from "lucide-react";

const TARGET_DATE = new Date("2025-08-01T19:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hrs: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

function RegisterButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#c62828" : "#e53935",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "10px 20px",
        fontSize: "clamp(11px, 1.2vw, 13px)",
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background 0.2s, transform 0.15s",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered ? "0 4px 12px rgba(229,57,53,0.4)" : "none",
      }}
    >
      Register Now
    </button>
  );
}

function OutlineButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.08)" : "transparent",
        color: hovered ? "#fff" : "#ccc",
        border: hovered ? "1px solid #666" : "1px solid #444",
        borderRadius: "6px",
        padding: "9px 16px",
        fontSize: "clamp(11px, 1.2vw, 12px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
        transition: "background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      {icon} {label}
    </button>
  );
}

export default function FeaturedEvent() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .featured-layout {
            flex-direction: column !important;
          }
          .featured-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }
          .featured-buttons button {
            justify-content: center;
            width: 100% !important;
          }
          .countdown-box {
            font-size: 18px !important;
            padding: 8px 10px !important;
            min-width: 40px !important;
          }
          .featured-title {
            font-size: 18px !important;
          }
          .meta-row {
            flex-direction: column !important;
            gap: 6px !important;
          }
        }
        @media (max-width: 400px) {
          .featured-buttons {
            gap: 6px !important;
          }
          .countdown-row {
            gap: 6px !important;
          }
        }
      `}</style>

      <div style={{
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        minHeight: "190px",
        display: "flex",
        alignItems: "stretch",
      }}>

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=400&fit=crop"
          alt="Worship"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Dark gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.90) 45%, rgba(13,13,13,0.25) 100%)",
        }} />

        {/* Main layout */}
        <div
          className="featured-layout"
          style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            padding: "clamp(16px, 3vw, 22px) clamp(16px, 3vw, 24px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: "clamp(12px, 2vw, 24px)",
          }}
        >

          {/* LEFT: All text + countdown */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, minWidth: 0 }}>

            <div>
              {/* Badge */}
              <span style={{
                background: "#e53935",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "3px 8px",
                borderRadius: "4px",
                display: "inline-block",
                marginBottom: "8px",
              }}>
                Featured Event
              </span>

              {/* Title */}
              <h2
                className="featured-title"
                style={{
                  color: "#fff",
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  fontWeight: 700,
                  margin: "0 0 4px",
                  lineHeight: 1.2,
                }}
              >
                Youth Conference 2025
              </h2>

              {/* Church */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px", flexWrap: "wrap" }}>
                <span style={{ color: "#ccc", fontSize: "clamp(11px, 1.2vw, 13px)" }}>Christ The Light Church</span>
                <span style={{
                  background: "#045327",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "8px",
                  color: "#fff",
                  fontWeight: 700,
                  flexShrink: 0,
                }}>✓</span>
              </div>

              {/* Meta */}
              <div
                className="meta-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(8px, 1.5vw, 18px)",
                  flexWrap: "wrap",
                  marginBottom: "12px",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#aaa", fontSize: "clamp(10px, 1.1vw, 12px)" }}>
                  <Calendar size={12} color="#aaa" /> Jul 28 – Aug 1, 2025
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#aaa", fontSize: "clamp(10px, 1.1vw, 12px)" }}>
                  <Clock size={12} color="#aaa" /> 7:00 PM (CAT)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#aaa", fontSize: "clamp(10px, 1.1vw, 12px)" }}>
                  <MapPin size={12} color="#aaa" /> Online & In-Person
                </span>
              </div>

              {/* Description */}
              <p style={{ color: "#bbb", fontSize: "clamp(11px, 1.1vw, 12px)", lineHeight: 1.6, margin: "0 0 16px" }}>
                A 5-day life-changing conference for teens and young adults.<br />
                Worship, Word, Workshops & more!
              </p>
            </div>

            {/* Countdown */}
            <div>
              <p style={{ color: "#777", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                Starts In
              </p>
              <div className="countdown-row" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { label: "DAYS", value: pad(timeLeft.days) },
                  { label: "HRS", value: pad(timeLeft.hrs) },
                  { label: "MINS", value: pad(timeLeft.mins) },
                  { label: "SECS", value: pad(timeLeft.secs) },
                ].map(({ label, value }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div
                      className="countdown-box"
                      style={{
                        background: "#1e1e1e",
                        border: "1px solid #2e2e2e",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        color: "#fff",
                        fontSize: "clamp(16px, 2vw, 24px)",
                        fontWeight: 700,
                        minWidth: "clamp(36px, 4vw, 52px)",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </div>
                    <p style={{ color: "#888", fontSize: "9px", marginTop: "6px", letterSpacing: "0.1em", fontWeight: 500 }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Buttons */}
          <div
            className="featured-buttons"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: "8px",
              flexShrink: 0,
              flexWrap: "wrap",
            }}
          >
            <RegisterButton />
            <OutlineButton icon={<Bell size={12} />} label="Remind Me" />
            <OutlineButton icon={<Share2 size={12} />} label="Share" />
          </div>

        </div>
      </div>
    </>
  );
}