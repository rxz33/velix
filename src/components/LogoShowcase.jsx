import alpineLogo from "../assets/logos/alpine.jpg";
import cardinaleWayLogo from "../assets/logos/CardinaleWay.png";
import fifthWaveLogo from "../assets/logos/fifth_wave.jpg";
import findlayLogo from "../assets/logos/findlay.jpg";
import freemanLogo from "../assets/logos/freeman.jpg";
import priceLogo from "../assets/logos/price.jpg";
import trophyLogo from "../assets/logos/trophy.jpg";

const logos = [
  { src: alpineLogo, alt: "Alpine Automotive" },
  { src: findlayLogo, alt: "Findlay Automotive Group" },
  { src: priceLogo, alt: "Price Family Dealerships" },
  { src: fifthWaveLogo, alt: "Fifth Wave" },
  { src: trophyLogo, alt: "Trophy Automotive Dealer Group" },
  { src: freemanLogo, alt: "Freeman Motors" },
  { src: cardinaleWayLogo, alt: "CardinaleWay" },
];

export default function LogoShowcase() {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="logo-strip-section">
      <div className="logo-strip-heading-wrap">
        <p className="logo-strip-heading">
          Join leading dealers at the forefront of customer communication
        </p>
      </div>

      <div className="logo-marquee-shell">
        <div
          className="logo-marquee-track"
          scroll-direction="left-slow"
          style={{ "--scroll-duration": "50s" }}
        >
          {marqueeLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="logo-marquee-item">
              <img src={logo.src} alt={logo.alt} className="logo-marquee-image" />
            </div>
          ))}
        </div>

        <div className="logo-fade logo-fade-left" />
        <div className="logo-fade logo-fade-right" />
      </div>
    </section>
  );
}
