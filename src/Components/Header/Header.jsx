import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import zemaltlogo from "../../Assets/zemalt-logo.png";
const Header = () => {
  const phoneNumber = "+923007044566";
  const email = "company@zemalt.com";
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },

    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation(); // Get current URL

  // Automatically set active item based on URL
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;

    // Check if the path matches exactly or starts with "/services"
    if (currentPath.startsWith("/services")) {
      setActiveItem("Services");
    }
    else if (currentPath.startsWith("/blog")) {
      setActiveItem("Blog");
    } else {
      const active = menuItems.find((item) => item.path === currentPath);
      setActiveItem(active ? active.name : "Home");
    }
  }, [location.pathname]);

  const handleMenuClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  return (
    <div className="header">
      <div className="nav-content-section">
        <div className="left">
          <div className="content-item">
            <BiSolidPhoneCall />
            <a
              href="http://wa.me/923007044566"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{phoneNumber}</p>
            </a>
          </div>
          <div className="content-item">
            <IoMail />
            <a
              href="mailto:company@zemalt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{email}</p>
            </a>
          </div>
        </div>
        <div className="right">
          <a
            href="https://www.linkedin.com/company/zemalt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/zemaltpvtltd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <RiInstagramFill />
          </a>
          <a
            href="https://www.facebook.com/zemaltpvtltd"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <ImFacebook2 />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <Navbar expand="lg">
        <Container fluid className="nav-container">
          <Navbar.Brand href="/">
            <img className="header-logo" src={zemaltlogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex gap-2 align-items-center justify-content-center">
              {menuItems.map((item) => (
                <p
                  key={item.name}
                  className={`menu-item ${
                    activeItem === item.name ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                </p>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
