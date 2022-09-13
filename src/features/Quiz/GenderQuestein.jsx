import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../core/Navbar/Navbar";
import { setIsWomanFalse, setIsWomanTrue } from "../../reducers/QuizGradeSlice";
import "./css/templateQuestion.css";

function GenderQuestein() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="gender-questein">
        <h1 className="question-title">What is your Gender?</h1>
        <br />
        <br />
        <Link to={"/questionOne"}>
          <button
            className="quiz-btn"
            onClick={() => dispatch(setIsWomanFalse())}
          >
            MALE
          </button>
        </Link>
        <br></br>
        <Link to={"/questionOne"}>
          <button
            className="quiz-btn"
            onClick={() => dispatch(setIsWomanTrue())}
          >
            FEMALE
          </button>
          <br /> <br /> <br />
        </Link>
        <br /> <br />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default GenderQuestein;
