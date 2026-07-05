import { Star } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./Testimonials.css";

function TestimonialCard({ photo, name, role, rating, review }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {/* Create an arrayone star per item */}
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={16} color="#dc2626" fill="#dc2626" />
        ))}
      </div>

      <p className="testimonial-review">"{review}"</p>

      <div className="testimonial-person">
        <img src={photo} alt={name} className="testimonial-photo" />
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const reviews = [
    {
      photo: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=150",
      name: "Arjun Mehta",
      role: "Member since 2022",
      rating: 5,
      review: "Best decision I made. The trainers actually care about your progress, not just your membership fee.",
    },
    {
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      name: "Priya Nair",
      role: "Member since 2023",
      rating: 5,
      review: "Lost 12kg in 6 months with their nutrition plan. The community here keeps me accountable every single day.",
    },
    {
      photo: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=150",
      name: "Vikram Rao",
      role: "Member since 2021",
      rating: 4,
      review: "24/7 access is a game changer for my work schedule. Equipment is always well maintained too.",
    },
  ];

  return (
    <section ref={ref} className={`testimonials reveal slide-up ${isVisible ? "visible" : ""}`} id="testimonials">
      <div className="testimonials-header">
        <p className="section-tag">WHAT MEMBERS SAY</p>
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          Real stories from real members who transformed their lives with us.
        </p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((r) => (
          <TestimonialCard
            key={r.name}
            photo={r.photo}
            name={r.name}
            role={r.role}
            rating={r.rating}
            review={r.review}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;