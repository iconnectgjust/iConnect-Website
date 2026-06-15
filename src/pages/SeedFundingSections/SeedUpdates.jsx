import "./SeedUpdates.css";
import React, { useState } from "react";

const TABS = ["All", "Announcements", "Deadlines", "Schedules", "Results"];

const announcements = [
  {
    id: 1,
    date: "15 June 2026",
    time: "10:00 AM",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "URGENT", type: "urgent", dot: true },
    ],
    title: "Applications Now Open for Seed Funding 2026",
    description:
      "The Seed Funding Opportunity 2026 is officially accepting applications. All eligible UG, PG, and PhD students are encouraged to submit their proposals through the official portal.",
    category: "Announcements",
  },
  {
    id: 2,
    date: "15 June 2026",
    time: "10:00 AM",
    tags: [
      { label: "RESULT", type: "result" },
      { label: "ANNOUNCEMENT", type: "announcement" },
    ],
    title: "Pitching Round Schedule Released",
    description:
      "The schedule for preliminary pitching rounds has been finalized. Teams will present in 8-minute slots followed by a 4-minute Q&A with the panel. Check your assigned time slot and prepare accordingly.",
    category: "Schedules",
  },
  {
    id: 3,
    date: "15 June 2026",
    time: "10:00 AM",
    tags: [{ label: "DEADLINE", type: "deadline" }],
    title: "Venue Updated — Moved to Innovation Hub",
    description:
      "The main event venue has been relocated from the Engineering Auditorium to the newly inaugurated Innovation Hub in Block D. The space offers better infrastructure, breakout rooms, and dedicated networking areas.",
    category: "Deadlines",
  },
  {
    id: 4,
    date: "15 June 2026",
    time: "10:00 AM",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "URGENT", type: "urgent", dot: true },
    ],
    title: "Applications Now Open for Seed Funding 2026",
    description:
      "The Seed Funding Opportunity 2026 is officially accepting applications. All eligible UG, PG, and PhD students are encouraged to submit their proposals through the official portal.",
    category: "Results",
  },
  {
    id: 5,
    date: "15 June 2026",
    time: "10:00 AM",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "URGENT", type: "urgent", dot: true },
    ],
    title: "Applications Now Open for Seed Funding 2026",
    description:
      "The Seed Funding Opportunity 2026 is officially accepting applications. All eligible UG, PG, and PhD students are encouraged to submit their proposals through the official portal.",
    category: "Announcements",
  },
];

function SeedUpdates() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? announcements
      : announcements.filter((item) => item.category === activeTab);

  return (
    <section id="updates" className="announcements">
      <p className="eyebrow">Updates</p>
      <h2 className="heading">Announcements &amp; Important notices</h2>

      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="timeline">
        {filtered.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-line" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="timeline-date">{item.date}</span>
                <span className="timeline-time">{item.time}</span>
              </div>

              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span className={`tag tag-${tag.type}`} key={tag.label}>
                    {tag.dot && <span className="tag-dot" />}
                    {tag.label}
                  </span>
                ))}
              </div>

              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="empty-state">No updates in this category yet.</p>
        )}
      </div>
    </section>
  );
}

export default SeedUpdates;
