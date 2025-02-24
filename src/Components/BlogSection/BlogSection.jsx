import React, { useEffect, useState } from "react";
import headingDesign from "../../Assets/headingDesign.svg";
import "./Blogsection.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import BlogTemplate from "../../Templates/BlogTemplate";
import { useNavigate } from "react-router-dom";
import { fetchBlogs } from "../../DAL/fetch";
import { baseUrl } from "../../Config/Config";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 768 ? 1 : 3);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
      setPage(1);
      setIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getBlogs();
  }, [page, itemsPerPage]);

  const getBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetchBlogs(itemsPerPage, page);
      console.log("API Response:", response);

      if (response?.blogs) {
        setBlogs(response.blogs);
        setTotalBlogs(response.totalBlogs);
        setTotalPages(response.totalPages);
      } else {
        throw new Error(response.message || "Failed to fetch blogs");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Next & Previous Blog Pagination
  const nextBlog = () => {
    if (index + itemsPerPage < blogs.length) {
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

      {/* Display Blogs */}
      <div className="blog-list">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          blogs.slice(index, index + itemsPerPage).map((blog) => (
            <BlogTemplate
              key={blog._id}
              image={baseUrl + blog.thumbnail}
              title={blog.title}
              slug={blog.slug}
              content={blog.description}
            />
          ))
        )}
      </div>

     
      <div className="pagination-buttons">
  <FaArrowLeftLong
    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    className={`prev-btn ${page === 1 ? "disabled" : ""}`}
  />

  {[...Array(totalPages)].map((_, i) => (
    <span
      key={i}
      onClick={() => setPage(i + 1)}
      className={`dott ${page === i + 1 ? "Active" : ""}`}
    ></span>
  ))}

  <FaArrowRightLong
    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
    className={`next-btn ${page === totalPages ? "disabled" : ""}`}
  />
</div>

    </div>
  );
};

export default BlogSection;
