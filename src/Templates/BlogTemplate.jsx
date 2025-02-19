import React from "react";
import "./BlogTemplate.css";
import { useNavigate } from "react-router-dom";

const BlogTemplate = ({ image, title, content }) => {
  const navigate = useNavigate();
  return (
    <div className="Blog-area">
      <div className="blogimg"   onClick={() => navigate(`/blog/${title}`)}>
        <img src={image} alt="Blog" />
      </div>
      <div className="blog-text-section">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogTemplate;
