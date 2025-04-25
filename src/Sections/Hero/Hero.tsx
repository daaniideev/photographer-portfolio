// components/Header.tsx
import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="header-content">
        <div className="h1-container">
          <h1>
            Urban stories <br /> through the lens
          </h1>
          <div className="h1-image-container">
            <img src="/images/header-underline.png" />
          </div>
        </div>
        <h2>Capturing the unseen rhythms of the city.</h2>
        <button
          onClick={() => {
            const el = document.getElementById("section-contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <p>Contact me</p>
        </button>
      </div>

      <div className="images-content" id="images-content-1">
        <div className="image-content">
          <img
            className="image-type-1"
            src="/images/photographies/image_1.png"
          />{" "}
        </div>{" "}
        <div className="image-content">
          <img
            className="image-type-1"
            src="/images/photographies/image_2.png"
          />{" "}
        </div>{" "}
        <div className="image-content">
          <img
            className="image-type-1"
            src="/images/photographies/image_3.png"
          />
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
