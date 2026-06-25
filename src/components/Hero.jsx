import { ArrowRight, Phone } from "lucide-react";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <div className="container-large">
      <section className="hero-layout">
        <div className="hero-copy">
          <a href="#" className="small-banner">
            <div className="small-banner_gradient" />

            <div className="small-banner_inner">
              <div className="small-banner_dot" />

              <div className="small-banner_text">
                Announcing our $6M seed round
              </div>
            </div>
          </a>

          <h1 className="heading-style-h1">
            Bring more <span className="text-style-nowrap">customers in</span>
          </h1>
          <div className="text-color-secondary">
            <p className="hero-description">
              Use AI to answer customers any time, across any channel the way
              your best dealership employee would.
            </p>
          </div>

          <div className="hero-actions">
            <a href="#" className="primary-cta">
              <span>Book more appointments</span>
              <ArrowRight size={18} />
            </a>

            <a href="#" className="secondary-cta">
              <Phone size={20} />
              <span>Talk to USEFLAI</span>
            </a>
          </div>
        </div>

        <HeroDashboard />
      </section>
    </div>
  );
}
