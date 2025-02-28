import React, { useEffect, useState } from "react";
import "./Team.css";
import TeamCard from "../../Templates/TeamCard";
import backgroundimg from "../../Assets/background3.webp";
import headingDesign from "../../Assets/headingDesign.svg";
import TeamSkeleton from "../../Components/Skeletonloaders/TeamSkeleton";
import { getTeam } from "../../DAL/fetch"; // Ensure this function correctly calls the API
import { baseUrl } from "../../Config/Config";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      const response = await getTeam();
      console.log("API Response:", response);
      if (response?.teams) {
        setTeams(response.teams);
      } else {
        throw new Error(response.message || "Failed to fetch teams");
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
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
              <h1>Team</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Page Heading */}
      <div className="page-heading-area">
        <p>
          OUR TEAM{" "}
          <span>
            <img src={headingDesign} alt="heading design" />
          </span>
        </p>
      </div>

      {/* Team Section Description */}
      <div className="Teams-section-data">
        <h2>
          Meet our <span>team members</span>
        </h2>
        <p>
          At Zemalt, our team is the backbone of our success. We are a group of
          passionate, skilled, and results-driven professionals dedicated to
          delivering top-notch SEO, digital marketing, web development, and
          design solutions. With years of experience and industry expertise, our
          team works collaboratively to craft innovative strategies that drive
          growth, enhance visibility, and maximize ROI.
        </p>
      </div>

      {/* Team List */}
      {loading ? (
        <TeamSkeleton />
      ) : (
        teams.map((teamCategory, index) => (
          <div key={index}>
            <h2 className="Team-heading">{teamCategory.categoryName}</h2>
            <div className="team-container">
              {teamCategory.members.map((member, idx) => (
                <center>
                <TeamCard
                  key={idx}
                  name={member.name}
                  role={member.role.name}
                  description={member.description}
                  image={baseUrl+member.image || "/default-profile.png"} 
                  sociallinks={member.socialLinks}
                />
                </center>
              ))}
            </div>
          </div>
        ))
      )}
      
      <br />
      <br />
      {/* Footer Section */}
      <center>
        <h1 className="heading-testimonial">
          Guiding Your <span> Customers </span> with <span>Ease </span>
        </h1>
        <p className="p-testimonial">
          At Zemalt, we create seamless digital experiences that help your
          customers navigate your brand effortlessly. From intuitive UI/UX
          designs to optimized SEO strategies, we ensure smooth user journeys,
          increased engagement, and higher conversions. Our expertise ensures
          your audience finds exactly what they need—quickly and efficiently.
          Let’s simplify customer interactions and drive success together!
        </p>
      </center>
      <br />
      <br />
    </>
  );
};

export default Team;
