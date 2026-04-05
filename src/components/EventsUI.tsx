"use client";

import { useState } from "react";

export default function EventsUI({ events }: any) {
  const [activeTab, setActiveTab] = useState("upcoming");

  const filtered = events.filter(
    (e: any) => e.type === activeTab
  );

  return (
    <section className="events-page">

      <h1 className="events-title">EVENTS</h1>

      {/* TABS */}
      <div className="events-tabs">

        <button
          className={activeTab === "upcoming" ? "active-tab" : ""}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>

        <button
          className={activeTab === "past" ? "active-tab" : ""}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>

      </div>

      {/* CARDS */}
      <div className="events-grid">

        {filtered.map((e: any) => (
          <div className="event-card" key={e._id}>

            <img src={e.image} alt={e.title} />

            <div className="event-info">
              <h3>{e.title}</h3>
              <p>{e.location}</p>
              <span>{e.date}</span>
              <p>{e.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}