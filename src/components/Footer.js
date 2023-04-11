import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div className="home">
              <p>
                {" "}
                <FaHome size={20} style={{ marginRight: "2rem" }} /> New York,
                New York
              </p>
            </div>
          </div>
          <div className="phone">
            <p>
              <FaPhone size={20} style={{ marginRight: "2rem" }} />
              248-434-5508
            </p>
          </div>
          <div className="email">
            <p>
              <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
              CloverCoffee@gmail.com
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <h4 className="about">Connect With Us</h4>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin size={25} style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram size={25} style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook size={25} style={{ marginRight: "1rem" }} />
            </a>
          </div>
          <div>
            <p className="menu">&copy; Clover Coffee</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
