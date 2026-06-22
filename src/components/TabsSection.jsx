import { useState } from "react";

import serviceImg from "../assets/reach.png";
import outreachImg from "../assets/mail.png";
import recallImg from "../assets/mesg.png";

const VISUALS = [
  { image: serviceImg },
  { image: outreachImg },
  { image: recallImg },
];

function TabVisual({ visual }) {
  return (
    <div className="tabs-visual-card">
      <img
        src={visual.image}
        alt=""
        className="tabs-visual-image"
      />
    </div>
  );
}

export default function TabsSection({ heading, tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const current = tabs[activeTab];
  const currentVisual = VISUALS[activeTab];

  return (
    <section className="tabs-section">
      <div className="tabs-shell">

        <h2 className="tabs-heading">{heading}</h2>

        <div
          className="tabs-header-row"
          role="tablist"
          aria-label={`${heading} tabs`}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`tabs-header-tab ${
                activeTab === index ? "is-active" : ""
              }`}
            >
              <div className="tab-loader">
                <div className="tab-loader_fill" />
              </div>

              <div className="tab_desc">
                <span>{tab.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="tabs-content-grid">

          <TabVisual visual={currentVisual} />

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

            <div className="tabs-buttons">
              <a href="#" className="primary-btn">
                Schedule a Call
              </a>

              <a href="#" className="secondary-btn">
                Learn More
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}