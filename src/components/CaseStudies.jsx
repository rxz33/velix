import { ArrowRight } from "lucide-react";

const studies = [
  {
    brand: ["GLENDALE", "INFINITI."],
    quote: "The support has been absolutely stellar",
    author: "Peter Kim, GM",
    stat: "38 hrs",
    label: "Saved Per Week",
    variant: "quote",
  },
  {
    brand: ["FREEMAN LEXUS"],
    stat: "$100k",
    label: "Incremental Profit",
    variant: "profit",
  },
  {
    brand: ["SAN", "LEANDRO"],
    quote:
      "Our Service appointments have more than doubled and Service Advisors have more time to sell in the drive!",
    author: "Carlos Hidalgo, GM",
    stat: "+150",
    label: "Additional Appointments",
    variant: "quote-long",
  },
];

function StudyLogo({ brand, centered = false }) {
  return (
    <div className={`case-study-logo${centered ? " is-center" : ""}`}>
      {brand.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="case-studies-section">
      <div className="case-studies-shell">
        <p className="case-studies-eyebrow">Case studies</p>
        <h2 className="case-studies-heading">Trusted by industry leaders</h2>

        <div className="case-studies-grid">
          {studies.map((study) => (
            <article
              key={`${study.brand.join("-")}-${study.stat}`}
              className={`case-study-card case-study-${study.variant}`}
            >
              <div className="case-study-top">
                <StudyLogo
                  brand={study.brand}
                  centered={study.variant === "profit"}
                />

                <a
                  href="#"
                  className="case-study-arrow"
                  aria-label={`Open ${study.brand.join(" ")} case study`}
                >
                  <ArrowRight size={30} />
                </a>
              </div>

              {study.quote ? (
                <div className="case-study-copy">
                  <h3>"{study.quote}"</h3>
                  <p>{study.author}</p>
                </div>
              ) : null}

              <div
                className={`case-study-stat${study.variant === "profit" ? " is-centered" : ""}`}
              >
                <strong>{study.stat}</strong>
                <span>{study.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

