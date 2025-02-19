import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import "./ContactSection.css";
import { createLead } from "../../DAL/create";

const GetintouchSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    query: "",
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState("+92");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const formatPhoneNumber = (phone) => {
    const parsedNumber = parsePhoneNumberFromString(phone, selectedCountryCode);
    return parsedNumber && parsedNumber.isValid() ? parsedNumber.formatInternational() : phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      alert(response?.status === 201 ? "Form submitted successfully!" : "Failed to submit form.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?..."
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Your Name" required value={formData.name} onChange={handleChange} />
          <PhoneInput international defaultCountry={selectedCountryCode.substring(1)} value={formData.phone} onChange={handlePhoneChange} countryCodeEditable={false} />
          <input type="email" name="email" placeholder="Enter Your Email" required value={formData.email} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
          <textarea
  name="query"
  placeholder="Query"
  required
  value={formData.query} // Ensure this is correctly referenced
  onChange={handleChange} // Ensure this is working
></textarea>


          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetintouchSection;