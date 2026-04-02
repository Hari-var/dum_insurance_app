import React from "react";

const InsuranceTypes = () => {
  const types = [
    {
      title: "Health Insurance",
      description:
        "Comprehensive medical coverage with zero hassle. Cashless treatments at 5000+ hospitals.",
      icon: "🏥",
      color: "blue",
    },
    {
      title: "Auto Insurance",
      description:
        "Protect your ride 24/7. Coverage for accidents, theft, and natural disasters.",
      icon: "🚗",
      color: "red",
    },
    {
      title: "Home Insurance",
      description:
        "Your home is your sanctuary. We keep it safe from all risks and damages.",
      icon: "🏠",
      color: "yellow",
    },
    {
      title: "Life Insurance",
      description:
        "Secure your family's future. Flexible plans starting from just ₹99/month.",
      icon: "💪",
      color: "green",
    },
  ];

  return (
    <section id="coverage">
      <h2 className="section-title">Choose Your Coverage</h2>
      <div className="cards-grid">
        {types.map((type, index) => (
          <div key={index} className="card">
            <div className={`card-icon ${type.color}`}>{type.icon}</div>
            <h3 className="card-title">{type.title}</h3>
            <p className="card-description">{type.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceTypes;
