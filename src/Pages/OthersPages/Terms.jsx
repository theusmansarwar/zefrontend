import React, { useEffect } from "react";
import "./Others.css";
import backgroundimg from "../../Assets/background1.webp";

const Terms = () => {
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
            <div className="text-section2">
              <h1>Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="others-content-area">
        <h2>Introduction</h2>

        <p>
          Welcome to Zemalt. By accessing our website and services, you agree to
          comply with these Terms & Conditions. If you do not agree, please
          refrain from using our services.
        </p>
        <h2>Services</h2>

        <p>
          Zemalt provides digital marketing, SEO, web development, and design
          services. All services are offered under contractual agreements and
          must be used in compliance with applicable laws.
        </p>
        <h2>User Responsibilities</h2>
        <ul>
          <li>
            You must provide accurate and complete information when using our
            services.
          </li>

          <li>
            Unauthorized reproduction, resale, or redistribution of Zemalt’s
            services is prohibited.
          </li>

          <li>
            Any misuse of our services may result in termination without prior
            notice.
          </li>
        </ul>
        <h2>Payments & Refunds</h2>
        <ul>
          <li>
            Payments for services must be made in advance as per the agreed
            terms.
          </li>

          <li>
            Refunds will only be processed if Zemalt fails to deliver the agreed
            services.
          </li>
        </ul>
        <h2>Limitation of Liability</h2>
        <p>
          Zemalt is not liable for any indirect, incidental, or consequential
          damages arising from service usage. Clients are responsible for
          ensuring that our services align with their business goals.
        </p>
        <h2>Amendments</h2>
        <p>
          Zemalt reserves the right to update these terms at any time without
          prior notice. Continued use of our services implies acceptance of the
          revised terms.
        </p>
        <p>
          📧 Email: <strong>company@zemalt.com</strong>
        </p>
      </div>
    </>
  );
};

export default Terms;
