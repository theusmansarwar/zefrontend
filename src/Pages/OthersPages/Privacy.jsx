import React, { useEffect } from "react";
import "./Others.css";
import backgroundimg from "../../Assets/background1.webp";

const Privacy = () => {
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
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="others-content-area">
        <h2>Introduction</h2>

        <p>
          At Zemalt, we are committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, and safeguard your personal
          information.
        </p>

        <h2>Information We Collect</h2>

        <p>We may collect the following types of information:</p>

        <ul>
          <li>
            <strong>Personal Information</strong>– Name, email, phone number,
            and billing details.
          </li>

          <li>
            <strong>Usage Data</strong> – Website visits, browsing activity, and
            IP addresses.
          </li>

          <li>
            <strong>Cookies & Tracking Data</strong>– To enhance user experience
            and website analytics.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>

        <p>We use your data to:</p>
        <ul>
          <li>Provide and improve our services.</li>

          <li>Communicate about promotions, updates, and support.</li>

          <li>Analyze website performance and optimize marketing efforts.</li>
        </ul>
        <h2>Data Protection</h2>
        <p>
          We implement strict security measures to prevent unauthorized access,
          misuse, or disclosure of your data. However, we cannot guarantee
          complete security due to internet vulnerabilities
        </p>
        <h2>Third-Party Sharing</h2>
        <p>
          We do not sell or trade your personal information. Data may be shared
          with trusted third-party service providers to facilitate our
          operations.
        </p>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>

          <li>Request deletion of your data, subject to legal limitations</li>

          <li>Opt out of marketing communications.</li>
        </ul>
        <p>
          📧Contact:{" "}
          <strong>
            <a
              href="mailto:company@zemalt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              company@zemalt.com
            </a>
          </strong>{" "}
          for any privacy-related concerns.
        </p>
      </div>
    </>
  );
};

export default Privacy;
