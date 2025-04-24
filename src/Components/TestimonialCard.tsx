// components/ImageText.tsx
import React from "react";
import "../styles/TestimonialCard.css";

// Definimos los props correctamente
interface ImageTextProps {
  name: string;
  jobTitle: string;
  comment: string;
}

const TestimonialCard: React.FC<ImageTextProps> = ({
  name,
  jobTitle,
  comment,
}) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-comment">"{comment}"</p>
      <div className="testimonial-person">
        <p className="testimonial-name">{name},</p>
        <p className="job-title">{jobTitle}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
