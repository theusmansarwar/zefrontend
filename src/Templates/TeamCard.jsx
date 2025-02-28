import React from "react";
import "./TeamCard.css"; // Import the CSS file
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, role, sociallinks, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>

      <div className="social-icons2">
        <a
          href={sociallinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaLinkedin />
        </a>
        <a
           href={sociallinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <RiInstagramFill />
        </a>
        <a
         href={sociallinks.facebook}
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
