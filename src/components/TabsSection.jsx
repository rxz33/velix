// src/components/TabsSection.jsx

import { useState } from "react";

export default function TabsSection({
  heading,
  tabs,
}) {
  const [active, setActive] = useState(0);

  const current = tabs[active];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-5xl font-semibold">
          {heading}
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => setActive(index)}
                className={`w-full rounded-xl border p-5 text-left transition ${
                  active === index
                    ? "border-black bg-black text-white"
                    : "border-gray-200"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl border border-gray-200 p-8">
            <h3 className="mb-4 text-3xl font-semibold">
              {current.title}
            </h3>

            <p className="mb-6 text-gray-600">
              {current.description}
            </p>

            <ul className="space-y-3">
              {current.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3"
                >
                  <span className="h-2 w-2 rounded-full bg-black" />
                  {point}
                </li>
              ))}
            </ul>

            <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
