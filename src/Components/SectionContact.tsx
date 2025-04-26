// components/section-contact.tsx
import React from "react";
import "../styles/SectionContact.css";

const SectionContact: React.FC = () => {
  return (
    <section id="section-contact">
      <div className="section-contact-content">
        <div className="section-contact-text">
          <p className="section-contact-title">
            <span className="yellow-color">I'd love</span> to hear from you
          </p>
          <p className="section-contact-subtitle">
            Whether you're interested in booking a photoshoot or just want to
            say hello, feel free to drop me a message.
          </p>
        </div>

        <div className="section-contact-fill-contact">
          <form>
            {/* <div className="input-container">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                autoComplete="name"
                required
                className="contact-info"
              />
              <img src="icons/must.png" />
            </div> */}
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                className="contact-info"
              />
            </div>
            {/*
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
                className="contact-info"
              />
              <img src="icons/must.png" />
            </div> */}
            <div className="input-container input-container-textarea">
              <textarea
                name="message"
                placeholder="Write something here..."
                rows={4}
                className="contact-info"
              ></textarea>
            </div>

            <button className="contact-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
