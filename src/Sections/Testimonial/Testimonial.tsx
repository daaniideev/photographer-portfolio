import "../styles/Testimonial.css";
import TestimonialCard from "@/Components/TestimonialCard";
import { testimonials } from "@/utils/data";
import { useEffect, useState } from "react";

const Testimonial: React.FC = () => {
  const [testimonialItem, setTestimonialItem] = useState(0);
  const [clickedScroll, setClickedScroll] = useState(false);

  const handleLeftArrowClick = () => {
    if (testimonialItem > 0) {
      setClickedScroll(true);
      setTestimonialItem(testimonialItem - 3);
    }
  };

  const handleRightArrowClick = () => {
    setClickedScroll(true);
    if (testimonialItem < testimonials.length - 3) {
      setTestimonialItem(testimonialItem + 3);
    }
  };

  useEffect(() => {
    const container = document.getElementById("testimonial-container");

    const handleScroll = () => {
      console.log("se scrolleo manualmente");

      function isElementFullyInViewHorizontally(
        container: HTMLElement,
        element: HTMLElement
      ): boolean {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        return (
          elementRect.left >= containerRect.left &&
          elementRect.right <= containerRect.right
        );
      }

      for (let i = 0; i < 11; i++) {
        let card = document.getElementById("testimonial-card-" + i);
        if (container && card) {
          if (isElementFullyInViewHorizontally(container, card)) {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
              if (i % 3 === 0 || i === 0) {
                setTestimonialItem(i);
              }
            }
          }
        }
      }
    };

    if (typeof window !== "undefined") {
      container?.addEventListener("scroll", handleScroll);

      return () => {
        container?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [testimonialItem]);

  useEffect(() => {
    if (clickedScroll) {
      setClickedScroll(false);
      const targetElement = document.getElementById(
        "testimonial-card-" + testimonialItem
      );

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [testimonialItem]);

  return (
    <section id="section-testimonial">
      <div className="testimonial-header">
        <div className="testimonial-title">
          <h2>Testimonial</h2>
          <img src="/icons/smile.png" alt="smile icon" />
        </div>

        <div className="testimonial-header-pagination">
          {[0, 3, 6, 9].map((item) => (
            <div
              key={item}
              onClick={() => {
                setClickedScroll(true);
                setTestimonialItem(item);
              }}
              className={
                testimonialItem === item ? "square selected" : "square"
              }
            ></div>
          ))}
        </div>
      </div>

      <div className="testimonial-container-container">
        <div
          className={
            testimonialItem === 0
              ? "arrow-container left-arrow testimonial-container testimonial-container-hide"
              : "arrow-container left-arrow testimonial-container"
          }
          onClick={handleLeftArrowClick}
        >
          <img className="arrow" src="icons/left-arrow.svg" alt="left arrow" />
        </div>
        <div id="testimonial-container">
          {testimonials.map((item, index) => (
            <TestimonialCard
              id={`testimonial-card-${index}`}
              key={index}
              name={item.name}
              comment={item.comment}
              jobTitle={item.jobTitle}
            />
          ))}
        </div>
        <div
          className={
            testimonialItem === 9
              ? "arrow-container right-arrow testimonial-container testimonial-container-hide"
              : "arrow-container right-arrow testimonial-container"
          }
          onClick={handleRightArrowClick}
        >
          <img
            className="arrow"
            src="icons/right-arrow.svg"
            alt="right arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
