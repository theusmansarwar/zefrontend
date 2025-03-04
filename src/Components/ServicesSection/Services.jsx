import React, { useState } from "react";
import "./Services.css";
import dot from "../../Assets/dotsdesign.webp";
import serviceimg1 from "../../Assets/seo.webp";
import serviceimg2 from "../../Assets/content-writing.webp";
import serviceimg3 from "../../Assets/googleads.jpeg";
import serviceimg4 from "../../Assets/social-media-marketing.webp";
import serviceimg5 from "../../Assets/website-development.webp";
import serviceimg6 from "../../Assets/ui-ux-design.webp";
import ServiceTemplate from "../../Templates/ServiceTemplate";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Search Engine Optimization",
    slug:"seo",
    description:
      "At Zemalt, we optimize your website to enhance search engine rankings, increase visibility, and drive organic traffic, ensuring your brand reaches its full potential online.",
    image: serviceimg1,
  },
  {
    id: 2,
    title: "Web Development",
    slug:"web-development",
    description:
      "Zemalt specializes in designing and developing responsive, user-friendly websites that effectively showcase your brand and services, providing a seamless user experience.",
    image: serviceimg5,
  },
  {
    id: 3,
    title: "UI/UX Designing",
    slug:"ui-ux",
    description:
      "Enhance user experience with Zemalt's intuitive UI/UX design, ensuring visitors have a seamless interaction with your website that keeps them coming back.",
    image: serviceimg6,
  },
  {
    id: 4,
    title: "Content Writing",
    slug:"content-writing",
    description:
      "Zemalt creates engaging and relevant content that resonates with your audience, enhancing your brand messaging and building a strong connection with potential customers.",
    image: serviceimg2,
  },
  
  {
    id: 5,
    title: "Google Ads",
    slug:"google-ads",
    description:
      "Leverage Zemalt's expertise in targeted Google Ads to reach potential customers and drive immediate traffic to your website, maximizing your advertising investment.",
    image: serviceimg3,
  },
  {
    id: 6,
    title: "Social Media Ads",
    slug:"social-media-ads",
    description:
      "Utilize Zemalt’s social media advertising strategies to increase brand awareness and actively engage with your target audience across various platforms.",
    image: serviceimg4,
  },
 
];
const Services = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const servicesPerPage=3;

  const nextServices = () => {
    if (index + servicesPerPage < services.length) {
      setIndex(index + servicesPerPage);
    }
  };

  const prevServices = () => {
    if (index > 0) {
      setIndex(index - servicesPerPage);
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

        {/* Pass only the required services to ServiceTemplate */}
        <ServiceTemplate
          services={services.slice(index, index + servicesPerPage)}
        />

        {/* Pagination Controls */}
        <div className="pagination-buttons">
          <FaArrowLeftLong
            onClick={prevServices}
            className={`prev-btn ${index === 0 ? "disabled" : ""}`}
          />

          {[...Array(Math.ceil(services.length / servicesPerPage))].map(
            (_, i) => (
              <span
                key={i}
                className={`dott ${
                  index / servicesPerPage === i ? "Active" : ""
                }`}
              ></span>
            )
          )}

          <FaArrowRightLong
            onClick={nextServices}
            className={`next-btn ${
              index + servicesPerPage >= services.length ? "disabled" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
