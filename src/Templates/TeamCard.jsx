import React from "react";
import "./TeamCard.css"; // Import the CSS file
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, role, description, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>

      <div className="social-icons2">
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
  );
};

export default TeamCard;
