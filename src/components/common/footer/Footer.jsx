import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>KODEGURUS</h1>
            <span>Build Innovate & Inspire</span>
            <p>We Build, We Create Digital Products That Makes Sense.</p>
            <p>
              In the age of digital transformation, we help thousands of growing
              businesses to achieve their goals & success.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link ">
            <h1> Our Services</h1>

            <ul>
              <li class="animate">
                <a href="customer_software.php">Custom Software Development</a>
              </li>
              <li class="animate">
                <a href="product_development.php">Product Development</a>
              </li>
              <li class="animate">
                <a href="web_application_development.php">
                  Web Application Development
                </a>
              </li>
              <li class="animate">
                <a href="mobile_app_development.php">Mobile App Development</a>
              </li>
              <li class="animate">
                <a href="ecommerce_development.php">eCommerce Development</a>
              </li>

              <li class="animate">
                <a href="fintech.php">Fintech Development</a>
              </li>
              <li class="animate">
                <a href="erp.php">ERP &amp; CRM Implementation</a>
              </li>

              <li class="animate">
                <a href="ecommerce_development.php">eCommerce Development</a>
              </li>
              <li class="animate">
                <a href="fintech.php">Fintech Development</a>
              </li>
              <li class="animate">
                <a href="erp.php">ERP &amp; CRM Implementation</a>
              </li>
              <li class="animate">
                <a href="qa_software.php">QA / Software Testing</a>
              </li>
            </ul>
          </div>
          <div className="box link">
            <h4> Hire Our Experts</h4>
            <ul>
              <li>
                <a href="full_stack_developer.php">Hire Full Stack Developer</a>
              </li>
              <li>
                <a href="angular_developer.php"> Hire Angular Developer</a>
              </li>
              <li>
                <a href="backend_developer.php">Hire Backend Developer</a>
              </li>
              <li>
                <a href="mern_developer.php">Hire MERN Developer</a>
              </li>
              <li>
                <a href="mean_developer.php">Hire MEAN Developer</a>
              </li>
              <li>
                <a href="dot_net_developer.php">Hire Dot Net Developer</a>
              </li>
              <li>
                <a href="wordpress_developer.php">Hire WordPress Developer</a>
              </li>
              <li>
                <a href="ui_ux.php">Hire UI/UX Dessign Expert</a>
              </li>
              <li>
                <a href="laravel.php">Hire Laravel Developer</a>
              </li>
              <li>
                <a href="magento_developer.php">Hire Magento Developer</a>
              </li>
              <li>
                <a href="mobile_app.php">Hire Mobile App Developer</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Kodegurus
        </p>
      </div>
    </>
  );
};

export default Footer;
