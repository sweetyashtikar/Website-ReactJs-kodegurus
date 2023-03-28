import React from "react";
import { Link } from "react-router-dom";
import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className="gfg-footer" id="gfg-footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper_branding">
          <Link
            className="footer-wrapper_branding-anchor"
            to="https://kodegurus.co.in/"
          >
            <h1>
              <b>KODEGURUS</b>
            </h1>
            <br />
            <br />
            <br />
          </Link>
          <div className="footer-wrapper_branding-address">
            <i className="gfg-icon gfg-icon_pin"></i>
            <span style={{ marginRight: "15px" }}>
              A-143, 5th Floor,
              <br /> <br /> Sebiz Square <br /> <br />
              Corporate Tower,
              <br />
              <br />
              Sector-67 Mohali, <br /> <br />
              Chandigradh - 441600
              <br />
            </span>
          </div>
          <div className="footer-wrapper_branding-email">
            <i className="gfg-icon gfg-icon_mail"></i>
            <Link to="mailto:feedback@geeksforgeeks.org">
              feedback@kodegurus.co.in.org
            </Link>
          </div>
        </div>
        <div className="all-footer-information">
          <div
            className="footer-wrapper_links"
            style={{
              justifyContent: "spaceBetween",
              textAlign: "-webkit-left",
            }}
          >
            <ul className="footer-wrapper_links-list">
              <h2>Our Services</h2>
              <br />
              <li>
                <Link to="/reactlang">ReactJs</Link>
              </li>
              <li>
                <Link to="/angular">AngularJS</Link>
              </li>
              <li>
                <Link to="/bootstrap">Bootstrap5</Link>
              </li>
              <li>
                <Link to="/html">HTML5</Link>
              </li>
              <li>
                <Link to="/vue">VueJs</Link>
              </li>
            </ul>
            <ul className="footer-wrapper_links-list">
              <h1>Our Products</h1>
              <br />
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
            </ul>
            <ul className="footer-wrapper_links-list">
              <li>
                <Link to="/full_stack_developer.php">
                  Hire Full Stack Developer
                </Link>
              </li>
              <li>
                <Link to="/angular_developer.php">Hire Angular Developer</Link>
              </li>
              <li>
                <Link to="/backend_developer.php">Hire Backend Developer</Link>
              </li>
              <li>
                <Link to="/mern_developer.php">Hire MERN Developer</Link>
              </li>
              <li>
                <Link to="/dot_net_developer.php">Hire Dot Net Developer</Link>
              </li>
              <li>
                <Link to="/wordpress_developer.php">
                  Hire WordPress Developer
                </Link>
              </li>
              <li>
                <Link to="/ui_ux.php">Hire UI/UX Dessign Expert</Link>
              </li>
              <li>
                <Link to="/laravel.php">Hire Laravel Developer</Link>
              </li>
              <li>
                <Link to="/magento_developer.php">Hire Magento Developer</Link>
              </li>
              <li>
                <Link to="/mobile_app.php">Hire Mobile App Developer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-strip">
        <div className="copyright">
          <Link
            to="https://kodegurus.co.in.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @kodegurus
          </Link>
          <span>
            <Link to="https://www.geeksforgeeks.org/copyright-information/">
              Some rights reserved
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
