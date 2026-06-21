import { ArrowRight, Phone } from "lucide-react";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="hero-layout">
      <div className="hero-copy">
        <div className="small-banner">
          <div className="small-banner_gradient" aria-hidden="true" />
          <div className="pill-banner small-banner_inner">
            <span className="pill-dot" />
            <span>Announcing our $6M seed round</span>
          </div>
        </div>

        <h1>Bring more customers in</h1>
        <p>
          Use AI to answer customers any time, across any channel the way your
          best dealership employee would.
        </p>

        <div className="hero-actions">
          <a href="#" className="primary-cta">
            <span>Book more appointments</span>
            <ArrowRight size={18} />
          </a>

          <a href="#" className="secondary-cta">
            <Phone size={20} />
            <span>Talk to Velix</span>
          </a>
        </div>
      </div>

      <HeroDashboard />
    </section>
  );
}
