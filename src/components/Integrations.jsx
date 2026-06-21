const logos = [
  "dealertrack.svg",
  "dealerfx.png",
  "tekion.svg",
  "xtime.svg",
  "cdk.svg",
  "elead.png",
  "vinsolutions.svg",
  "mykaarma.svg",
  "vauto.svg",
  "reynolds.svg",
];

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold mb-4">
          Seamless system integration
        </h2>

        <p className="text-zinc-400 max-w-xl mx-auto mb-10">
          We integrate with your existing dealership technology stack,
          including your scheduler, DMS, and CRM.
        </p>

        <button className="px-6 py-3 rounded-full border border-zinc-700 mb-16">
          Schedule a call
        </button>

        <div className="space-y-8">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={`/integrations/${logo}`}
                alt=""
                className="h-10 object-contain"
              />
            ))}
          </div>

          <div className="flex gap-12 animate-marquee-reverse whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={`/integrations/${logo}`}
                alt=""
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
