import React from 'react';
import Marquee from 'react-fast-marquee';
import './Mark.css';
import img1 from '.././assects/images1/one.png'
import img2 from '.././assects/images1/two.png'
import img3 from '.././assects/images1/three.png'
import img4 from '.././assects/images1/four.png'
import img5 from '.././assects/images1/five.png'
import img6 from '.././assects/images1/six.png'
import img7 from '.././assects/images1/seven.png'
import img8 from '.././assects/images1/eight.png'
import img9 from '.././assects/images1/nine.png'
import img10 from '.././assects/images1/ten.png'

function Mark() {

  return (
    <div className="App">
      <div className="title">
        <h1>Our Technology Partner</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
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

export default Mark;
