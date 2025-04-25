// components/Header.tsx
import React from "react";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-nav">
        <p
          onClick={() => {
            const el = document.getElementById("section-about-me");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          About
        </p>
        <p
          onClick={() => {
            const el = document.getElementById("section-latests");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Portfolio
        </p>
        <p
          onClick={() => {
            const el = document.getElementById("section-testimonial");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Testimonials
        </p>
      </div>
      <div className="header-logo">
        <img src="/images/logo.png" />
      </div>
      <div className="header-RRSS">
        <div className="header-logos">
          <div className="logo-container">
            <img src="/icons/facebook.svg" />
          </div>
          <div className="logo-container">
            <img src="/icons/instagram.svg" />
          </div>
          <div className="logo-container">
            <img src="/icons/twitter.svg" />
          </div>
        </div>

        <button
          onClick={() => {
            const el = document.getElementById("section-contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="lets-talk-button"
        >
          <p>Let's Talk</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
