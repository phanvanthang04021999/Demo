import React from "react";
import Logo from "../images/logo.svg";
import LogoBule from "../images/logo-blue.svg";

const header = () => {
  return (
    <div>
      <div className="header" data-header="">
        <div className="overlay" data-overlay="" />
        <div className="header-top">
          <div className="container">
            <a href="tel:+01123456790" className="helpline-box">
              <div className="icon-box">
                <ion-icon name="call-outline" />
              </div>
              <div className="wrapper">
                <p className="helpline-title">For Further Inquires :</p>
                <p className="helpline-number">+01 (123) 4567 90</p>
              </div>
            </a>
            <a href="#" className="logo">
              <img src={Logo} alt="Tourly logo" />
            </a>
            <div className="header-btn-group">
              <button className="search-btn" aria-label="Search">
                <ion-icon name="search" />
              </button>
              <button
                className="nav-open-btn"
                aria-label="Open Menu"
                data-nav-open-btn=""
              >
                <ion-icon name="menu-outline" />
              </button>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube" />
                </a>
              </li>
            </ul>
            <nav className="navbar" data-navbar="">
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img src={LogoBule} alt="Tourly logo" />
                </a>
                <button
                  className="nav-close-btn"
                  aria-label="Close Menu"
                  data-nav-close-btn=""
                >
                  <ion-icon name="close-outline" />
                </button>
              </div>
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link="">
                    home
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-link" data-nav-link="">
                    about us
                  </a>
                </li>
                <li>
                  <a
                    href="#destination"
                    className="navbar-link"
                    data-nav-link=""
                  >
                    destination
                  </a>
                </li>
                <li>
                  <a href="#package" className="navbar-link" data-nav-link="">
                    packages
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="navbar-link" data-nav-link="">
                    gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link="">
                    contact us
                  </a>
                </li>
              </ul>
            </nav>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
