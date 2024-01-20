import React from "react";
import { useAuth } from "../store/auth";
const Service = () => {
  const { services } = useAuth();
  console.log(services);

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services && services.map((curElem,index)=>{
           
            return (
              <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="./src/images/design.png"
                  alt="service info"
                  width="200"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{curElem.provider}</p>
                  <p>{curElem.price}.00 रु</p>
                </div>
  
                <h2>{curElem.service}</h2>
                <p>{curElem.description}</p>
              </div>
            </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Service;
