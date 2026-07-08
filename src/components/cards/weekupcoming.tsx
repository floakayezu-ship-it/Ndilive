import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const weekEvents = [
  {
    id: 1,
    month: "MAY",
    day: 26,
    time: "8:00 PM",
    title: "Prayer Night",
    church: "Faith Assembly",
  },
  {
    id: 2,
    month: "MAY",
    day: 27,
    time: "6:30 PM",
    title: "Women's Fellowship",
    church: "Grace House",
  },
  {
    id: 3,
    month: "MAY",
    day: 28,
    time: "7:00 PM",
    title: "Bible Study",
    church: "The Rock Church",
  },
  {
    id: 4,
    month: "MAY",
    day: 29,
    time: "8:00 PM",
    title: "Praise & Worship",
    church: "New Life Church",
  },
  {
    id: 5,
    month: "MAY",
    day: 30,
    time: "7:30 PM",
    title: "Youth Service",
    church: "Hope Community",
  },
  {
    id: 6,
    month: "MAY",
    day: 31,
    time: "9:00 AM",
    title: "Sunday Morning Service",
    church: "Christ The Light Church",
  },
  {
    id: 7,
    month: "JUN",
    day: 1,
    time: "6:00 PM",
    title: "Evening Prayer",
    church: "Hope Community",
  },
  {
    id: 8,
    month: "JUN",
    day: 2,
    time: "7:00 PM",
    title: "Men's Fellowship",
    church: "Faith Assembly",
  },
];

function WeekCard({ event }: { event: typeof weekEvents[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: "clamp(140px, 16vw, 180px)",
        flexShrink: 0,
        background: hovered ? "#252525" : "#1a1a1a",
        border: hovered ? "1px solid #444" : "1px solid #2a2a2a",
        borderRadius: "10px",
        padding: "14px",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.4)" : "none",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      {/* Month + Time row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2px" }}>
        <span style={{ color: "#e53935", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em" }}>
          {event.month}
        </span>
        <span style={{ color: "#888", fontSize: "10px" }}>{event.time}</span>
      </div>

      {/* Day + Title row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <span style={{
          color: "#888",
          fontSize: "clamp(22px, 3vw, 28px)",
          fontWeight: 800,
          lineHeight: 1,
          flexShrink: 0,
        }}>
          {event.day}
        </span>
        <div style={{ minWidth: 0 }}>
          <p style={{
            color: hovered ? "#fff" : "#e0e0e0",
            fontSize: "clamp(12px, 1.2vw, 13px)",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.3,
            transition: "color 0.2s",
          }}>
            {event.title}
          </p>
          <p style={{
            color: "#888",
            fontSize: "clamp(10px, 1vw, 11px)",
            margin: "2px 0 0",
          }}>
            {event.church}
          </p>
        </div>
      </div>

      {/* Category badge */}
      <div style={{ marginTop: "8px" }}>
        <span style={{
          color: "#fff",
          fontSize: "10px",
          fontWeight: 600,
          padding: "2px 8px",
          borderRadius: "4px",
          display: "inline-block",
        }}>
        </span>
      </div>
    </div>
  );
}

export default function ThisWeek() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollRight = () => scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });

  return (
    <div style={{ width: "100%" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <span style={{ color: "#fff", fontSize: "18px", fontWeight: 700 }}>This Week</span>
        <button style={{
          background: "transparent",
          border: "none",
          color: "#e53935",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "2px",
        }}>
          View all <ChevronRight size={14} />
        </button>
      </div>

      {/* Scroll Container */}
      <div style={{ position: "relative" }}>

        {/* Left Arrow */}
        {showLeft && (
          <button
            onClick={scrollLeft}
            style={{
              position: "absolute", left: 0, top: 0, zIndex: 10,
              height: "100%", width: "48px", border: "none", cursor: "pointer",
              background: "linear-gradient(to right, rgba(0,0,0,0.85), transparent)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <ChevronRight size={26} color="#fff" style={{ transform: "rotate(180deg)" }} />
          </button>
        )}

        {/* Cards Row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ overflowX: "auto", scrollbarWidth: "none" }}
        >
          <div style={{ display: "flex", gap: "10px", paddingBottom: "4px", width: "max-content" }}>
            {weekEvents.map((event) => (
              <WeekCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {showRight && (
          <button
            onClick={scrollRight}
            style={{
              position: "absolute", right: 0, top: 0, zIndex: 10,
              height: "100%", width: "48px", border: "none", cursor: "pointer",
              background: "linear-gradient(to left, rgba(0,0,0,0.85), transparent)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <ChevronRight size={26} color="#fff" />
          </button>
        )}

      </div>
    </div>
  );
}