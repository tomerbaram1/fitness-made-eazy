import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import "./css/templateQuestion.css";
import { Button } from "@mui/material";
import Navbar from "../../core/Navbar/Navbar";
import Footer from "../../core/Footer/Footer";
import { useDispatch } from "react-redux";
import { setIsWomanFalse, setIsWomanTrue } from "../../reducers/QuizGradeSlice";
function GenderQuestein() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="gender-questein">
        <h1 className="question-title">What is your Gender?</h1>

        <Link to={"/questionOne"}>
          <button
            className="quiz-btn"
            onClick={() => dispatch(setIsWomanFalse())}
          >
            MALE
          </button>
        </Link>

        <Link to={"/questionOne"}>
          <button
            className="quiz-btn"
            onClick={() => dispatch(setIsWomanTrue())}
          >
            FEMALE
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default GenderQuestein;
