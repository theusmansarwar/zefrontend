import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Team.css";
import "../ServicesSection/Services.css";
import usmanImg from "../../Assets/usman.webp";
import ahsanImg from "../../Assets/AHSANBAJWA.webp";
import hamzaImg from "../../Assets/hamza.webp";
import { useNavigate } from "react-router-dom";
const TeamSection = () => {
  const navigate = useNavigate();
  return (
    <div className="team-section">
      <div className="upper-section">
        <h1>
          Creative <br /> <span>Team</span>
        </h1>
        <p onClick={() => navigate(`/team`)}>
          View All Team <FaArrowRightLong />
        </p>
      </div>
      <div className="team-items">
        <div className="team-design-one">
          <div className="filled-dot-1"></div>
          <div className="team-img-section">
            <div className="img-area-for-team1">
              <img src={usmanImg} />
            </div>
            <h2>Usman Sarwar</h2>
            <p>Project Manager</p>
            <div className="filled-dot-2"></div>
          </div>
        </div>
        <div className="team-design-two">
          <div className="filled-dot-3"></div>
          <div className="team-img-section">
            <div className="img-area-for-team2">
              {" "}
              <img src={ahsanImg} />
            </div>
            <h2>Ahsan Ashraf</h2>
            <p>SQA Engineer</p>
          </div>
        </div>
        <div className="team-design-three">
          <div className="filled-dot-4"></div>
          <div className="team-img-section">
            <div className="img-area-for-team3">
              <img src={hamzaImg} />
            </div>
            <h2>Ameer Hamza</h2>
            <p>SEO Expert</p>
            <div className="filled-dot-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
