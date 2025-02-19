import React, { useState, useEffect } from "react";
import TestimonialTemplate from "../../Templates/TestimonialTemplate";
import "./Testimonial.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const testimonialsData = [
  {
    id: 1,
    service: "SEO Services",
    text: "Zemalt transformed our search rankings! Thanks to their expert SEO strategies, our website traffic skyrocketed. Highly recommended for businesses aiming for growth!",
    name: "John M...",
    country: "USA",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    service: "Google Ads",
    text: "Zemalt’s Google Ads management is outstanding! We saw a significant increase in conversions while keeping costs low. Their expertise truly delivers results!",
    name: "Mark T...",
    country: "USA",
    rating: 4.5,
    date: "Feb 10, 2024",
  },
  {
    id: 3,
    service: "Content Writing",
    text: "High-quality, SEO-optimized content that engages and converts! Zemalt’s writers crafted compelling articles that boosted our brand authority.",
    name: "Lisa R....",
    country: "USA",
    rating: 4,
    date: "Mar 5, 2024",
  },
  {
    id: 4,
    service: "Social Media Ads",
    text: "Zemalt nailed our social media ad campaigns! Their targeting strategy increased engagement and leads like never before. Excellent service!",
    name: "Michael S...",
    country: "USA",
    rating: 4.5,
    date: "Mar 20, 2024",
  },
  {
    id: 5,
    service: "Web Development",
    text: "Zemalt built a stunning, high-performance website for us! It’s fast, user-friendly, and optimized for conversions. Couldn’t be happier!",
    name: "David L...",
    country: "USA",
    rating: 5,
    date: "Apr 10, 2024",
  },
  {
    id: 6,
    service: "UI/UX Design",
    text: "Zemalt’s UI/UX design is top-notch! Our website now offers an intuitive, seamless experience that keeps users engaged. Highly recommend their expertise!",
    name: "Emma J...",
    country: "USA",
    rating: 4.5,
    date: "Apr 25, 2024",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(
    window.innerWidth <= 768 ? 1 : 2
  );

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      setitemsPerPage(window.innerWidth <= 768 ? 1 : 2);
      setIndex(0); // Reset index when screen size changes
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonials = () => {
    if (index + itemsPerPage < testimonialsData.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prevTestimonials = () => {
    if (index > 0) {
      setIndex(index - itemsPerPage);
    }
  };

  return (
    <div className="testimonial-section">
      <center>
        <h1 className="heading-testimonial">
          Hear From Our <span>CLIENTS</span>
        </h1>
        <p>
          This testimonial is a motivation for us to continue to improve quality
          and provide better satisfaction to every customer who entrusts us.
        </p>
      </center>

      <div className="testimonials-area">
        {testimonialsData
          .slice(index, index + itemsPerPage)
          .map((testimonial) => (
            <TestimonialTemplate
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
      </div>

      <div className="pagination-buttons">
        <FaArrowLeftLong
          onClick={prevTestimonials}
          className={`prev-btn ${index === 0 ? "disabled" : ""}`}
        />

        {[...Array(Math.ceil(testimonialsData.length / itemsPerPage))].map(
          (_, i) => (
            <span
              key={i}
              className={`dott ${index / itemsPerPage === i ? "Active" : ""}`}
            ></span>
          )
        )}

        <FaArrowRightLong
          onClick={nextTestimonials}
          className={`next-btn ${
            index + itemsPerPage >= testimonialsData.length ? "disabled" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Testimonial;
