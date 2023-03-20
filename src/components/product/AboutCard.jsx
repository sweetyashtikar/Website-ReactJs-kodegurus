import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Heading subtitle="India’s Top-notch ReactJS Development Services" />
            <div className="items">
              <p>
                Cybrain Software Solutions is the most valued ReactJS
                development company in India. We rely on fine craftsmanship and
                integrity to provide flawless services to build web and mobile
                applications that can elevate your business in the competitive
                market effectively and efficiently. React JS is of prime
                importance in the present technology that has invaded the world
                of web pages. We have worked for some of the industry experts in
                developing and producing some of the profound React JS software
                solutions. If you are looking for a React JS development company
                in India, Cybrain is the right choice. We have developed a
                secure, fast, responsive, and scalable application. Our team has
                experience building web and desktop applications using React.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
