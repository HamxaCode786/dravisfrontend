import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
function Header() {
  return (
    <>
      <div class="Nav_bar">
        <div class="Container1">
          <div class="icons_1">
            <div className="Icons_response" style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} color="#E1306C" />
              </a>
              <a
              
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} color="#1877F2" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} color="#0e76a8" />
              </a>
            </div>
          </div>
          <div class="Para1">
            <div>
            <a href="/">
              <p class="t1">Notifications: </p>
              </a>
            </div>
            
            <div>
              <a href="/">
              <p class="t2">
              Lorem ipsum dolor sit amet consectetur adipiscing
              </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

