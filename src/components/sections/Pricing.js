import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹99",
      period: "/month",
      features: [
        "Basic health coverage",
        "OP treatment",
        "Prescription coverage",
        "Email support",
        "Annual coverage up to ₹2L",
      ],
      featured: false,
    },
    {
      name: "Professional",
      price: "₹299",
      period: "/month",
      features: [
        "Complete health coverage",
        "IP & OP treatment",
        "Pre & post hospitalization",
        "Priority 24/7 support",
        "Annual coverage up to ₹10L",
        "Dental & Vision",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "₹599",
      period: "/month",
      features: [
        "Comprehensive coverage",
        "Everything in Professional",
        "Mental health coverage",
        "VIP support line",
        "Annual coverage up to ₹25L",
        "Wellness programs",
        "No co-pay",
      ],
      featured: false,
    },
  ];

  return (
    <section id="plans">
      <div className="pricing-section">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                {plan.price}
                <small>{plan.period}</small>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="btn-plan">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
