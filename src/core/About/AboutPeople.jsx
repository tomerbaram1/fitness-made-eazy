import React from "react";
import "./aboutContainer.css";
import raniImg from "./img/rani.jpeg";
import sagiImg from "./img/sagi.jpeg";
import tomerImg from "./img/tomer.jpeg";
import Info from "./Info";
const AboutPeople = () => {
  return (
    <div className="aboutPeople">
      <Info
        header="Our People"
        firstPar="Gym and Fitness has a growing team of 60+ awesome superstars and we owe our success to each and every one of them!"
        secondPar="We have some pretty amazing people working with us, who hustle everyday to give you the best possible experience! You can find them in areas such as sales, marketing and e-commerce, customer service, warehousing, finance, human resources and management.

        If you're looking for an opportunity to grow at a company that's empowered, inclusive, and values great work—you should work with us."
      />

      <div className="people-img">
        <img alt="tomer" src={tomerImg} />
        <img alt="sagi" src={sagiImg} />
        <img alt="rani" src={raniImg} />
      </div>
    </div>
  );
};

export default AboutPeople;
