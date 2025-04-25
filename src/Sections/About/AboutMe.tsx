"use client";
// components/AboutMe.tsx
import React, { useState } from "react";
import "../styles/AboutMe.css";
import WrappedContent from "@/Components/WrappedContent";

const AboutMe: React.FC = () => {
  const [wrapState, setWrapState] = useState([true, false, false, false]);

  // Función para manejar el cambio de estado de un solo ítem
  const toggleWrapState = (index: number) => {
    // Si el contenido ya está abierto, lo cerramos. Si no, cerramos todos y abrimos el seleccionado.
    const newState = wrapState.map((state, idx) =>
      idx === index ? !state : false
    );
    setWrapState(newState); // Actualizamos el estado
  };

  return (
    <section id="section-about-me">
      <div className="about-me-text">
        <div className="about-me-text-content">
          <h2>Hello! I'm Oliver Bennett</h2>
          <p>
            A connoisseur of cityscapes and a storyteller through the lens,
            based in the vibrant heart of London. <br />
            <br />
            With over a decade of experience, I have been capturing the essence
            of urban life, one frame at a time.{" "}
          </p>
          <div className="wraped-contents">
            <WrappedContent
              title="My Journey"
              text="My photography journey began on the bustling streets of London, starting as a hobby and quickly blossoming into a fervent passion."
              isOpen={wrapState[0]}
              setIsOpen={() => toggleWrapState(0)} // Pasar la función toggle con el índice 0
            />
            <WrappedContent
              title="My Philosophy"
              text="I believe in capturing authentic, unscripted moments — the subtle glances, the natural light, and the raw emotions that make each frame timeless."
              isOpen={wrapState[1]}
              setIsOpen={() => toggleWrapState(1)} // Pasar la función toggle con el índice 1
            />
            <WrappedContent
              title="Accolades and Experiences"
              text="Over the years, my work has been featured in international exhibitions and recognized by renowned photography communities around the globe."
              isOpen={wrapState[2]}
              setIsOpen={() => toggleWrapState(2)} // Pasar la función toggle con el índice 2
            />
            <WrappedContent
              title="Beyond the Lens"
              text="When I’m not behind the camera, I’m exploring nature, connecting with people, and drawing inspiration from everyday beauty."
              isOpen={wrapState[3]}
              setIsOpen={() => toggleWrapState(3)} // Pasar la función toggle con el índice 3
            />
          </div>
        </div>
      </div>
      <div className="about-me-image">
        <img src="/images/photographies/image_4.png" />
      </div>
    </section>
  );
};

export default AboutMe;
