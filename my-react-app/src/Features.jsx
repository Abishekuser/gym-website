import { Dumbbell, Users, Apple, Clock } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./features.css";
import "./Animations.css";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

function Features() {
  // Get a ref (to attach to the section) and isVisible (true once scrolled into view)
  const { ref, isVisible } = useScrollReveal();

  const services = [
    { icon: <Dumbbell size={32} color="#dc2626" />, title: "Personal Training", description: "One-on-one sessions tailored to your goals, with a certified coach guiding every rep." },
    { icon: <Users size={32} color="#dc2626" />, title: "Group Classes", description: "High-energy classes like HIIT, spin, and strength circuits that keep you motivated." },
    { icon: <Apple size={32} color="#dc2626" />, title: "Nutrition Plans", description: "Custom meal plans designed by our nutritionists to match your training intensity." },
    { icon: <Clock size={32} color="#dc2626" />, title: "24/7 Access", description: "Train on your own schedule — our facility never closes, so you never skip a session." },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className={`features reveal slide-up ${isVisible ? "visible" : ""}`}
    >
      <div className="features-header">
        <p className="section-tag">WHAT WE OFFER</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Everything you need to reach your fitness goals, under one roof.
        </p>
      </div>

      <div className="features-grid">
        {services.map((service) => (
          <FeatureCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}

export default Features;