import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import zemaltlogo from "../../Assets/Zemalt-white.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <h1>Where Strategy Meets Success!</h1>
      <div className="footer-container">
        <div className="footer-left">
          <img src={zemaltlogo} />
          <p>
            Zemalt is a World-Wide digital solutions agency specializing in SEO,
            Google Ads, content writing, social media marketing, web
            development, and UI/UX design.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/zemalt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/zemaltpvtltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <RiInstagramFill />
            </a>
            <a
              href="https://www.facebook.com/zemaltpvtltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <ImFacebook2 />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-columns">
            <div className="footer-column">
              <h4>For Queries</h4>
              <ul>
                <li onClick={() => navigate(`/services`)}>Services</li>
                <li onClick={() => navigate(`/about`)}>About Us</li>
                <li onClick={() => navigate(`/contact`)}>Contact Us</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Others</h4>
              <ul>
                <li onClick={() => navigate(`/terms`)}>Terms & Conditions</li>
                <li onClick={() => navigate(`/privacy-policy`)}>Privacy Policy</li>
                <li onClick={() => navigate(`/disclaimer`)}>Disclaimer</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Office</h4>
              <ul>
                <li>
                 <a  href="mailto:company@zemalt.com"
              target="_blank"
              rel="noopener noreferrer"><FaEnvelope /> company@zemalt.com</a> 
                </li>
               
                <li >
                <a  href="http://wa.me/923007044566"
              target="_blank"
              rel="noopener noreferrer">
                  <FaPhone /> +92-(300)-7044-566
                  </a>
                </li>
                <li>
                <a
                href="https://maps.app.goo.gl/owK9zDzZBdNGzWrL7"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <FaMapMarkerAlt /> Plaza 119, Allama Iqbal Rd,Garhi Shahu,
                  Lahore PK
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">
            © All rights reserved{" "}
            <a
              href="https://zemalt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zemalt
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
