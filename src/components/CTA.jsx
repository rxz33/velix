import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="closing-cta-section">
      <div className="closing-cta-shell">
        <h2>Ready to bring more customers to your dealership?</h2>

        <div className="closing-cta-actions">
          <a href="#" className="closing-cta-primary">
            <span>Book a demo</span>
            <ArrowRight size={18} />
          </a>

          <a href="#" className="closing-cta-secondary">
            <Phone size={20} />
            <span>Talk to Velix</span>
          </a>
        </div>
      </div>
    </section>
  );
}

