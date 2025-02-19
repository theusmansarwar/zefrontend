import React from "react";
import "./PricingPlan.css";
import { FaCircleCheck } from "react-icons/fa6";

const plans = [
  {
    title: "Free Trial",
    price: "£0,000",
    features: [
      "Basic management focused on Google Ads",
      "Comprehensive services: product descriptions, monthly blog, technical SEO, on and off-page SEO, backlink building, site speed optimization",
      "16 posts/month: carousels, text posts, monthly optimizations",
      "General maintenance: basic updates and performance monitoring",
      "Custom landing pages to support key initiatives",
      "10 videos/month: edited, published on social and YouTube",
      "Basic setup for contact management and simple automations",
      "Included: 15% off software projects",
    ],
  },
  {
    title: "GOLD GROWTH",
    price: "£7,999",
    features: [
      "Management with regular adjustments based on performance",
      "Comprehensive services: product descriptions, monthly blog, technical SEO, on and off-page SEO, backlink building, site speed optimization",
      "3 posts per week",
      "4 newsletters/month: advanced segmentation, drip campaigns, list management, and reporting",
      "Webpage split testing and monthly optimizations",
      "Regular maintenance: updates to products, adding new products, ensuring optimal performance",
      "Comprehensive webchat and social conversation management",
    ],
  },
  {
    title: "PLATINUM MARKETING SUITE",
    price: "£10,499",
    features: [
      "Full management with continuous optimization and detailed performance",
      "Comprehensive services: product descriptions, monthly blog, technical SEO, on and off-page SEO, backlink building, site speed optimization",
      "19 posts/month: carousels, text posts, monthly optimizations",
      "7 posts per week",
      "4 newsletters/month: advanced segmentation, drip campaigns, list management, and reporting",
      "Advanced CRO: webpage split testing, monthly optimizations",
      "Full-service maintenance: general upkeep, product updates, adding new features",
    ],
  },
];

const PricingPlan = () => {
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h2>{plan.title}</h2>
          <h3>{plan.price}</h3>
          <button className="cta-button">GET STARTED</button>
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
