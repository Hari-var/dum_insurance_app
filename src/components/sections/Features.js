import React from "react";

const Features = () => {
  const features = [
    "Instant claim approval within 48 hours",
    "No paperwork, fully digital process",
    "Expert 24/7 customer support",
    "Transparent pricing, no hidden charges",
    "Easy online policy management",
    "Quick renewal reminders",
  ];

  return (
    <section id="features">
      <div className="features-section">
        <h2 className="section-title">Why Choose InsureFlow?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-check">✓</div>
              <p className="feature-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
