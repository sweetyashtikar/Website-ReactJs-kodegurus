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
                <div className="dropdown-content  ">
                  <div className="row">
                    <div className="column">
                      <h3>Frontend</h3>
                      <ul>
                        <li>
                          <Link to="angular">AngularJS</Link>{" "}
                        </li>

                        <li>
                          <Link to="react">ReactJS </Link>
                        </li>

                        <li>
                          <Link to="vue">Vuejs</Link>
                        </li>

                        <li>
                          <Link to="html5">HTML5 </Link>
                        </li>

                        <li>
                          <Link to="bootstrap">Bootstrap5 </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="column">
                      <h3>Backend</h3>

                      <ul>
                        <li>
                          <Link to="php">PHP</Link>{" "}
                        </li>

                        <li>
                          <Link to="ruby">RubyonRails </Link>
                        </li>

                        <li>
                          <Link to="nodejs">Nodejs</Link>
                        </li>

                        <li>
                          <Link to="java">Java</Link>
                        </li>

                        <li>
                          <Link to="python">Python</Link>
                        </li>

                        <li>
                          <Link to="net">.NET</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="column">
                      <h3>Others</h3>

                      
                      <ul>
                        <li>
                          <Link to="mean-stack">MeanStack</Link>{" "}
                        </li>

                        <li>
                          <Link to="mern-stack">MernStack </Link>
                        </li>

                        <li>
                          <Link to="aws-dev">DevOpsAWS </Link>{" "}
                        </li>

                        <li>
                          <Link to="web-application-development">
                            WebApplicationDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link to="ecommerce-development">
                            eCommerceDevelopment
                          </Link>
                        </li>

                        <li>
                          <Link to="ui-ux_design">UIUXDesign </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="column">
                      <h3>DigitalMarketing </h3>

                      <ul>
                        <li>
                          <Link to="seo">SearchEngineOptimization</Link>{" "}
                        </li>

                        <li>
                          <Link to="smm">SocialMediaMarketing </Link>
                        </li>

                        <li>
                          <Link to="sem">SearchEngineMarketing </Link>
                        </li>

                        <li>
                          <Link to="content-m">ContentMarketing </Link>
                        </li>

                        <li>
                          <Link to="email">EmailMarketing </Link>
                        </li>

                        <li>
                          <Link to="paid-ad">PaidAdsServices</Link>
                        </li>
                      </ul>
                    </div>

                    
                  </div>
                </div>
              </div>
            </li>
            {/* products */}

            <li>
              <div className="dropdown">
                <Link to="/product">Product</Link>
                <div className="dropdown-content col-sm-4">
                  <li>
                    <Link to="/csm">Cyber School Manger</Link>
                  </li>
                  <li>
                    <Link to="/ccm">Cyber Club Manger</Link>
                  </li>
                  <li>
                    <Link to="/cim">Cyber Institute Manger</Link>
                  </li>
                  <li>
                    <Link to="/sm">Smart Board</Link>
                  </li>
                </div>
              </div>
            </li>
            {/* portfolio */}

            <li>
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
              <div className="dropdown">
                <Link to="/hiredeveloper">HireDeveloper</Link>
                <div className="dropdown-content col-sm-4">
                  <li>
                    <Link to="/full_stack_developer.php">
                      Hire Full Stack Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/angular_developer.php">
                      Hire Angular Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/backend_developer.php">
                      Hire Backend Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/mern_developer.php">Hire MERN Developer</Link>
                  </li>
                  <li>
                    <Link to="/dot_net_developer.php">
                      Hire Dot Net Developer
                    </Link>
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
                    <Link to="/magento_developer.php">
                      Hire Magento Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile_app.php">Hire Mobile App Developer</Link>
                  </li>
                </div>
              </div>
            </li>
            {/* Blog */}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {/* Contact */}
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
