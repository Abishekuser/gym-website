import { ArrowRight } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./CTABanner.css";

function CTABanner() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className={`cta-banner reveal fade-in ${isVisible ? "visible" : ""}`}>
      <div className="cta-content">
        <h2 className="cta-heading">
          Ready to Start Your <span className="cta-accent">Transformation?</span>
        </h2>
        <p className="cta-subtext">
          Join PowerLift Fitness today and get your first week completely free.
          No commitment, no risk — just results.
        </p>
        <button className="cta-button">
          GET STARTED NOW <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default CTABanner;