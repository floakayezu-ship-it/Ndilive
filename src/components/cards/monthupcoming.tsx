import { useState } from "react";
import { Bell, MapPin, Users, ChevronDown, ChevronRight } from "lucide-react";

const allEvents = [
  {
    id: 1,
    month: "JUN",
    day: 5,
    title: "Worship Concert 2025",
    church: "Faith Assembly",
    date: "Jun 5, 2025 • 6:00 PM (CAT)",
    location: "In-Person",
    interested: "342",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    month: "JUN",
    day: 12,
    title: "Men's Bible Study",
    church: "Grace House",
    date: "Jun 12, 2025 • 7:00 PM (CAT)",
    location: "Online",
    interested: "128",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    month: "JUN",
    day: 18,
    title: "Night of Miracles",
    church: "Victory Church",
    date: "Jun 18, 2025 • 8:00 PM (CAT)",
    location: "In-Person",
    interested: "560",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=225&fit=crop",
  },
  {
    id: 4,
    month: "JUN",
    day: 25,
    title: "Women of Faith Conference",
    church: "Hope Community Church",
    date: "Jun 25 – Jun 27, 2025",
    location: "In-Person",
    interested: "410",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=225&fit=crop",
  },
  {
    id: 5,
    month: "JUN",
    day: 7,
    title: "Youth Empowerment Summit",
    church: "New Life Church",
    date: "Jun 7, 2025 • 5:00 PM (CAT)",
    location: "In-Person",
    interested: "275",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=225&fit=crop",
  },
  {
    id: 6,
    month: "JUN",
    day: 14,
    title: "Healing & Deliverance Service",
    church: "The Rock Church",
    date: "Jun 14, 2025 • 6:30 PM (CAT)",
    location: "In-Person",
    interested: "489",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b671e5b28?w=400&h=225&fit=crop",
  },
  {
    id: 7,
    month: "JUN",
    day: 20,
    title: "Praise & Worship Night",
    church: "Christ The Light Church",
    date: "Jun 20, 2025 • 7:00 PM (CAT)",
    location: "Online",
    interested: "321",
    thumbnail: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=225&fit=crop",
  },
  {
    id: 8,
    month: "JUN",
    day: 28,
    title: "End of Month Prayer",
    church: "Faith Assembly",
    date: "Jun 28, 2025 • 9:00 PM (CAT)",
    location: "Online",
    interested: "198",
    thumbnail: "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?w=400&h=225&fit=crop",
  },
];

function RemindButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#2e2e2e" : "#222",
        border: hovered ? "1px solid #555" : "1px solid #333",
        borderRadius: "8px",
        color: hovered ? "#fff" : "#ccc",
        fontSize: "12px",
        padding: "8px 14px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
        transition: "all 0.2s",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      <Bell size={12} /> Remind Me
    </button>
  );
}

function EventRow({ event }: { event: typeof allEvents[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "14px 16px",
        borderRadius: "10px",
        background: hovered ? "#1e1e1e" : "transparent",
        border: hovered ? "1px solid #2e2e2e" : "1px solid transparent",
        transition: "background 0.2s, border-color 0.2s",
        cursor: "pointer",
      }}
    >
      {/* Date Column */}
      <div style={{ textAlign: "center", minWidth: "36px", flexShrink: 0 }}>
        <p style={{ color: "#888", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", margin: 0 }}>
          {event.month}
        </p>
        <p style={{ color: "#fff", fontSize: "26px", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
          {event.day}
        </p>
      </div>

      {/* Thumbnail */}
      <div style={{ width: "100px", height: "64px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
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
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          color: hovered ? "#fff" : "#e0e0e0",
          fontSize: "clamp(13px, 1.3vw, 15px)",
          fontWeight: 700,
          margin: "0 0 2px",
          transition: "color 0.2s",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {event.title}
        </p>

        {/* Church + verified */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
          <span style={{ color: "#aaa", fontSize: "12px" }}>{event.church}</span>
          <span style={{
            background: "#045327", borderRadius: "50%",
            width: "13px", height: "13px", flexShrink: 0,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: "7px", color: "#fff", fontWeight: 700,
          }}>✓</span>
        </div>

        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ color: "#777", fontSize: "11px" }}>{event.date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "3px", color: "#777", fontSize: "11px" }}>
            <MapPin size={10} color="#777" /> {event.location}
          </span>
          <span style={{
            color: "#fff",
            fontSize: "10px",
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: "4px",
          }}>
          </span>
        </div>
      </div>

      {/* Right: Remind + Interested */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
        <RemindButton />
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Users size={11} color="#666" />
          <span style={{ color: "#666", fontSize: "11px" }}>{event.interested} interested</span>
        </div>
      </div>
    </div>
  );
}

export default function ThisMonth() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 4, allEvents.length));
      setLoading(false);
    }, 600);
  };

  const visibleEvents = allEvents.slice(0, visibleCount);
  const hasMore = visibleCount < allEvents.length;

  return (
    <div style={{ width: "100%" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <span style={{ color: "#fff", fontSize: "18px", fontWeight: 700 }}>This Month</span>
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

      {/* Divider */}
      <div style={{ borderTop: "1px solid #222", marginBottom: "4px" }} />

      {/* Event Rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {visibleEvents.map((event, index) => (
          <div key={event.id}>
            <EventRow event={event} />
            {index < visibleEvents.length - 1 && (
              <div style={{ borderTop: "1px solid #1e1e1e", margin: "0 16px" }} />
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div style={{ borderTop: "1px solid #222", marginTop: "4px", paddingTop: "16px", textAlign: "center" }}>
          <button
            onClick={handleLoadMore}
            disabled={loading}
            style={{
              background: "transparent",
              border: "none",
              color: loading ? "#666" : "#ccc",
              fontSize: "13px",
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
            }}
          >
            {loading ? "Loading..." : "Load More Events"}
            {!loading && <ChevronDown size={15} />}
          </button>
        </div>
      )}
    </div>
  );
}