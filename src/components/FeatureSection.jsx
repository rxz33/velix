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
  { icon: Mic, title: "Sounds Human" },
  { icon: Languages, title: "Speaks Any Language" },
  { icon: Power, title: "Always On" },
  { icon: Repeat, title: "Warm Transfers" },
  { icon: UserCheck, title: "Smart Callback Assignments" },
  { icon: Bell, title: "Callback Alerts" },
  { icon: Ban, title: "No Full Voicemail Boxes" },
  { icon: BarChart3, title: "Advanced Analytics" },
  { icon: Target, title: "No Missed Leads" },
  { icon: SlidersHorizontal, title: "Customizable" },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Turn every lead into an appointment
          </h2>

          <p className="text-gray-400">
            The only AI communications platform built from the ground up to
            feel human and deeply integrated with your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Icon size={42} className="text-slate-400 mb-4" />

                <h3 className="text-white font-medium">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
