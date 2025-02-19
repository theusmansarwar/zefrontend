import React, { useState, useEffect } from "react";
import "./Herosection.css";

// Import background images
import backgroundImage1 from "../../Assets/background1.webp";
import backgroundImage2 from "../../Assets/background2.webp";
import backgroundImage3 from "../../Assets/background3.webp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const navigate = useNavigate();
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];

  // Function to change active menu item

  // Function to change background manually
  const changeBackground = (index) => {
    setCurrentBgIndex(index);
  };

  // Auto change background every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="Hero-section">
     
      <div
        className="feature-section"
        style={{
          backgroundImage: `url(${backgrounds[currentBgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div className="blackscreen">
          <div className="text-section">
            <h1>
              Zemalt- <br />
              Where Strategy Meets Success!
            </h1>
            <p>
              Zemalt is a results-driven digital solutions agency specializing
              in SEO, Google Ads, content writing, social media marketing, web
              development, and UI/UX design to help businesses grow and maximize
              their online presence.
            </p>
            <button className="secondary-button" onClick={() => navigate("/contact")}>Get Started</button>
          </div>
        </div>
      </div>

      {/* Background Indicators */}
      <div className="heading-area">
        <div className="rounded-tab">
          {backgrounds.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentBgIndex ? "Active" : ""}`}
              onClick={() => changeBackground(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
