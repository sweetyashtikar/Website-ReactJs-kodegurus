import React from "react";
import '../pages/angular.css'
const Angular = () => {
  return (
    <div>
      <section className="first__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="image__first">
                <img
                  src="img/angular_banner.png"
                  className=" w-100 img-responsive"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <div className="text__first">
                <h3>Leading Angular Development Company </h3>
                <p>
                  As a leading AngularJS development company in India, we
                  provide high-quality AngularJS development services for web
                  and mobile platforms. Take full advantage of AngularJS
                  technology to create applications that provide a pleasant user
                  experience and high performance. Utilize the AngularJS era to
                  build applications with excellent performance and gratifying
                  user interfaces.{" "}
                </p>
              </div>
              <div className="row flex_align">
                <div className="col-sm-6">
                  <div className="service_left_section">
                    <h2>Key Benefits To Choose Angular </h2>
                    <p>
                      Here are the reasons why you should use Angular for your
                      next web application development project.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service_right_section">
                    <ul>
                      <li>Simple &amp; Expressive</li>
                      <li>Speed &amp; Performance </li>
                      <li>Flexible Development </li>
                      <li>Effortless Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Angular;
