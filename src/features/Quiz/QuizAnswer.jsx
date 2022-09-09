import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { change } from "../../reducers/SelectedProgramSlice";
import "./css/templateQuestion.css";
const QuizAnswer = () => {
  const selectedProgram = useSelector((state) => state.selectedProgram.value);
  const quizGrade = useSelector((state) => state.quizGrade.QuizGrade);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (quizGrade.IsWoman) {
      case false:
        switch (true) {
          case quizGrade.Grade < 20:
            dispatch(change("Fundementals"));
            break;
          case quizGrade.Grade < 40:
            dispatch(change("Crossfit"));
            break;
          case quizGrade.Grade < 60:
            dispatch(change("Calisthenics"));
            break;
          case quizGrade.Grade < 80:
            dispatch(change("Full Body Workout"));
            break;
          case quizGrade.Grade < 105:
            dispatch(change("Power Lifting"));
            break;
          default:
            dispatch(change("Power Lifting"));
            break;
        }
        break;
      default:
        switch (true) {
          case quizGrade.Grade < 25:
            dispatch(change("Women's Specialization Program"));
            break;
          case quizGrade.Grade < 50:
            dispatch(change("Core"));
            break;
          case quizGrade.Grade < 75:
            dispatch(change("Crossfit"));
            break;
          case quizGrade.Grade < 105:
            dispatch(change("Full Body Workout"));
            break;
          default:
            dispatch(change("Full Body Workout"));
            break;
        }
        break;
    }
  }, []);
  return (
    <div className="answer-page">
      <div className="answer-card">
        <h1 className="question-title" style={{ color: "white" }}>
          Congratulations!
        </h1>
        <span style={{ color: "orange" }}>We have found your workout 😇 </span>
        <br />
        <br />
        <br />
        <h1 style={{ color: "white" }}>
          The Best Workout For You Is <br /> {selectedProgram} 👊
        </h1>
        <br />
        <br />
        <Link to={"/Learn"}>
          <button className="quiz-btn">Get Workout</button>
        </Link>
      </div>
    </div>
  );
};
export default QuizAnswer;
