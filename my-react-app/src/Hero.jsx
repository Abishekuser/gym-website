import { ArrowRight, Trophy, Users, UserCheck, Dumbbell } from "lucide-react";
import "./Hero.css";

function StatCard({ icon, number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

function Hero() {
  const stats = [
    { icon: <Trophy size={28} color="#dc2626" />, number: "10+", label: "Years Experience" },
    { icon: <UserCheck size={28} color="#dc2626" />, number: "25+", label: "Expert Coaches" },
    { icon: <Users size={28} color="#dc2626" />, number: "5000+", label: "Happy Members" },
    { icon: <Dumbbell size={28} color="#dc2626" />, number: "50+", label: "Fitness Programs" },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tagline">BE STRONG. BE FIT. BE YOU.</p>
          <h1 className="hero-heading">
            TRANSFORM YOUR BODY,
            <br />
            <span className="hero-heading-accent">TRANSFORM YOUR LIFE.</span>
          </h1>
          <p className="hero-description">
            Train with the best coaches, modern equipment, and a community
            that pushes you to be your best.
          </p>

          <div className="hero-buttons">
            <a href="#pricing" className="btn-primary">
              JOIN NOW <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              FREE TRIAL <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {}
      <div className="stats-bar">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;