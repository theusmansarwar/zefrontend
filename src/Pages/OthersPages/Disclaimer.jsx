import React, { useEffect } from "react";
import "./Others.css";
import backgroundimg from "../../Assets/background1.webp";

const Disclaimer = () => {
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
              <h1>Disclaimer</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="others-content-area">
        <h2>General Information</h2>

        <p>
          The information provided by Zemalt on this website is for general
          informational purposes only. While we strive for accuracy, we do not
          guarantee completeness, reliability, or error-free content.
        </p>

        <h2>No Guarantees</h2>

        <p>
          We do not guarantee specific results from our services. Outcomes may
          vary based on industry trends, competition, and external factors
          beyond our control.
        </p>

        <h2>Third-Party Links</h2>

        <p>
          Our website may contain links to external websites for additional
          resources. Zemalt is not responsible for third-party websites'
          content, privacy policies, or practices.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Zemalt shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from the use of our website or services.
          Users are responsible for ensuring our services align with their
          needs.
        </p>
        <h2>Changes to This Disclaimer</h2>
        <p>
          Zemalt reserves the right to modify this Disclaimer at any time. It is
          your responsibility to review it periodically for updates.
        </p>

        <p>
          📧 For inquiries, reach us at{" "}
          <strong>
            <a
              href="mailto:company@zemalt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              company@zemalt.com
            </a>
          </strong>{" "}
        </p>
      </div>
    </>
  );
};

export default Disclaimer;
