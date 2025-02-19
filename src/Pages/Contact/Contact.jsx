import React, { useEffect, useState } from "react";
import "./Contact.css";
import backgroundimg from "../../Assets/background3.webp";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import contactImg from "../../Assets/contact.jpg";
import Faq from "../../Components/FAQS/Faq";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="upper-section">
          <h1>
            Let’s Bring Your <br /> <span>Vision</span> To <span>Life!</span>
          </h1>
          <p>
            We’re here to help you take your brand to the next level. Whether
            you have a project in mind, need support, or just want to learn more
            about what we do, we’d love to hear from you.
          </p>
        </div>
        <div className="contact-form-section">
          <div className="left">
            <h3>Get in Touch</h3>
            <h1>
              Let’s Start a<br />{" "}
              <span className="highlight">Conversation!</span>
            </h1>
            <p>
              Have questions or feedback? We're here to help. Send us a message,
              and we’ll respond within 24 hours.
            </p>

            <div className="input-group">
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave a message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="send-btn">Send Message</button>
          </div>
          <div className="right">
            <Faq />

            <div className="info-box">
              <a
                href="mailto:company@zemalt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="info-item"
                  onClick={() =>
                    window.open("mailto:company@zemalt.com", "_blank")
                  }
                >
                  <MdOutlineMailOutline />
                  <div className="assssss">
                    <h4>Email</h4>
                    <p>company@zemalt.com</p>
                  </div>
                </div>
              </a>
              <a
                href="http://wa.me/923007044566"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info-item">
                  <MdOutlinePhone />
                  <div className="assssss">
                    <h4>Phone</h4>
                    <p>+92-(300)-7044-566</p>
                  </div>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/owK9zDzZBdNGzWrL7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info-item">
                  <LuMapPin />
                  <div className="assssss">
                    <h4>Address</h4>
                    <p>Plaza 119, Allama Iqbal Rd,Garhi Shahu, Lahore PK</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
