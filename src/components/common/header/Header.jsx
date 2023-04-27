import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [click, setClass] = useState(false);

  return (
    <>
      {/* <Head /> */}
      <header className="header">
        <div className="head">
          <div className="container navHeader">
            <div className="social">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-youtube icon"></i>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg ">
          <Link to={"/"} className="navbar-brand p-0">
            <div className="logo">
              <h1 className="m-0">KODEGURUS</h1>
              <span>Build Innovate & Inspire</span>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation" onClick={() => setClass(!click)}
          >
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
          <div className="collapse navbar-collapse navbarNavs" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Services <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hire" to="/">
                  Hire Developer
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
