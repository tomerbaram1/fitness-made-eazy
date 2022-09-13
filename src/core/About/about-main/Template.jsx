import React from "react";
import "./aboutMain.css";
const Template = (props) => {
  return (
    <div className="valueBox">
      <img alt="about" src={props.img} />

      <img alt="about" src={props.img} />

      <h3 style={{ color: "orange" }}>{props.title}</h3>
      <p>{props.par}</p>
    </div>
  );
};

export default Template;
