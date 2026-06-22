import {
  Mic,
  Languages,
  Power,
  Repeat,
  UserCheck,
  Bell,
  Ban,
  BarChart3,
  Target,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  { icon: Mic, title: "Sounds human" },
  { icon: Languages, title: "Speaks any language" },
  { icon: Power, title: "Always on" },
  { icon: Repeat, title: "Warm transfers" },
  { icon: UserCheck, title: "Smart callback assignments" },
  { icon: Bell, title: "Callback alerts" },
  { icon: Ban, title: "No full voicemail boxes" },
  { icon: BarChart3, title: "Advanced analytics" },
  { icon: Target, title: "No missed leads" },
  { icon: SlidersHorizontal, title: "Customizable" },
];

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-shell">
        <div className="feature-intro">
          <h2>Turn every lead into an appointment</h2>
          <p>
            The only AI communications platform built from the ground up to
            feel human and deeply <br/> integrated with your existing systems to
            reliably turn every lead into an appointment.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="feature-item">
                <Icon size={40} strokeWidth={1.8} />
                <h3>{feature.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
