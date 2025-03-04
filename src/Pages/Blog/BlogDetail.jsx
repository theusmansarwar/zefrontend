import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
import "./BlogDetail.css";
import Popular from "../../Components/PopularBlogs/Popular";
import AuthorShare from "../../Components/AuthorShare/AuthorShare";
import { fetchBlogDetail } from "../../DAL/fetch";
import { baseUrl } from "../../Config/Config";
import Comments from "../../Components/Comments/Comments";
import { formatDate } from "../../Utils/Formatedate";
import Bloader from "../../Components/Skeletonloaders/Bloader";

const BlogDetail = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogDetail();
  }, [title]);

  const getBlogDetail = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetchBlogDetail(title);
      if (response) {
        setBlog(response.blog);
      } else {
        setError("Blog not found");
      }
    } catch (err) {
      setError("Error fetching blog");
    }
    setLoading(false);
  };

  // ✅ Prevent potential XSS attacks
  const sanitizedContent = blog?.detail?.replace(/<script.*?<\/script>/gis, "");

  return (
    <>
  

      {/* ✅ Blog Content */}
      <div className="Blog-page-feature-img-area">
        {loading ? (
          <Bloader />
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : blog ? (
          <>
            <h1>{blog.title}</h1>
            <p className="category-text">
              <span>{formatDate(blog?.createdAt)}</span>{" "}
              <span>{blog?.category?.name}</span>
            </p>
            <img
              src={baseUrl + blog.thumbnail}
              className="Blog-page-feature-img"
              alt={blog.title}
            />
            <div
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              className="description-data"
            ></div>
          </>
        ) : (
          <p>No Article Found</p>
        )}
      </div>

    
      <AuthorShare author={blog?.author} />
      <Comments blogId={blog?._id} comments={blog?.comments} />
      <Popular />
    </>
  );
};

export default BlogDetail;
