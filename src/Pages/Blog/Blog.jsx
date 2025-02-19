import React, { useState, useEffect } from "react";
import BlogTemplate2 from "../../Templates/BlogTemplate2";
import blogimg1 from "../../Assets/Seo-picture.jpeg";
import blogimg2 from "../../Assets/google-ads-picture.jpeg";
import blogimg3 from "../../Assets/content-picture.jpeg";
import blogimg4 from "../../Assets/social-picture.jpeg";
import blogimg5 from "../../Assets/ui-picture.jpeg";


import backgroundimg from "../../Assets/background3.webp";
import "./Blog.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Popular from "../../Components/PopularBlogs/Popular";

const Blog = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

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
  const categories = ["All", "Category 01", "Category 02", "Category 03"];
  const sortOptions = ["Newest", "Oldest", "Popular"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  // Pagination Logic

  const itemsPerPage = 5;
  const totalPages = Math.ceil(Blogs.length / itemsPerPage);

  const paginatedBlogs = Blogs.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

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
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="Blog-grid">
        <h2 className="Blog-heading">Latest Blog</h2>
        <p>Drive Digital Success with Expert Strategies and Insights.</p>
        <div className="filter-container">
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="sort">
        <span>Sort by:</span>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
        <BlogTemplate2 Blogs={paginatedBlogs} />

        <Stack spacing={2} alignItems="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            shape="rounded"
          />
        </Stack>
      </div>
      <Popular />
    </>
  );
};

export default Blog;
