import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change, reset } from "../../reducers/SelectedProgramSlice";

export const Program = (props) => {
  const selectedProgram = useSelector((state) => state.selectedProgram.value);
  const dispatch = useDispatch();
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
