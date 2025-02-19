import React from "react";
import "./BlogTemplate2.css";
import { useNavigate } from "react-router-dom";

const BlogTemplate2 = ({ Blogs }) => {
  // Accept services as a prop
  const navigate = useNavigate();

  return (
    <div className="Blog-area2-section">
      <div className="Blog2-grid">
        {Blogs.map((Blogs) => (
          <div
            key={Blogs.id}
            className="Blog-card2-section"
            onClick={() => navigate(`/blog/${Blogs.title}`)}
          >
            <img src={Blogs.image} alt={Blogs.title} />
            <h2>{Blogs.title}</h2>
            <p>{Blogs.description}</p>
            <p className="Blog-date">{Blogs.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTemplate2;
