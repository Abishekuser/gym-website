import { useState } from "react";
import { Dumbbell, ArrowRight, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <Dumbbell size={20} strokeWidth={2.5} color="white" />
          </div>
          <div>
            <div className="logo-text">
              POWER<span className="logo-accent">LIFT</span>
            </div>
            <div className="logo-subtext">FITNESS</div>
          </div>
        </div>

        <div className="navbar-links">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={index === 0 ? "nav-link active" : "nav-link"}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#pricing" className="join-btn">
          JOIN NOW <ArrowRight size={16} />
        </a>

        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={index === 0 ? "mobile-link active" : "mobile-link"}
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" className="join-btn">
            JOIN NOW <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
