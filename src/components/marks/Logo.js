import React from "react";
import Marquee from "react-fast-marquee";
import './Mark.css'
import img1 from '../assects/images2/img1.png'
import img2 from '../assects/images2/img2.png'
import img3 from '../assects/images2/img3.png'
import img4 from '../assects/images2/img4.png'
import img5 from '../assects/images2/img5.png'
import img6 from '../assects/images2/img6.png'
import img7 from '../assects/images2/img7.png'
import img8 from '../assects/images2/img8.png'
import img9 from '../assects/images2/img9.png'
import img10 from '../assects/images2/img10.png'

function Logo() {
  return (
    <div className="App">
      <div className="title">
        <h1>Our Expertise</h1>
        <p>
          With our expertise in 40+ technology stacks, Cybrain Software
          Solutions helps businesses from multiple industries stay ahead of
          their competitors. As a top IT company in India, we’ve excelled in our
          experience in a wide range of industries to deliver insightful ideas
          and truly beneficial solutions to our customers.
        </p>
      </div>

      <div>
        <Marquee direction="left" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Logo;
