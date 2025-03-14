import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; 

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <h1 className="oops-text">Oops!</h1>
      <h2 className="not-found-title">404 - PAGE NOT FOUND</h2>
      <p className="not-found-message">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button className="home-button" onClick={() => navigate("/")}>GO TO HOMEPAGE</button>
    </div>
  );
};

export default NotFound;
