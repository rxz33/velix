import { useState } from "react";

const faqs = [
  {
    question: "How does the Voice AI work for dealerships?",
    answer:
      "Our Voice AI acts like your best sales rep, handling incoming calls 24/7. It can schedule service appointments, transfer to the right team member, book test drives, answer common questions about inventory, and qualify leads.",
  },
  {
    question: "Will customers know they're talking to AI?",
    answer:
      "Our AI is transparent about being AI-powered. Customers appreciate getting immediate assistance 24/7, and our AI transfers to human staff when needed.",
  },
  {
    question: "Can the AI handle multiple calls at once?",
    answer:
      "Yes, our AI can handle unlimited simultaneous calls, ensuring no customer ever gets a busy signal.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer:
      "Our clients typically see 340% ROI in the first year through increased lead conversion and improved operational efficiency.",
  },
  {
    question: "Is this secure and compliant?",
    answer:
      "Yes, we use enterprise-grade security with end-to-end encryption and strict access controls.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-16">
        
        {/* Left Side */}
        <div>
          <p className="text-2xl font-medium mb-6">
            Have any questions?
          </p>

          <a
            href="mailto:hello@vorynworks.com"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            Contact Us →
          </a>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-3">
            Frequently asked questions
          </h2>

          <p className="text-zinc-400 mb-12">
            Everything you need to know
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-medium">
                    {faq.question}
                  </span>

                  <span
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {open === index && (
                  <div className="px-6 pb-6 text-zinc-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
