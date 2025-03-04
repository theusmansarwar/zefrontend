import React, { useEffect } from "react";

import backgroundimg from "../../Assets/background3.webp";
import PricingPlan from "../../Components/PricingPlan/PricingPlan";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

 

  return (
    <div>
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
              <h1>Pricing</h1>
            </div>
        
          </div>
        </div>
      </div>

      <div className="Teams-section-data">
        <h2>
      Affordable & <span>Results-Driven</span> Plans 
        </h2>
        <p>
        Explore Zemalt’s transparent and affordable SEO pricing plans. Get top-notch search engine optimization services tailored to boost rankings, drive traffic, and grow your business. No hidden costs—just proven results!
        </p>
      </div>
      <div className="Pricing-section">
      <PricingPlan/>
      </div>

    

    </div>
  );
};

export default Pricing;
