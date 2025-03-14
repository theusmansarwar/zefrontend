import React from "react";
import "./TestimonialTemplate.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { formatDate } from "../Utils/Formatedate";

const TestimonialTemplate = ({ testimonial }) => {
  const fullStars = Math.floor(testimonial?.rating || 0);
  const hasHalfStar = testimonial?.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div>
          <p className="name">{testimonial?.name}</p>
          <p className="role">
            {testimonial?.service} | {testimonial?.location}{" "}
          </p>
        </div>
      </div>
      <p className="testimonial-text">{testimonial?.description}</p>
      <div className="divider"></div>
      <div className="testimonial-footer">
        <p>{formatDate(testimonial?.date)}</p>
        <div className="stars">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={i} className="filled-star" />
          ))}
          {hasHalfStar && <FaStarHalfAlt className="half-star" />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={i + fullStars + 1} className="empty-star" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
