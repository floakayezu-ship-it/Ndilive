import { useState } from "react";
import { Calendar } from "lucide-react";

const tabs = ["Today", "This Week", "This Month", "This Year"];

export default function DateFilterTabs() {
  const [active, setActive] = useState("Today");

  return (
    <div
      style={{
        background: "transparent",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            background: active === tab ? "#555" : "transparent",
            color: active === tab ? "#fff" : "#ccc",
            border: active === tab ? "none" : "1px solid #444",
            borderRadius: "6px",
            padding: "7px 16px",
            fontSize: "13px",
            fontWeight: active === tab ? 500 : 400,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {tab}
        </button>
      ))}

      {/* Calendar View button */}
      <button
        style={{
          background: "transparent",
          color: "#ccc",
          border: "1px solid #444",
          borderRadius: "6px",
          padding: "7px 14px",
          fontSize: "13px",
          fontWeight: 400,
          cursor: "pointer",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <Calendar size={14} color="#ccc" />
        Calendar View
      </button>
    </div>
  );
}