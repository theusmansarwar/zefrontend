import React from "react";
import "./ServiceTEmplate.css";
import { useNavigate } from "react-router-dom";
import useTruncateText from "../useTruncateText";

const ServiceTemplate = ({ image, name, slug, description }) => {
  const navigate = useNavigate();

  return (
    <div className="service-card-section" onClick={() => navigate(`/services/${slug}`)}>
      <img src={image} alt={name} />
      <p>{useTruncateText(description, 260)}</p>
      <div className="rounded-tab2">{name}</div>
    </div>
  );
};

export default ServiceTemplate;
