import React from "react";
import "./blogskeleton.css"; // Create this file for styles

const BlogCardSkeleton = () => {
  return (
<div className="skeleton-grid">
    <div className="skeleton-card">
      <div className="skeleton-card-image"></div>
      <div className="skeleton-card-text"></div>
      <div className="skeleton-card-text"></div>
      <div className="skeleton-card-text"></div>
    </div>
    <div className="skeleton-card">
      <div className="skeleton-card-image"></div>
      <div className="skeleton-card-text"></div>
      <div className="skeleton-card-text"></div>
      <div className="skeleton-card-text"></div>
    </div>
    <div className="skeleton-card">
      <div className="skeleton-card-image"></div>
      <div className="skeleton-card-text"></div>
      <div className="skeleton-card-text"></div>
      <div className="skeleton-card-text"></div>
    </div>
    </div>
  );
};

export default BlogCardSkeleton;
