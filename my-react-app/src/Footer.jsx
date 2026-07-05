import { Dumbbell, Share2, MapPin, Phone, Mail } from "lucide-react";
import "./Footer.css";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
  ];

  const otherLinks = [
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  const socialIcons = [
    { icon: <Share2 size={18} />, href: "#" },
    { icon: <Share2 size={18} />, href: "#" },
    { icon: <Share2 size={18} />, href: "#" },
    { icon: <Share2 size={18} />, href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">
              <Dumbbell size={20} strokeWidth={2.5} color="white" />
            </div>
            <div className="logo-text">
              POWER<span className="logo-accent">LIFT</span>
            </div>
          </div>
          <p className="footer-description">
            Building strength, confidence, and community — one workout at a time.
          </p>
          <div className="footer-socials">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.href} className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">More</h4>
          {otherLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-item">
            <MapPin size={16} color="#dc2626" />
            <span>123 Fitness Street, Chennai, TN</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={16} color="#dc2626" />
            <span>+91 98765 43210</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} color="#dc2626" />
            <span>hello@powerlift.com</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 PowerLift Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;