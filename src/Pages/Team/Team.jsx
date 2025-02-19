import React, { useEffect } from "react";
import "./Team.css";
import profileImage from "../../Assets/Person.jpg";
import usman from "../../Assets/usman.webp";
import ahsan from "../../Assets/AHSANBAJWA.webp";
import hamza from "../../Assets/hamza2.png";
import zainab from "../../Assets/zainabpng.png";
import zain from "../../Assets/zain.png";
import ahmed from "../../Assets/ahmad.png";
import haseeb from "../../Assets/haseeb.png";
import unique from "../../Assets/unique.png";
import Daniyal from "../../Assets/danyial.png";
import alexia from "../../Assets/alexia.png";
import TeamCard from "../../Templates/TeamCard";
import backgroundimg from "../../Assets/background3.webp";
import headingDesign from "../../Assets/headingDesign.svg";
import baber from '../../Assets/babar.png'
const teamMembers = [
   
  {
    name: "Sufyan Rasheed",
    role: "Founder",
    description: "Operations strategist, focused on efficiency and execution",
    image: profileImage,
  },
  {
    name: "Zainab Khan",
    role: "Co-Founder",
    description: "Marketing guru, dedicated to brand storytelling",
    image: zainab,
  },
  {
    name: "Usman Sarwar",
    role: "Web Developer",
    description:
      "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    image: usman,
  },
  {
    name: "Ahsan Ashraf",
    role: "SQA Engineer",
    description: "Tech enthusiast, loves innovation and problem-solving",
    image: ahsan,
  },
  {
    name: "Ameer Hamza",
    role: "SEO Expert",
    description: "Finance expert, passionate about growth and sustainability",
    image: hamza,
  },
  {
    name: "Babar Saleem",
    role: "Ui/Ux Designer",
    description: "Finance expert, passionate about growth and sustainability",
    image: baber,
  },
];
const teamMembers2 = [
  {
    name: "Zain Imtiaz",
    role: "Customer Support Manager",
    description: "Operations strategist, focused on efficiency and execution",
    image: zain,
  },
  {
    name: "Ahmed Anwar",
    role: "Customer Support",
    description: "Marketing guru, dedicated to brand storytelling",
    image: ahmed,
  },
  {
    name: "Haseeb Raza",
    role: "Customer Support",
    description:
      "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    image: haseeb,
  },
  {
    name: "Unique Sohail",
    role: "Customer Support",
    description: "Tech enthusiast, loves innovation and problem-solving",
    image: unique,
  },
  {
    name: "Daniyal Malik",
    role: "Customer Support",
    description: "Finance expert, passionate about growth and sustainability",
    image: Daniyal,
  },
  {
    name: "Alexia Barbar",
    role: "Customer Support",
    description: "Finance expert, passionate about growth and sustainability",
    image: alexia,
  },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <h1>Team</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="page-heading-area">
        <p>
          OUR TEAM{" "}
          <span>
            <img src={headingDesign} />
          </span>
        </p>
      </div>
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

      <h2 className="Team-heading">Executives</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
      <h2 className="Team-heading">Support Team</h2>
      <div className="team-container">
        {teamMembers2.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
      <br />
      <br />
      <center>
        <h1 className="heading-testimonial">
          Guiding Your<span> Customers </span>with <span>Ease </span>
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
