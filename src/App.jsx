import { ArrowRight, Phone } from "lucide-react";

function VelixMark() {
  return (
    <div className="brand-mark" aria-label="Velix logo">
      <img src="/velix-logo.svg" alt="Velix logo" className="brand-mark-image" />
      <span>Velix</span>
    </div>
  );
}

function App() {
  return (
    <main className="page-shell">
      <div className="bg-orb bg-orb-left" />
      <div className="bg-orb bg-orb-right" />
      <div className="bg-slice" />

      <header className="top-nav">
        <VelixMark />

        <nav className="nav-links">
          <a href="#">Service</a>
          <a href="#">Sales</a>
          <a href="#">Blog</a>
          <a href="#">Case Studies</a>
          <a href="#">Jobs</a>
        </nav>

        <div className="nav-actions">
          <a href="#" className="login-link">Login</a>
          <a href="#" className="demo-button">Book Demo</a>
        </div>
      </header>

      <section className="hero-layout">
        <div className="hero-copy">
          <div className="pill-banner">
            <span className="pill-dot" />
            <span>Announcing our $6M seed round</span>
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

        <div className="dashboard-image-wrap">
          <img
            src="/velix-dashboard.svg"
            alt="Velix analytics dashboard"
            className="dashboard-image"
          />
        </div>
      </section>

      <a href="#" className="floating-call">
        <Phone size={20} />
        <span>Talk to Velix</span>
      </a>
    </main>
  );
}

export default App;
