"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TeamUI({ members }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const [selectedYear, setSelectedYear] = useState("");
  const [groupedData, setGroupedData] = useState<any>({});

  // Extract years
  const years = [...new Set(members.map((m: any) => m.year))];

  // Default year
  useEffect(() => {
    if (years.length) setSelectedYear(years[0]);
  }, [members]);

  // Group by domain after filtering by year
  useEffect(() => {
    const filtered = members.filter(
      (m: any) => m.year === selectedYear
    );

    const grouped: any = {};

    filtered.forEach((m: any) => {
      if (!grouped[m.domain]) {
        grouped[m.domain] = [];
      }
      grouped[m.domain].push(m);
    });

    setGroupedData(grouped);
  }, [selectedYear, members]);

  // Cursor glow
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="team-container">
      <div id="cursor-glow"></div>

      {/* SIDEBAR BUTTON */}
      <div className="hamburger" onClick={() => setSidebarOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 900,
          }}
        />
      )}

      {/* SIDEBAR */}
      <div className={`team-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button onClick={() => setSidebarOpen(false)}>✕ Close</button>

        {years.map((y: string, index: number) => (
          <button
            key={index}
            onClick={() => {
              setSelectedYear(y);
              setSidebarOpen(false);
            }}
            className={selectedYear === y ? "active" : ""}
          >
            {y} Team
          </button>
        ))}
      </div>

      {/* MAIN */}
      <div className="team-main">
        <motion.h1
          style={{
            color: "red",
            fontSize: "48px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          OUR TEAM
        </motion.h1>

        {/* YEAR DROPDOWN */}
        <div style={{ marginBottom: "20px" }}>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="year-dropdown"
          >
            {years.map((y: string, i: number) => (
              <option key={i} value={y}>
                {y} Team
              </option>
            ))}
          </select>
        </div>

        {/* DOMAIN CARDS */}
        <div className="team-sections">
          {Object.keys(groupedData).map((domain: string, index: number) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="team-title">
                {domain} <span>Team</span>
              </h2>

              <div className="team-grid">
                {groupedData[domain].map((m: any) => (
                  <div
                    key={m._id}
                    className="team-member"
                    onClick={() => setSelectedMember(m)}
                  >
                    <img src={m.image} alt={m.name} />
                    <h3>{m.name}</h3>
                    <p>{m.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedMember && (
        <div
          className="team-modal"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="team-modal-card"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              style={{ width: "100px", borderRadius: "50%" }}
            />
            <h2>{selectedMember.name}</h2>
            <p>{selectedMember.role}</p>
            <p>{selectedMember.domain}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}