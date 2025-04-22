// components/Header.tsx
import React from "react";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-nav">
        <p>About</p>
        <p>Portfolio</p>
        <p>Testimonials</p>
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

        <button className="lets-talk-button">
          <p>Let's Talk</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
