import { Check } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./Pricing.css";

function PricingCard({ plan, price, features, isPopular }) {
  return (
    <div className={isPopular ? "pricing-card popular" : "pricing-card"}>
      {isPopular && <div className="popular-badge">MOST POPULAR</div>}

      <h3 className="plan-name">{plan}</h3>
      <div className="plan-price">
        <span className="price-amount">₹{price}</span>
        <span className="price-period">/month</span>
      </div>

      <ul className="plan-features">
        {features.map((feature) => (
          <li key={feature} className="plan-feature-item">
            <Check size={18} color="#dc2626" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={isPopular ? "btn-primary" : "btn-secondary"}>
        Choose Plan
      </button>
    </div>
  );
}

function Pricing() {
  const { ref, isVisible } = useScrollReveal();
  const plans = [
    {
      plan: "Basic",
      price: "999",
      isPopular: false,
      features: ["Gym floor access", "Locker room", "1 free trainer session", "Standard equipment"],
    },
    {
      plan: "Pro",
      price: "1999",
      isPopular: true,
      features: ["Everything in Basic", "Unlimited group classes", "4 trainer sessions/month", "Nutrition consultation"],
    },
    {
      plan: "Elite",
      price: "3499",
      isPopular: false,
      features: ["Everything in Pro", "Unlimited personal training", "Custom meal plans", "24/7 priority access"],
    },
  ];

  return (
    <section ref={ref} className={`pricing reveal slide-up ${isVisible ? "visible" : ""}`} id="pricing">
      <div className="pricing-header">
        <p className="section-tag">MEMBERSHIP PLANS</p>
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that fits your goals. Cancel or upgrade anytime.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((p) => (
          <PricingCard
            key={p.plan}
            plan={p.plan}
            price={p.price}
            features={p.features}
            isPopular={p.isPopular}
          />
        ))}
      </div>
    </section>
  );
}

export default Pricing;