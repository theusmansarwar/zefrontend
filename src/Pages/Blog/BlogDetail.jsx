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
  
      <Helmet>
        <title>{blog ? `${blog.title} | Zemalt Blog` : "Blog | Zemalt"}</title>
        <meta name="description" content={blog?.summary || "Read the latest articles on digital marketing, SEO, and business growth."} />
        
        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content={blog?.title || "Zemalt Blog"} />
        <meta property="og:description" content={blog?.summary || "Discover expert insights on digital growth."} />
        <meta property="og:image" content={blog?.thumbnail ? `${baseUrl}${blog.thumbnail}` : "https://zemalt.com/default-image.jpg"} />
        <meta property="og:url" content={window.location.href} />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog?.title || "Zemalt Blog"} />
        <meta name="twitter:description" content={blog?.summary || "Discover expert insights on digital growth."} />
        <meta name="twitter:image" content={blog?.thumbnail ? `${baseUrl}${blog.thumbnail}` : "https://zemalt.com/default-image.jpg"} />

        {/* ✅ Canonical URL for SEO */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>

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
