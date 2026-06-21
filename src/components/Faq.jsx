import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the Voice AI work for dealerships?",
    answer:
      "Our Voice AI acts like your best sales rep, handling incoming calls 24/7. It can schedule service appointments, transfer to the right team member, book test drives, answer common questions about inventory, and qualify leads. All conversations are recorded and the AI learns your dealership's specific processes.",
  },
  {
    question: "Will customers know they're talking to AI?",
    answer:
      "Yes. Velix is transparent when it is AI-powered, while still sounding natural and helpful. When needed, it can hand the conversation off to your staff without losing context.",
  },
  {
    question: "Can the AI handle multiple calls at once?",
    answer:
      "Yes. The system can handle many conversations simultaneously, so customers are not left waiting during peak traffic hours.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer:
      "ROI depends on dealership volume, but customers typically see gains from more booked appointments, fewer missed calls, and stronger staff efficiency.",
  },
  {
    question: "Is this secure and compliant?",
    answer:
      "Yes. Velix uses enterprise-grade security practices, controlled access, and infrastructure designed for reliability and compliance-conscious teams.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-shell">
        <div className="faq-left">
          <div className="faq-left-content">
            <p>Have any questions?</p>
            <a href="mailto:hello@velix.ai">Contact us</a>
          </div>
        </div>

        <div className="faq-panel">
          <h2>Frequently asked questions</h2>
          <p className="faq-subtitle">Everything you need to know about Velix</p>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <article key={faq.question} className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={26} className="faq-icon" />
                  </button>

                  {isOpen ? <div className="faq-answer">{faq.answer}</div> : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

