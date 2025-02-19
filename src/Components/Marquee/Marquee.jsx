import React from "react";
import "./Marquee.css";
import { IoIosStar } from "react-icons/io";

const Marquee = () => {
  const services = [
    "SEO",
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Content Writing",
    "UI/UX Design",
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Duplicate the list to create a seamless looping effect */}
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className={`marquee-text ${index % 2 === 0 ? "filled" : ""}`}
          >
            <IoIosStar className="star-icon" />
            &ensp;{service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
