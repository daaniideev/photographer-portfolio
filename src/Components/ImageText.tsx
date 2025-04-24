// components/ImageText.tsx
import React from "react";
import "../styles/ImageText.css";

// Definimos los props correctamente
interface ImageTextProps {
  title: string;
  text: string;
}

const ImageText: React.FC<ImageTextProps> = ({ title, text }) => {
  return (
    <div className="image-text-content">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ImageText;
