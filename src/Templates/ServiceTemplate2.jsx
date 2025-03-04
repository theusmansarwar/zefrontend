import React from "react";
import "./ServiceTemplate2.css";
import { useNavigate } from "react-router-dom";

const ServiceTemplate2 = ({ services }) => {
  // Accept services as a prop
  const navigate = useNavigate();

  return (
    <div className="service-area2-section">
      <div className="service2-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card2-section"
            onClick={() => navigate(`/services/${service.slug}`)}
          >
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTemplate2;
