import React, { useEffect, useState } from "react";
import "./Services.css";
import dot from "../../Assets/dotsdesign.webp";
import headingDesign from "../../Assets/headingDesign.svg";
import ServiceTemplate2 from "../../Templates/ServiceTemplate2";
import Benefits from "../../Components/Benifits/Benefits";
import backgroundimg from "../../Assets/background3.webp";
import { fetchServices } from "../../DAL/fetch";
import { baseUrl } from "../../Config/Config"; 
import ServiceSkeleton from "../../Components/Skeletonloaders/ServiceSkeleton";
import { Pagination, Stack } from "@mui/material";


const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage=9
  useEffect(() => {
    window.scrollTo(0, 0); 
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
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
   
      <div className="Hero-section">
        <div
          className="feature-section"
          style={{
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.8s ease-in-out",
          }}
        >
          <div className="blackscreen">
            <div className="text-section2">
              <h1>Services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <img src={dot} alt="dot" className="dot1" />
        <img src={dot} alt="dot" className="dot2" />

        <div className="service-section">
          <div className="upper-section">
            <h1>
              We Build Best <br /> <span>SERVICE</span> Experience
            </h1>
          </div>

          {loading ? (
            <ServiceSkeleton />
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : services.length === 0 ? (
            <p>No services available</p>
          ) : (
            <div className="service-area-section">
              <div className="service-grid">
                {services.map((service) => (
                  <ServiceTemplate2
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

<Stack spacing={2} alignItems="center">
              <Pagination
                count={totalPages} // ✅ Correct total pages
                page={page}
                onChange={handleChange}
                shape="rounded"
              />
            </Stack>

          <div className="straight-line" />
        </div>
      </div>

      {/* Heading */}
      <div className="page-heading-area">
        <p>
          Why Work With Zemalt?{" "}
          <span>
            <img src={headingDesign} alt="Heading Design" />
          </span>
        </p>
      </div>

      {/* Benefits Section */}
      <Benefits />
    </div>
  );
};

export default Services;
