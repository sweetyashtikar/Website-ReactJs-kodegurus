import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.3617818219873!2d76.7244497144601!3d30.680095495220016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefc309419bbb%3A0xfc803fdbf553e8ed!2sKodegurus!5e0!3m2!1sen!2sin!4v1667020877342!5m2!1sen!2sin" ';
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  Sebiz Square 5th floor,IT Park Sector 67, SAS Nagar Mohali,
                  160062 India
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@gmail.com.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +91 12 3456 1740</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
