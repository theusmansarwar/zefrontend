import React from "react";
import "./AuthorShare.css";
import { FaLinkedin, FaFacebookF, FaXTwitter, FaLink, FaLinkedinIn } from "react-icons/fa6";
import person from "../../Assets/Person.jpg";
const AuthorShare = () => {
  return (
    <div className="author-share-container">
      <div className="author-info">
        <img src={person} alt="Author" className="author-image" />
        <div className="author-details">
          <h3>Maheen Ali</h3>
          <p>Digital Marketing Expert</p>
        </div>
      </div>

      {/* Share Buttons */}
      <div>
        <p className="share-text">Spread the Word: Share This Post</p>
        <div className="share-buttons">
          <button className="linkedin">
            <FaLinkedinIn  />{" "}
          </button>
          <button className="facebook">
            <FaFacebookF />
          </button>
          <button className="twitter">
            <FaXTwitter />
          </button>
          <button className="copy-link">
            <FaLink /> Copy link
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorShare;
