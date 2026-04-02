import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "InsureFlow made getting health insurance so easy! The entire process took just 10 minutes. No stress, no complicated forms.",
      author: "Priya Sharma",
      role: "Marketing Manager",
      stars: 5,
    },
    {
      text: "Best decision I made for my family. The claim process is transparent and super fast. Claimed within 2 days!",
      author: "Arjun Kumar",
      role: "Software Engineer",
      stars: 5,
    },
    {
      text: "The customer support team is absolutely amazing. They answered all my questions patiently. Highly recommend!",
      author: "Neha Patel",
      role: "Entrepreneur",
      stars: 5,
    },
    {
      text: "Affordable premiums without compromising on coverage. This is exactly what Gen Z needs. Love it!",
      author: "Rohan Singh",
      role: "Student",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials">
      <div className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">{"⭐".repeat(testimonial.stars)}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
