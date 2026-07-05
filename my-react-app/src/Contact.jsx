import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./Contact.css";

const FORMSPREE_URL = "https://formspree.io/f/mqevnbpv";

function Contact() {
  const { ref, isVisible } = useScrollReveal();

  // ONE state object holds all form fields together
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // shows "Sending..." while waiting
  const [error, setError] = useState(""); // shows a message if sending fails

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Actually sends the data to Formspree, waits for a response
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      ref={ref}
      className={`contact reveal slide-up ${isVisible ? "visible" : ""}`}
      id="contact"
    >
      <div className="contact-header">
        <p className="section-tag">GET IN TOUCH</p>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have a question or ready to join? Send us a message.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT: CONTACT INFO */}
        <div className="contact-info">
          <div className="contact-info-item">
            <MapPin size={20} color="#dc2626" />
            <div>
              <h4>Location</h4>
              <p>123 Fitness Street, Chennai, TN</p>
            </div>
          </div>
          <div className="contact-info-item">
            <Phone size={20} color="#dc2626" />
            <div>
              <h4>Phone</h4>
              <p>+91 9944229042</p>
            </div>
          </div>
          <div className="contact-info-item">
            <Mail size={20} color="#dc2626" />
            <div>
              <h4>Email</h4>
              <p>hello@powerlift.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="contact-form-wrapper">
          {isSubmitted ? (
            <div className="contact-success">
              <h3>Thank you!</h3>
              <p>Your message has been sent. We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-textarea"
              />

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="form-submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;