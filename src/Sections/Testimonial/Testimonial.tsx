"use client";
import "../styles/Testimonial.css";
import TestimonialCard from "@/Components/TestimonialCard";
import { testimonials } from "@/utils/data";
import { useState } from "react";

const Testimonial: React.FC = () => {
  const [testimonialPage, setTestimonialPage] = useState(0);

  return (
    <section id="section-testimonial">
      <div className="testimonial-header">
        <div className="testimonial-title">
          <h2>Testimonial</h2>
          <img src="/icons/smile.png" alt="smile icon" />
        </div>

        <div className="testimonial-header-pagination">
          {/* Pagina 0 */}
          <div
            onClick={() => setTestimonialPage(0)}
            className={testimonialPage === 0 ? "square selected" : "square"}
          ></div>

          {/* Pagina 1 */}
          <div
            onClick={() => setTestimonialPage(1)}
            className={testimonialPage === 1 ? "square selected" : "square"}
          ></div>

          {/* Pagina 2 */}
          <div
            onClick={() => setTestimonialPage(2)}
            className={testimonialPage === 2 ? "square selected" : "square"}
          ></div>

          {/* Pagina 3 */}
          <div
            onClick={() => setTestimonialPage(3)}
            className={testimonialPage === 3 ? "square selected" : "square"}
          ></div>
        </div>
      </div>

      <div className="testimonial-container">
        {testimonials
          .slice(testimonialPage * 3, testimonialPage * 3 + 3) // Correct slice logic
          .map((item, index) => (
            <TestimonialCard
              key={index} // Es importante agregar una key para cada elemento en una lista
              name={item.name}
              comment={item.comment}
              jobTitle={item.jobTitle}
            />
          ))}
      </div>
    </section>
  );
};

export default Testimonial;
