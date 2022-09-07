import React from "react";

export const Program = (props) => {
  return (
    <div className="program-card">
      <div className="card-body">
        <img className="card-img" src={props.img}></img>
        <h2 className="card-title">{props.title}</h2>
        <span className="card-price">{props.price}</span>
        <button className="btn">Learn</button>
        <button className="btn">Buy</button>
      </div>
    </div>
  );
};
