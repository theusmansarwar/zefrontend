import React, { useEffect, useState } from "react";
import "./Contact.css";
import backgroundimg from "../../Assets/background3.webp";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

import Faq from "../../Components/FAQS/Faq";
import { createLead } from "../../DAL/create";

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import CustomAlert from "../../Components/Alert/CustomAlert";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    query: "",
  });

  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [formErrors, setFormErrors] = useState({}); // Store validation errors
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error only if input becomes valid
    if (isSubmitted) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: e.target.value.trim() ? "" : prevErrors[e.target.name]
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });

    if (isSubmitted && value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };

  const formatPhoneNumber = (phone) => {
    const parsedNumber = parsePhoneNumberFromString(phone);
    return parsedNumber && parsedNumber.isValid() ? parsedNumber.formatInternational() : phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Mark form as submitted


    const formattedPhone = formatPhoneNumber(formData.phone);
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("phone", formattedPhone);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject);
    payload.append("query", formData.query);

    try {
      const response = await createLead(payload);
      console.log('API Response:', response);

      if (response?.status === 201) {
        setAlertType("success");
        setAlertMessage(response?.message);
        setFormData({ name: "", phone: "", email: "", subject: "", query: "" }); // Reset form
        setIsSubmitted(false); // Reset submission state
      } else if (response?.status === 400 && response?.missingFields) {
        const errors = {};
        response.missingFields.forEach((field) => {
          errors[field.name] = field.message;
        });

        setFormErrors(errors);
        setAlertType("error");
        setAlertMessage(response?.message);
      } else {
        setAlertType("error");
        setAlertMessage(response?.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertType("error");
      setAlertMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <div>
         <CustomAlert type={alertType} message={alertMessage} onClose={() => setAlertMessage("")} />
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
            <form onSubmit={handleSubmit}>
          

              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                /> 
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
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
                       {formErrors.email && <span className="error-message">{formErrors.email}</span>}

            </div>
            <div className="input-field">
              <label htmlFor="phone" className="phone-lable">Phone Number</label>
              <PhoneInput
                     
                        name="phone"
                         value={formData.phone}
                         onChange={handlePhoneChange}
                         countryCodeEditable={false}
                       />
                       {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
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
                      {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
            </div>

            <div className="input-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="query"
                placeholder="Leave a message"
                rows="4"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
                      {formErrors.query && <span className="error-message">{formErrors.query}</span>}
            </div>

            <button className="send-btn" type="submit">Send Message</button>
            </form>
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
