import "./aboutContainer.css";
import React from "react";
import Info from "./Info";
import AboutMain from "./about-main/AboutMain";
import AboutPeople from "./AboutPeople";

export default function AboutContainer(props) {
  return (
    <div id="aboutPage" className="container">
      <div className="text">
        <div className="text-header">
          <h1>
            The greatest <span className="power">power</span> is knowledge and
            knowledge is our <span className="power">POWER</span>
          </h1>
        </div>

        <AboutMain />
        {/* <video className="videoAbout" src={videoAbout} autoPlay loop muted /> */}

        <Info
          header="Our Story"
          firstPar="Gym and Fitness was founded in 2002 as a family owned and operated
         business specialising in supplying high-quality gym equipment at
         great prices."
          secondPar="Instead of being just another gym equipment retailer, our founders wanted to be the best in the industry and set their minds to doing so! Over the last two decades Gym and Fitness has grown into one of Australia’s largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives."
        />
        <hr className="aboutHR"></hr>
        <br />
        <AboutPeople />
        <br />
      </div>
    </div>
  );
}
