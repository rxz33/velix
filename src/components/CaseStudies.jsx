export default function CaseStudies() {
  const studies = [
    {
      logo: "/logos/glendale.png",
      title: "The support has been absolutely stellar",
      author: "Peter Kim, GM",
      stat: "38 hrs",
      label: "Saved Per Week",
    },
    {
      logo: "/logos/freeman.png",
      stat: "$100k",
      label: "Incremental Profit",
    },
    {
      logo: "/logos/san-leandro.png",
      title:
        "Our Service appointments have more than doubled and Service Advisors have more time to sell in the drive!",
      author: "Carlos Hidalgo, GM",
      stat: "+150",
      label: "Additional Appointments",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-400 mb-4">Case studies</p>

        <h2 className="text-5xl font-semibold mb-16">
          Trusted by industry leaders
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900"
            >
              <img
                src={item.logo}
                alt=""
                className="h-10 object-contain mb-8"
              />

              {item.title && (
                <>
                  <h3 className="text-xl font-medium mb-4">
                    "{item.title}"
                  </h3>

                  <p className="text-sm text-gray-400 mb-8">
                    {item.author}
                  </p>
                </>
              )}

              <div>
                <div className="text-4xl font-bold mb-2">
                  {item.stat}
                </div>

                <p className="text-sm text-gray-400">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
