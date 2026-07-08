import { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = [
  "All",
  "Bible Study",
  "Sunday Service",
  "Evening Prayer",
  "Praise & Worship",
  "Concerts",
  "Youth Service",
];

export default function FilterTabs() {
  const [active, setActive] = useState("All");

  return (
    <div
      style={{
        background: "transparent",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
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

      {/* More button */}
      <button
        style={{
          background: "transparent",
          color: "#ccc",
          border: "1px solid #3a3a3a",
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
        More
        <ChevronDown size={14} color="#ccc" />
      </button>
    </div>
  );
}