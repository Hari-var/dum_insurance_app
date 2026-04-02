import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#about">About InsureFlow</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#press">Press</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>
              <a href="#health">Health Insurance</a>
            </li>
            <li>
              <a href="#auto">Auto Insurance</a>
            </li>
            <li>
              <a href="#home">Home Insurance</a>
            </li>
            <li>
              <a href="#life">Life Insurance</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#help">Help Center</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#status">Status</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#cookies">Cookie Policy</a>
            </li>
            <li>
              <a href="#compliance">Compliance</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} InsureFlow. All rights reserved. | Protecting
          what matters most ✨
        </p>
      </div>
    </footer>
  );
};

export default Footer;
