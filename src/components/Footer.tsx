import React from "react";
import logo from "/images/logo.svg";
import facebook from "/images/icon-facebook.svg";
import instagram from "/images/icon-instagram.svg";
import pinterest from "/images/icon-pinterest.svg";
import twitter from "/images/icon-twitter.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <nav className="footer__wrapper">
          <img src={logo} alt="logo" className="footer__logo" />
          <ul>
            <li>
              <a href="#" className="link">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="link">
                CAREERS
              </a>
            </li>
            <li>
              <a href="#" className="link">
                EVENTS
              </a>
            </li>
            <li>
              <a href="#" className="link">
                PRODUCTS
              </a>
            </li>
            <li>
              <a href="#" className="link">
                SERVICES
              </a>
            </li>
          </ul>
        </nav>
        <div className="links">
          <div className="social__media--links">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
          <span className="copywrite">
            &copy;2021 LoopStudios. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
