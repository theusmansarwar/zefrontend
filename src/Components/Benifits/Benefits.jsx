import React from "react";
import "./Benefits.css";
import { FaEye, FaChartBar, FaDollarSign, FaCogs } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { SiMicrostrategy } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineSyncProblem } from "react-icons/md";

const benefits = [
  {
    icon: <GrUserExpert />,
    title: "Expertise & Experience ",
    description:
      "A team of skilled professionals specializing in SEO, Google Ads, content writing, and UI/UX design.",
  },
  {
    icon: <SiMicrostrategy />,
    title: "Easy Strategies",
    description:
      "We craft strategies backed by insights, analytics, and industry trends.",
  },
  {
    icon: <FaRankingStar />,
    title: "Proven High Results",
    description:
      "Increased traffic, better engagement, and higher conversions for our clients.",
  },
  {
    icon: <MdOutlineSyncProblem />,
    title: "Tailored Solutions",
    description:
      "Customized digital marketing plans to meet your business goals.",
  },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-heading">
        The Benefits of Working with <span className="highlight">Zemalt</span>
      </h2>
      <p className="benefits-subtext2">
        Digital marketing services provide businesses of all sizes with an
        opportunity to market their brand 24/7 at a low cost. From startups to
        medium-sized enterprises to multiple-location companies, a digital
        marketing company helps you expand your niche market reach to offer
        goods and services to your target customers, irrespective of time
        differences or location.
      </p>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <div className="benifit-text">
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
