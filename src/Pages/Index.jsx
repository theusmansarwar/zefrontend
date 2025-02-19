import React, { useEffect } from "react";
import Marquee from "../Components/Marquee/Marquee";
import HeroSection from "../Components/HeroSection/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "../Components/ServicesSection/Services";
import headingDesign from "../Assets/headingDesign.svg";
import TeamSection from "../Components/TeamSection/TeamSection";
import Testimonial from "../Components/TestimonialSection/Testimonial";
import BlogSection from "../Components/BlogSection/BlogSection";
import GetintouchSection from "../Components/GetinTouchSection/GetintouchSection";
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <div>
      <HeroSection />
      <div className="page-heading-area">
        <p>
          OUR SERVICES{" "}
          <span>
            <img src={headingDesign} />
          </span>
        </p>
      </div>
      <Services />

      <div className="page-heading-area">
        <p>
          OUR TEAM{" "}
          <span>
            <img src={headingDesign} />
          </span>
        </p>
      </div>
      <TeamSection />
      <div className="page-heading-area">
        <p>
          TESTIMONIALS{" "}
          <span>
            <img src={headingDesign} />
          </span>
        </p>
      </div>
      <Testimonial />
      <BlogSection />
      <Marquee />
      <GetintouchSection />
    </div>
  );
};

export default Index;
