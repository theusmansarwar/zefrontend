import React from "react";
import "./ServiceTemplate2.css";
import { useNavigate } from "react-router-dom";
import useTruncateText from "../useTruncateText";

const ServiceTemplate2 = ({ image, name, slug, description }) => {
  // Accept services as a prop
  const navigate = useNavigate();

  return (
    <div className="service-card2-section" onClick={() => navigate(`/services/${slug}`)}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{useTruncateText(description, 260)}</p>
   
   
  </div>
  );
};

export default ServiceTemplate2;
