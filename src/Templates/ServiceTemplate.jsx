import React from "react";
import "./ServiceTEmplate.css";
import { useNavigate } from "react-router-dom";

const ServiceTemplate = ({ services }) => {
  const navigate = useNavigate();
  return (
    <div className="service-area-section">
      <div className="service-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card-section"
            onClick={() => navigate(`/services/${service.title}`)}
          >
            <img src={service.image} alt={service.title} />
            <p>{service.description}</p>
            <div className="rounded-tab2">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTemplate;
