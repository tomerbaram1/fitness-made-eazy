import React from "react";

const Info = (props) => {
  return (
    <div className="ourStory">
      <h1>{props.header}</h1>
      <span>
        <strong>{props.firstPar}</strong>
      </span>
      <br />
      <p>{props.secondPar}</p>
    </div>
  );
};

export default Info;
