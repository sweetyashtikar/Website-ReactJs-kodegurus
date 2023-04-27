import React from "react";
import { awrapper } from "../../dummydata";

const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container">
          <div className="row">
          {awrapper.map((val,key) => {
            return (
              <div key={key} className="col-3 box">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awrapper;
