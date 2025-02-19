import React from "react";
import "./Popular.css";
import blogimg1 from "../../Assets/Seo-picture.jpeg";
import blogimg2 from "../../Assets/google-ads-picture.jpeg";
import blogimg3 from "../../Assets/content-picture.jpeg";
import serviceimg4 from "../../Assets/social-media-marketing.webp";
import serviceimg5 from "../../Assets/website-development.webp";
import serviceimg6 from "../../Assets/ui-ux-design.webp";
import { useNavigate } from "react-router-dom";
const Popular = () => {
  const navigate = useNavigate();
  const Blogs = [
    {
      id: 1,
      title:
        "The Role of a Search Engine Optimization Consultant: Boosting Online Visibility",
      description:
        "In the fast-paced digital world, businesses must constantly adapt to stay ahead of the competition. One of the most crucial elements of an effective online presence is search engine optimization (SEO).",
      image: blogimg1,
      date: "20/02/2024",
    },
    {
      id: 2,
      title: "Google Ads Agency: How to Choose the Right One for Your Business",
      description:
        "In the digital age, advertising plays a crucial role in business success, and Google Ads is one of the most powerful platforms for reaching potential customers. However, managing a Google Ads campaign requires expertise, time, and continuous optimization.",
      image: blogimg2,
      date: "20/02/2024",
    },
    {
      id: 3,
      title: "Copywriting vs. Content Writing: Understanding the Key Differences",
      description:
        "In the world of digital marketing, the terms copywriting and content writing are often used interchangeably, but they serve distinct purposes. While both involve crafting written material, their goals, techniques, and impact differ significantly.",
      image: blogimg3,
      date: "20/02/2024",
    },
    {
      id: 4,
      title: "Social Media Ads",
      description:
        "Utilize Zemalt’s social media advertising strategies to increase brand awareness.",
      image: serviceimg4,
      date: "20/02/2024",
    },
    {
      id: 5,
      title: "Web Development",
      description:
        "Zemalt specializes in designing and developing responsive, user-friendly websites.",
      image: serviceimg5,
      date: "20/02/2024",
    },
    {
      id: 6,
      title: "UI Designing",
      description:
        "Enhance user experience with Zemalt's intuitive UI/UX design.",
      image: serviceimg6,
      date: "20/02/2024",
    },
  ];
  return (
    <div className="pupular-section">
      <h2 className="Blog-heading">Popular Reads</h2>
      <p>
      Explore our top blog posts covering SEO, digital marketing, web development, and more. Stay updated with expert insights, industry trends, and practical tips to grow your online presence! 🚀
      </p>

      <div className="grid-section">
        <div className="left">
          <div className="content-section"   onClick={() => navigate(`/blog/${Blogs[0]?.title}`)}>
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${Blogs[0]?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            >
              <div className="blackscreen3">
                <div className="text-section3">
                  <h1>{Blogs[0]?.title}</h1>
                  <p>{Blogs[0]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-section" onClick={() => navigate(`/blog/${Blogs[1]?.title}`)}>
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${Blogs[1]?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
                overflow: "hidden",
              }}
            >
              <div className="blackscreen4">
                <div className="text-section4">
                  <h1>{Blogs[1]?.title}</h1>
                  <p>
                  {Blogs[1]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section" onClick={() => navigate(`/blog/${Blogs[2]?.title}`)}>
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${Blogs[2]?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            >
              <div className="blackscreen4">
                <div className="text-section4">
                  <h1>{Blogs[2]?.title}</h1>
                  <p>{Blogs[2]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
