import { PhoneCall } from "lucide-react";
import heroImage from "../assets/Screenshot 2026-06-22 134156.png";

const SERVICE_VISUAL = {
  eyebrow: "incoming call",
  image: heroImage,
  alt: "Velix service conversation preview",
};

function TabVisual({ heading }) {
  return (
    <div className="tabs-visual-card">
      <div className="tabs-visual-eyebrow">
        <PhoneCall size={18} strokeWidth={2.4} />
        <span>{heading === "Service" ? SERVICE_VISUAL.eyebrow : "live outreach"}</span>
      </div>

      <img
        src={SERVICE_VISUAL.image}
        alt={SERVICE_VISUAL.alt}
        className="tabs-visual-image"
      />
    </div>
  );
}

export default function TabsSection({ heading, tabs }) {
  const current = tabs[0];

  return (
    <section className="tabs-section">
      <div className="tabs-shell">
        <h2 className="tabs-heading">{heading}</h2>

        <div className="tabs-header-row" role="tablist" aria-label={`${heading} tabs`}>
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              className={`tabs-header-tab custom-tab ${index === 0 ? "is-active" : ""}`}
              aria-selected={index === 0}
            >
              <span className="tabs-header-line tab-loader_fill" />
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="tabs-content-grid">
          <TabVisual heading={heading} />

          <div className="tabs-copy-panel">
            <h3>{current.title}</h3>
            <p>{current.description}</p>

            <ul className="tabs-points-list">
              {current.points.map((point) => (
                <li key={point}>
                  <span className="tabs-point-dot" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
