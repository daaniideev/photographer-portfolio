"use client";

import React from "react";
import "../styles/WrapedContent.css";

interface WrappedContentProps {
  title: string;
  text: string;
  isOpen: boolean;
  setIsOpen: () => void; // Es una función que no toma parámetros y no devuelve nada
}

const WrappedContent: React.FC<WrappedContentProps> = ({
  title,
  text,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="wrapped-content">
      <div className="wrapped-content-title">
        <p className="title">{title}</p>
        <img
          src="/icons/open_close.png"
          className={`${isOpen ? "wrap-button-open" : "wrap-button-closed"}`}
          onClick={setIsOpen} // Llamamos la función para actualizar el estado
          alt="toggle"
        />
      </div>

      <p className={`text ${isOpen ? "text-open" : ""}`}>{text}</p>
    </div>
  );
};

export default WrappedContent;
