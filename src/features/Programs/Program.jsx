import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { change, reset } from "../../reducers/SelectedProgramSlice";
import { addToMyCart } from "../../reducers/MyCartSlice";
import { Button } from "@mui/material";

export const Program = (props) => {
  return (
    <div className="program-card">
      <div className="card-body">
        <img className="card-img" src={props.img}></img>
        <h2 className="card-title ">{props.title}</h2>
        <div className="titleAndButtonsContainer">
          <h3 className="card-price">{props.price}</h3>
          <Link to="/Learn">
            <Button
              className="btn program-card-button"
              onClick={props.handleClick}
            >
              Read More
            </Button>
          </Link>
          <div>
            <Button
              onClick={props.handleBuy}
              className="btn program-card-button"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
