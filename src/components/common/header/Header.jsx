import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            {/* Home */}
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* services */}
            <li>
              <div className="dropdown">
                <Link to="/services" className="dropbtn">
                  Services
                </Link>
                <div className="dropdown-content col-sm-4">
                  <h3>Forntend</h3>
                  <li>
                    <Link to="/reactlang">ReactLang</Link>
                  </li>
                  <li>
                    <Link to="/angular">Angular</Link>
                  </li>
                  <li>
                    <Link to="/bootstrap">Bootstrap</Link>
                  </li>
                  <li>
                    <Link to="/html">HTML</Link>
                  </li>
                </div>
              </div>
            </li>
            <li>
              {/* products */}
              <div className="dropdown">
                <Link to="/product">Product</Link>
                <div className="dropdown-content col-sm-4">
                  <li>
                    <Link to="/csm">Cyber-School-Manger</Link>
                  </li>
                  <li>
                    <Link to="/ccm">Cyber-Club-Manger</Link>
                  </li>
                  <li>
                    <Link to="/cim">Cyber-Institute-Manger</Link>
                  </li>
                  <li>
                    <Link to="/sm">Smart-Board</Link>
                  </li>
                </div>
              </div>
            </li>
            <li>
              {/* portfolio */}
              <div className="dropdown">
                <Link to="/portfolio">Portfolio</Link>
                <div className="dropdown-content col-sm-4">
                  <li>
                    <Link to="/mobile-app">Mobile App</Link>
                  </li>
                  <li>
                    <Link to="/education">Education</Link>
                  </li>
                  <li>
                    <Link to="/e-comm">E-commerce</Link>
                  </li>
                  <li>
                    <Link to="/web-app">Web App</Link>
                  </li>
                  <li>
                    <Link to="/product-dev">Product Development</Link>
                  </li>
                </div>
              </div>
            </li>
            {/* HireDeveloper */}
            <li>
              <Link to="/hiredeveloper">HireDeveloper</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
