import React from "react";
import "./BlogTemplate.css";
import { useNavigate } from "react-router-dom";
import useTruncateText from "../useTruncateText";

const BlogTemplate = ({ image, title, content, slug }) => {
  const navigate = useNavigate();
  return (
    <div className="Blog-area">
      <div className="blogimg"   onClick={() => navigate(`/blog/${slug}`)}>
        <img src={image} alt="Blog" />
      </div>
      <div className="blog-text-section">
        <h3>{useTruncateText(title, 30)}</h3>
        <p>{useTruncateText(content, 170)}</p>
      </div>
    </div>
  );
};

export default BlogTemplate;
