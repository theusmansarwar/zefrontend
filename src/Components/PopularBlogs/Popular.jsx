import React, { useEffect, useState } from "react";
import "./Popular.css";

import { useNavigate } from "react-router-dom";
import { fetchBlogs } from "../../DAL/fetch";
import { baseUrl } from "../../Config/Config";
const Popular = () => {
  const navigate = useNavigate();
  const [blogs, setblogs] = useState([]);

    const page=1

    const itemsPerPage = 3;
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
      getblogs();
    }, [page]);
  
    const getblogs = async () => {
  
  
      
        const response = await fetchBlogs(itemsPerPage, page);
        console.log("API Response:", response);
  
        if (response?.blogs) {
          setblogs(response.blogs);
   
        } else {
          throw new Error(response.message || "Failed to fetch blogs");
       
      }
    };

  return (
    <div className="pupular-section">
      <h2 className="Blog-heading">Popular Reads</h2>
      <p>
      Explore our top blog posts covering SEO, digital marketing, web development, and more. Stay updated with expert insights, industry trends, and practical tips to grow your online presence! 🚀
      </p>

      <div className="grid-section">
        <div className="left">
          <div className="content-section"   onClick={() => navigate(`/blog/${blogs[0]?.slug}`)}>
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${baseUrl+blogs[0]?.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            >
              <div className="blackscreen3">
                <div className="text-section3">
                  <h1>{blogs[0]?.title}</h1>
                  <p>{blogs[0]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-section" onClick={() => navigate(`/blog/${blogs[1]?.slug}`)}>
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${baseUrl+blogs[1]?.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
                overflow: "hidden",
              }}
            >
              <div className="blackscreen4">
                <div className="text-section4">
                  <h1>{blogs[1]?.title}</h1>
                  <p>
                  {blogs[1]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section" onClick={() => navigate(`/blog/${blogs[2]?.slug}`)}>
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${baseUrl+blogs[2]?.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            >
              <div className="blackscreen4">
                <div className="text-section4">
                  <h1>{blogs[2]?.title}</h1>
                  <p>{blogs[2]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
