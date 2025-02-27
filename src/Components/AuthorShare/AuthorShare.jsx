import React, { useState } from "react";
import "./AuthorShare.css";
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaLink } from "react-icons/fa6";
import person from "../../Assets/person.png";

const AuthorShare = ({ author }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const currentUrl = window.location.href; 
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  // ✅ Open Facebook Share Feed
  const shareOnFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=Check out this article!`;
    window.open(fbUrl, "_blank");
  };

  // ✅ Open Twitter/X Share
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=Check out this article!&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, "_blank");
  };

  // ✅ Open LinkedIn Share
  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <div className="author-share-container">
      <div className="author-info">
        <img src={person} alt="Author" className="author-image" />
        <div className="author-details">
          <h3>{author || "Unknown Author"}</h3>
          <p>Author</p>
        </div>
      </div>

      {/* Share Buttons */}
      <div>
        <p className="share-text">Spread the Word: Share This Post</p>
        <div className="share-buttons">
          <button className="linkedin" onClick={shareOnLinkedIn}>
            <FaLinkedinIn />
          </button>
          <button className="facebook" onClick={shareOnFacebook}>
            <FaFacebookF />
          </button>
          <button className="twitter" onClick={shareOnTwitter}>
            <FaXTwitter />
          </button>
          <button className="copy-link" onClick={handleCopyLink}>
            <FaLink /> {copySuccess ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorShare;
