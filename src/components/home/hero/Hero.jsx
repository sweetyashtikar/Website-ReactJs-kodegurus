import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="text-area">
            <h1 className="main-heading">WELCOME TO KODEGURUS</h1>
            <h3 className="sub-heading">
              We Build, We Create Digital Products
              <br /> That Makes Sense
            </h3>
            <div className="buttons d-flex">
            <button className="primary-btn btn firstbtn">
                GET STARTED <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="bannerbtn btn">
                HIRE DEVELOPER <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
