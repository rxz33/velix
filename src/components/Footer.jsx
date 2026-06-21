const pressLogos = ["TechCrunch", "Automotive News", "CAR DEALERSHIP GUY"];
const linksOne = ["Privacy Policy", "Terms of Service", "Security"];
const linksTwo = ["Service", "Sales", "Blog", "Case Studies"];
const linksThree = ["Jobs", "Login"];

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer-linkedin-icon">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98ZM3 9h3.96v12H3V9Zm7.02 0H13.8v1.64h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.61 4.69 6V21h-3.96v-5.67c0-1.35-.02-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21h-3.96V9Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="site-footer-top">
          <p>As seen in</p>
          <div className="site-footer-press">
            {pressLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>

        <div className="site-footer-divider" />

        <div className="site-footer-middle">
          <div className="site-footer-links">
            <div>
              {linksOne.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>

            <div>
              {linksTwo.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>

            <div>
              {linksThree.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-divider" />

        <div className="site-footer-bottom">
          <p>© 2026 Velix Technologies Inc. All rights reserved.</p>
          <a href="#" aria-label="Velix LinkedIn">
            <LinkedinMark />
          </a>
        </div>
      </div>
    </footer>
  );
}
