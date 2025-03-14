import React, { useState, useEffect } from "react";
import TestimonialTemplate from "../../Templates/TestimonialTemplate";
import "./Testimonial.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { fetchTestimonialsList } from "../../DAL/fetch";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = window.innerWidth <= 768 ? 1 : 2;

  useEffect(() => {
    fetchTestimonials(currentPage);
  }, [currentPage]);

  const fetchTestimonials = async (page) => {
    try {
      const response = await fetchTestimonialsList(itemsPerPage, page);
      setTestimonials(response.testimonials);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const nextTestimonials = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevTestimonials = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
        {testimonials.map((testimonial) => (
          <TestimonialTemplate key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>

      <div className="pagination-buttons">
        <FaArrowLeftLong
          onClick={prevTestimonials}
          className={`prev-btn ${currentPage === 1 ? "disabled" : ""}`}
        />

        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            className={`dott ${currentPage === i + 1 ? "Active" : ""}`}
          ></span>
        ))}

        <FaArrowRightLong
          onClick={nextTestimonials}
          className={`next-btn ${currentPage === totalPages ? "disabled" : ""}`}
        />
      </div>
    </div>
  );
};

export default Testimonial;
