import React from "react";
import "./blogskeleton.css"; // Import the styles

const blogSkeletonloader = () => {
  return (
    <div className="blogSkeletonloader-container">

      <div className="blogSkeletonloader skeleton-image"></div>

      <div className="blogSkeletonloader skeleton-title"></div>

      <div className="blogSkeletonloader-comment-section">
        <div className="blogSkeletonloader skeleton-comment"></div>
        <div className="blogSkeletonloader skeleton-comment"></div>
        <div className="blogSkeletonloader skeleton-comment"></div>
      </div>
    </div>
  );
};

export default blogSkeletonloader;
