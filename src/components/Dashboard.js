import React from "react";
import Hero from "./sections/Hero";
import InsuranceTypes from "./sections/InsuranceTypes";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <Hero />
      <InsuranceTypes />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Dashboard;
