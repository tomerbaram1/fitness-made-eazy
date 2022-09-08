import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { change, reset } from "../../reducers/SelectedProgramSlice";

export const Program = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="program-card">
      <div className="card-body">
        <img className="card-img" src={props.img}></img>
        <h2 className="card-title ">{props.title}</h2>
        <span className="card-price">{props.price}</span>
        <Link to="/Learn">
          <button className="btn" onClick={props.handleClick}>
            Learn
          </button>
        </Link>
        <button className="btn">Buy</button>
      </div>
    </div>
  );
};
