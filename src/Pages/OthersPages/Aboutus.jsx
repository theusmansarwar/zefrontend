import React, { useEffect } from "react";
import "./Others.css";
import backgroundimg from "../../Assets/background1.webp";

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <>
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
            <div className="text-section">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="others-content-area">
        <h2>Who We Are</h2>

        <p>
          Zemalt is a leading digital solutions provider specializing in SEO,
          Google Ads, content writing, social media marketing, web development,
          and UI/UX design. Our mission is to help businesses maximize their
          digital presence and achieve measurable success online.
        </p>

        <h2>Our Vision</h2>

        <p>
          We aim to empower businesses with innovative digital strategies that
          drive growth, enhance visibility, and boost conversions. At{" "}
          <a href="http://zemalt.com">
            <strong>Zemalt</strong>
          </a>
          , we believe in data-driven marketing, creative excellence, and
          customer-centric solutions to ensure impactful results.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>SEO Services </strong>– Improve rankings and organic traffic
            with cutting-edge optimization techniques.
          </li>

          <li>
            <strong>Google Ads</strong> – Maximize your ROI with high-converting
            PPC campaigns.
          </li>

          <li>
            <strong>Content Writing </strong>– Engaging and SEO-friendly content
            tailored to your brand.
          </li>

          <li>
            <strong>Social Media Ads </strong>– Drive engagement and brand
            awareness through strategic ad placements.
          </li>

          <li>
            <strong>Web Development </strong>– Build fast, secure, and
            user-friendly websites.
          </li>

          <li>
            <strong>UI/UX Design </strong>– Enhance user experience with
            intuitive and visually appealing designs.
          </li>
        </ul>
        <h2>Contact</h2>

        <p>
          📧 Email: <strong>company@zemalt.com</strong>
        </p>
        <p>
          📞 Phone: <strong>+92-(300)-7044-566</strong>
        </p>
      </div>
    </>
  );
};

export default Aboutus;
