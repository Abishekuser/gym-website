import { CheckCircle } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./About.css";

function About() {
  const { ref, isVisible } = useScrollReveal();
  
  const points = [
    "Certified professional trainers",
    "State-of-the-art equipment",
    "Personalized workout plans",
    "Flexible membership options",
  ];

  return (
    <section ref={ref} className={`about reveal slide-up ${isVisible ? "visible" : ""}`} id="about">
      <div className="about-container">

        {}
        <div className="about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700"
            alt="Gym trainer helping a member"
            className="about-image"
          />
        </div>

        {}
        <div className="about-content">
          <p className="section-tag">WHO WE ARE</p>
          <h2 className="section-title">
            More Than a Gym —<br />A Community
          </h2>
          <p className="about-description">
            For over 10 years, PowerLift Fitness has helped thousands of
            members build strength, confidence, and lasting habits. We
            combine expert coaching with a supportive environment so every
            member — beginner or advanced — has what they need to succeed.
          </p>

          {}
          <ul className="about-list">
            {points.map((point) => (
              <li key={point} className="about-list-item">
                <CheckCircle size={20} color="#dc2626" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <button className="btn-primary">Learn More About Us</button>
        </div>

      </div>
    </section>
  );
}

export default About;