import React from "react";
import "./programs.css";
import Navbar from "../../core/Navbar/Navbar";
import Footer from "../../core/Footer/Footer";
import { Program } from "./Program";
import Questeins from "./Questeins";
import AboutHeader from "../../core/About/AboutHeader";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../reducers/SelectedProgramSlice";

export const Programs = (props) => {
  const dispatch = useDispatch();

  const handleClick = (workout) => {
    console.log(workout);
    dispatch(change(workout));
  };

  return (
    <div className="programs-container">
      <Navbar className="programs-nav" />
      <br /> <br /> <br /> <br /> <br />
      <div className="programs">
        <Program
          title="Power Lifting"
          img="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg"
          price="200$"
          handleClick={() => handleClick("Power Lifting")}
        />
        <Program
          title="Calisthenics"
          img="https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_1280.jpg"
          price="100$"
          handleClick={() => handleClick("Calisthenics")}
        />
        <Program
          title="Fundementals"
          img="https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_1280.jpg"
          price="100$"
          handleClick={() => handleClick("Fundementals")}
        />
        <Program
          title="Women's Specialization Program"
          img="https://cdn.pixabay.com/photo/2015/07/02/10/21/training-828715_1280.jpg"
          price="100$"
          handleClick={() =>
            handleClick("FundementaWomen's Specialization Programls")
          }
        />
        <Program
          title="Full Body Workout"
          img="https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995_1280.jpg"
          price="200$"
          handleClick={() => handleClick("Full Body Workout")}
        />
        <Program
          title="Lower Body Workout"
          img="https://cdn.pixabay.com/photo/2017/04/20/08/35/sport-2245029_1280.jpg"
          price="200$"
          handleClick={() => handleClick("Lower Body Workout")}
        />
      </div>
      <br />
      <AboutHeader />
      <Questeins />
      <Footer />
    </div>
  );
};
