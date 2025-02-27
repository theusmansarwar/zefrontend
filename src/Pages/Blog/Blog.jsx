import React, { useState, useEffect } from "react";
import BlogTemplate2 from "../../Templates/BlogTemplate2";
import backgroundimg from "../../Assets/background3.webp";
import "./Blog.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Popular from "../../Components/PopularBlogs/Popular";
import { fetchBlogs } from "../../DAL/fetch";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 15; // Adjust based on your needs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getBlogs();
  }, [page]);

  const getBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetchBlogs(itemsPerPage, page);
      console.log("API Response:", response);

      if (response?.blogs) {
        setBlogs(response.blogs);
 
        setTotalPages(response.totalPages); // ✅ Ensure totalPages is set properly
      } else {
        throw new Error(response.message || "Failed to fetch blogs");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false) ;
    }
  };

  // Handle pagination change
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
        <h2 className="Blog-heading">Latest Blogs</h2>
        <p>Drive Digital Success with Expert Strategies and Insights.</p>

        {loading ? (
          <p>Loading blogs...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            <BlogTemplate2 Blogs={blogs} /> {/* Pass blog data to template */}

            {/* ✅ Ensure Pagination Uses Correct `totalPages` */}
            <Stack spacing={2} alignItems="center">
              <Pagination
                count={totalPages} // ✅ Correct total pages
                page={page}
                onChange={handleChange}
                shape="rounded"
              />
            </Stack>
          </>
        )}
      </div>

      <Popular />
    </>
  );
};

export default Blog;
