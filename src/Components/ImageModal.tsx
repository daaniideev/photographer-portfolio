import React, { useEffect } from "react";
import "../styles/ImageModal.css";

interface ImageModalProps {
  showModal: boolean;
  picture: string;
  onClose: () => void; // Función para cerrar el modal
}

const ImageModal: React.FC<ImageModalProps> = ({
  showModal,
  picture,
  onClose,
}) => {
  if (!showModal) return null;

  return (
    <div className="image-modal">
      <div onClick={onClose} className="image-modal-overlay" />
      <div className="image-modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={picture} alt="Modal" />
      </div>
    </div>
  );
};

export default ImageModal;
