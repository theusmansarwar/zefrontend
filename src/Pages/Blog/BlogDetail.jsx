import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import Popular from "../../Components/PopularBlogs/Popular";
import AuthorShare from "../../Components/AuthorShare/AuthorShare";
import { fetchBlogDetail } from "../../DAL/fetch";
import { baseUrl } from "../../Config/Config";

const BlogDetail = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getBlogDetail();
  }, [title]);

  const getBlogDetail = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetchBlogDetail(title); // Pass `title` to API call

      if (response) {
        setBlog(response.blog); // Store single blog object
      } else {
        throw new Error(response.message || "Blog not found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="Blog-page-feature-img-area">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : blog ? (
          <>
            <h1>{blog.title}</h1>
            <img
              src={baseUrl+blog.thumbnail}
              className="Blog-page-feature-img"
              alt={blog.title}
            />
            <div
              dangerouslySetInnerHTML={{ __html: blog.detail }}
              className="description-data"
            ></div>
          </>
        ) : (
          <p>No Article Found</p>
        )}
      </div>

      <AuthorShare />
      <Popular />
    </>
  );
};

export default BlogDetail;
