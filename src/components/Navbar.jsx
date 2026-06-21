import BrandMark from "./BrandMark";

const links = ["Service", "Sales", "Blog", "Case Studies", "Jobs"];

export default function Navbar() {
  return (
    <header className="top-nav">
      <BrandMark />

      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a href="#" className="login-link">
          Login
        </a>
        <a href="#" className="demo-button">
          Book Demo
        </a>
      </div>
    </header>
  );
}
