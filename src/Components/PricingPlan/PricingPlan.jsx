import React from "react";
import "./PricingPlan.css";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Trial Plan",
    price: "$20",
    duration:"15 Days",
    targetAudience: "Businesses wanting to test your service before committing.",
    features: [
      "Website SEO audit (basic)",
      "Keyword analysis (5 keywords)",
      "On-page SEO recommendations",
      "One backlink from a high-authority site",
      "Competitor analysis (basic)",
      "Basic technical SEO check (broken links, speed, mobile-friendliness)",
      "15-day validity",
    ],
  },
  {
    title: "Premium Plan",
    price: "$650 - $999 ",
    duration:"per month",
    targetAudience: "Businesses that want aggressive SEO and long-term growth.",
    features: [
      "Advanced website SEO audit",
      "Keyword research & tracking (50+ keywords)",
      "Complete on-page SEO implementation",
      "15+ high-quality backlinks per month",
      "Content creation (blog posts, guest posts)",
      "Advanced technical SEO fixes (site speed, schema markup, crawl errors)",
      "Competitor analysis (in-depth)",
      "Monthly detailed SEO reports & strategy consultation",
      "Conversion rate optimization (CRO) guidance",
      "Full-Stack SEO"
    ],
  },
  { 
    title: "Basic Plan",
    price: "$350 - $450 ",
    duration:"per month",
    targetAudience: "Small businesses looking for affordable SEO improvements.",
    features: [
      "Full website SEO audit",
      "Keyword research & tracking (15 keywords)",
      "On-page SEO (meta tags, content optimization, internal linking)",
      "5 high-quality backlinks per month",
      "Google My Business optimization",
      "Basic technical SEO fixes",
      "Monthly performance report",
      "Local SEO strategies",
     

    ],
  },
 
];

const PricingPlan = () => {
  const navigate = useNavigate();
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h2>{plan.title}</h2>
          <h3>{plan.price} <span className="permonth">{plan.duration}</span></h3>
          <button className="cta-button" onClick={()=>navigate('/contact')}>GET STARTED</button>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx} className="feature">
                <FaCircleCheck /> <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;
