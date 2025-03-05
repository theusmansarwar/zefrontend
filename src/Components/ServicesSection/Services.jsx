import React, { useEffect, useState } from "react";
import "./Services.css";
import dot from "../../Assets/dotsdesign.webp";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ServiceTemplate from "../../Templates/ServiceTemplate";
import { fetchServices } from "../../DAL/fetch";
import { baseUrl } from "../../Config/Config";
import BlogCardSkeleton from "../Skeletonloaders/BlogCardSkeleton";
import Blog2Skeletonm from "../Skeletonloaders/Blog2Skeletonm";
import ServiceSkeleton from "../Skeletonloaders/ServiceSkeleton";

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
      setPage(1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getServices();
  }, [page, itemsPerPage]);

  const getServices = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetchServices(itemsPerPage, page);
      if (response?.services) {
        setServices(response.services);
        setTotalPages(response.totalPages);
      } else {
        throw new Error(response.message || "Failed to fetch services");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const nextService = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const prevService = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="services-section">
      <img src={dot} alt="dot" className="dot1" />
      <img src={dot} alt="dot" className="dot2" />
      <div className="service-section">
        <div className="upper-section">
          <h1>
            We Build Best <br /> <span>SERVICE</span> Experience
          </h1>
          <p onClick={() => navigate(`/services`)}>
            View All Services <FaArrowRightLong />
          </p>
        </div>

       
        {loading ? (
          <ServiceSkeleton/>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : services.length === 0 ? (
          <p>No services available</p>
        ) : ( <div className="service-area-section">
            <div className="service-grid" >
            {services.map((service) => (
              <ServiceTemplate
                key={service._id}
                image={baseUrl + service.image}
                name={service.name}
                slug={service.slug}
                description={service.introduction}
              />
            ))}
            </div>
            </div>
          )}
        
       

        <div className="pagination-buttons">
          <FaArrowLeftLong
            onClick={prevService}
            className={`prev-btn ${page === 1 ? "disabled" : ""}`}
          />

          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i + 1)}
              className={`dott ${page === i + 1 ? "Active" : ""}`}
            ></span>
          ))}

          <FaArrowRightLong
            onClick={nextService}
            className={`next-btn ${page === totalPages ? "disabled" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
