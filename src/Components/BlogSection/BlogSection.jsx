import React, { useEffect, useState } from "react";
import headingDesign from "../../Assets/headingDesign.svg";
import "./Blogsection.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import BlogTemplate from "../../Templates/BlogTemplate";
import blogimg1 from "../../Assets/Seo-picture.jpeg";
import blogimg2 from "../../Assets/google-ads-picture.jpeg";
import blogimg3 from "../../Assets/content-picture.jpeg";
import blogimg4 from "../../Assets/social-picture.jpeg";
import blogimg5 from "../../Assets/ui-picture.jpeg";
import { useNavigate } from "react-router-dom";

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
      title: "Social Media Campaign Examples: Successful Strategies to Inspire Your Marketing",
      description:
        "Utilize Zemalt’s social media advertising strategies to increase brand awareness.",
      image: blogimg4,
      date: "20/02/2024",
    },
    {
      id: 5,
      title: "UX-UI Design Career Trends: What You Need to Know",
      description:
        "Zemalt specializes in designing and developing responsive, user-friendly websites.",
      image: blogimg5,
      date: "20/02/2024",
    },

  ];

const BlogSection = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );
  const navigate = useNavigate();
  // Update itemsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
      setIndex(0); // Reset index when screen size changes
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextBlog = () => {
    if (index + itemsPerPage < Blogs.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prevBlog = () => {
    if (index > 0) {
      setIndex(index - itemsPerPage);
    }
  };

  return (
    <div className="Blog-Section">
      <div className="page-heading-area">
        <p>
          BLOGS{" "}
          <span>
            <img src={headingDesign} alt="Heading Design" />
          </span>
        </p>
      </div>
      <div className="upper-section">
        <h1>
          LATEST <br /> <span>BLOGS</span>
        </h1>
        <p onClick={() => navigate(`/blog`)}>
          View All Blogs <FaArrowRightLong />
        </p>
      </div>

      {/* Display only the required blogs */}
      <div className="blog-list">
        {Blogs.slice(index, index + itemsPerPage).map((blog) => (
          <BlogTemplate
            key={blog.id}
            image={blog.image}
            title={blog.title}
            content={blog.description}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-buttons">
        <FaArrowLeftLong
          onClick={prevBlog}
          className={`prev-btn ${index === 0 ? "disabled" : ""}`}
        />

        {[...Array(Math.ceil(Blogs.length / itemsPerPage))].map((_, i) => (
          <span
            key={i}
            className={`dott ${index / itemsPerPage === i ? "Active" : ""}`}
          ></span>
        ))}

        <FaArrowRightLong
          onClick={nextBlog}
          className={`next-btn ${
            index + itemsPerPage >= Blogs.length ? "disabled" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default BlogSection;
