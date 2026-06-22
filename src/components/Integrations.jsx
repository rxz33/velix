import { ArrowRight } from "lucide-react";
import cdkLogo from "../assets/logo1/cdk.svg";
import dealerFxLogo from "../assets/logo1/dealer_fx.png";
import dealertrackLogo from "../assets/logo1/dealtrack.svg";
import eleadLogo from "../assets/logo1/elead.png";
import myKaarmaLogo from "../assets/logo1/mykaarma.svg";
import reynoldsLogo from "../assets/logo1/reynolds-and-reynolds.svg";
import tekionLogo from "../assets/logo1/tekion.svg";
import vAutoLogo from "../assets/logo1/vAuto.svg";
import vinSolutionsLogo from "../assets/logo1/vinsolutions.svg";
import xtimeLogo from "../assets/logo1/xtime.svg";

const integrations = [
  { src: dealerFxLogo, alt: "Dealer-FX", className: "integration-logo dealerfx" },
  { src: tekionLogo, alt: "Tekion", className: "integration-logo tekion" },
  { src: dealertrackLogo, alt: "Dealertrack", className: "integration-logo dealertrack" },
  { src: xtimeLogo, alt: "Xtime", className: "integration-logo xtime" },
  { src: eleadLogo, alt: "Elead", className: "integration-logo elead" },
  { src: cdkLogo, alt: "CDK", className: "integration-logo cdk" },
  { src: vinSolutionsLogo, alt: "VinSolutions", className: "integration-logo vinsolutions" },
  { src: reynoldsLogo, alt: "Reynolds & Reynolds", className: "integration-logo reynolds" },
  { src: myKaarmaLogo, alt: "myKaarma", className: "integration-logo mykaarma" },
  { src: vAutoLogo, alt: "vAuto", className: "integration-logo vauto" },
];

export default function Integrations() {
  return (
    <section className="integrations-section">
      <div className="integrations-shell">
        <div className="integrations-stage">
          {integrations.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={logo.className}
            />
          ))}

          <div className="integrations-copy">
            <h2>Seamless system integration</h2>
            <p>
              We integrate with your existing dealership technology stack, <br/>
              including your scheduler, DMS, and CRM.
            </p>

            <a href="#" className="integrations-cta">
              <span>Schedule a call</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

