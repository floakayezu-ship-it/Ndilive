import { useRef, useState } from "react";
import { Bell, Share2, Eye, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    time: "6:00 PM",
    title: "Evening Prayer",
    church: "Hope Community Church",
    watching: "120",
    thumbnail: "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    time: "7:30 PM",
    title: "Bible Study – Romans",
    church: "Grace House",
    watching: "250",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    time: "8:30 PM",
    title: "Worship Night",
    church: "Faith Assembly",
    watching: "312",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=225&fit=crop",
  },
  {
    id: 4,
    time: "9:00 PM",
    title: "Friday Youth Hangout",
    church: "New Life Church",
    watching: "180",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=225&fit=crop",
  },
  {
    id: 5,
    time: "9:30 PM",
    title: "Sunday Morning Live",
    church: "Christ The Light Church",
    watching: "540",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b671e5b28?w=400&h=225&fit=crop",
  },
  {
    id: 6,
    time: "10:00 AM",
    title: "Book of John – Part 3",
    church: "The Rock Church",
    watching: "198",
    thumbnail: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=225&fit=crop",
  },
  {
    id: 7,
    time: "11:00 AM",
    title: "Morning Worship Session",
    church: "Grace House",
    watching: "430",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=225&fit=crop",
  },
  {
    id: 8,
    time: "12:00 PM",
    title: "Midday Reflection",
    church: "Hope Community Church",
    watching: "275",
    thumbnail: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=400&h=225&fit=crop",
  },
  {
    id: 9,
    time: "1:00 PM",
    title: "Teen Discipleship",
    church: "Faith Assembly",
    watching: "142",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=225&fit=crop",
  },
  {
    id: 10,
    time: "2:30 PM",
    title: "Afternoon Intercession",
    church: "New Life Church",
    watching: "89",
    thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=225&fit=crop",
  },
  {
    id: 11,
    time: "3:00 PM",
    title: "Psalms Deep Dive",
    church: "Christ The Light Church",
    watching: "310",
    thumbnail: "https://images.unsplash.com/photo-1445112098124-3e76dd67983c?w=400&h=225&fit=crop",
  },
  {
    id: 12,
    time: "4:00 PM",
    title: "Healing & Worship",
    church: "The Rock Church",
    watching: "220",
    thumbnail: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=225&fit=crop",
  },
  {
    id: 13,
    time: "5:00 PM",
    title: "Youth Power Hour",
    church: "Grace House",
    watching: "167",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=225&fit=crop",
  },
  {
    id: 14,
    time: "5:30 PM",
    title: "Evening Communion",
    church: "Hope Community Church",
    watching: "395",
    thumbnail: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=400&h=225&fit=crop",
  },
  {
    id: 15,
    time: "6:30 PM",
    title: "Night Watch Prayer",
    church: "Faith Assembly",
    watching: "260",
    thumbnail: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&h=225&fit=crop",
  },
];

const btnBase: React.CSSProperties = {
  background: "#2a2a2a",
  border: "1px solid #333",
  borderRadius: "6px",
  color: "#ccc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s, border-color 0.2s, color 0.2s",
};

function RemindButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...btnBase,
        flex: 1,
        fontSize: "11px",
        padding: "8px 0",
        gap: "5px",
        background: hovered ? "#3a3a3a" : "#2a2a2a",
        borderColor: hovered ? "#555" : "#333",
        color: hovered ? "#fff" : "#ccc",
      }}
    >
      <Bell size={11} /> Remind Me
    </button>
  );
}

function ShareButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...btnBase,
        padding: "8px 12px",
        background: hovered ? "#3a3a3a" : "#2a2a2a",
        borderColor: hovered ? "#555" : "#333",
        color: hovered ? "#fff" : "#ccc",
      }}
    >
      <Share2 size={11} />
    </button>
  );
}

function EventCard({ event }: { event: typeof events[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "clamp(160px, 18vw, 220px)",
        flexShrink: 0,
        background: hovered ? "#222" : "#1a1a1a",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        border: hovered ? "1px solid #444" : "1px solid transparent",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", height: "clamp(100px, 10vw, 130px)" }}>
        <img
          src={event.thumbnail}
          alt={event.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.2s",
            opacity: hovered ? 1 : 0.85,
          }}
        />

        {/* Dark overlay on hover */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: hovered ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.25)",
          transition: "background 0.2s",
        }} />

        {/* Time badge */}
        <div style={{
          position: "absolute", top: "8px", left: "8px",
          background: "#e53935",
          color: "#fff", fontSize: "11px", fontWeight: 700,
          padding: "2px 7px", borderRadius: "4px",
        }}>
          {event.time}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "10px 12px 12px" }}>
        <p style={{
          color: hovered ? "#fff" : "#e0e0e0",
          fontSize: "clamp(12px, 1.2vw, 14px)",
          fontWeight: 700,
          margin: "0 0 4px",
          lineHeight: 1.3,
          transition: "color 0.2s",
        }}>
          {event.title}
        </p>

        {/* Church + verified */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
          <span style={{ color: "#aaa", fontSize: "clamp(10px, 1vw, 11px)" }}>{event.church}</span>
          <span style={{
            background: "#045327", borderRadius: "50%",
            width: "13px", height: "13px",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: "7px", color: "#fff", fontWeight: 700,
            flexShrink: 0,
          }}>✓</span>
        </div>

        {/* Watching */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "10px" }}>
          <Eye size={11} color="#888" />
          <span style={{ color: "#888", fontSize: "clamp(10px, 1vw, 11px)" }}>{event.watching} watching</span>
        </div>

        {/* Responsive Buttons */}
        <div style={{ display: "flex", gap: "6px" }}>
          <RemindButton />
          <ShareButton />
        </div>
      </div>
    </div>
  );
}

export default function TodayEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollRight = () => scrollRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -600, behavior: "smooth" });

  return (
    <div style={{ width: "100%" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#fff", fontSize: "18px", fontWeight: 700 }}>Today</span>
          <span style={{ color: "#e53935", fontSize: "8px" }}>●</span>
          <span style={{ color: "#888", fontSize: "13px" }}>May 24, 2025</span>
        </div>
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
              background: "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <ChevronRight size={28} color="#fff" style={{ transform: "rotate(180deg)" }} />
          </button>
        )}

        {/* Cards Row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ overflowX: "auto", scrollbarWidth: "none" }}
        >
          <div style={{ display: "flex", gap: "12px", paddingBottom: "4px", width: "max-content" }}>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
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
              background: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <ChevronRight size={28} color="#fff" />
          </button>
        )}

      </div>
    </div>
  );
}