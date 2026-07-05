import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need a membership to use the gym?",
      answer: "Yes, all our facilities are accessible to registered members only. You can choose from Basic, Pro, or Elite plans depending on your needs.",
    },
    {
      question: "Can I cancel my membership anytime?",
      answer: "Absolutely. There are no long-term contracts. You can cancel or pause your membership anytime from your account, with no hidden fees.",
    },
    {
      question: "Is personal training included in every plan?",
      answer: "Personal training sessions are included starting from the Pro plan. Basic members can book sessions separately at a discounted rate.",
    },
    {
      question: "What equipment do you provide?",
      answer: "We provide a full range of free weights, machines, cardio equipment, and functional training gear — all regularly maintained and updated.",
    },
  ];

  function handleToggle(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className="faq">
      <div className="faq-header">
        <p className="section-tag">GOT QUESTIONS?</p>
        <h2 className="section-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="faq-item">
              <button
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  color="#dc2626"
                  className={isOpen ? "faq-icon open" : "faq-icon"}
                />
              </button>

              {isOpen && <p className="faq-answer">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;