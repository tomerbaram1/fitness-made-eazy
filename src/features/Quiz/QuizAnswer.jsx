import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { change } from "../../reducers/SelectedProgramSlice";
import QuizButton from "./QuizButton";

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
    <div>
      <h1 style={{ color: "white" }}>
        The Best Workout For You Is {selectedProgram}
      </h1>
      <Link to={"/Learn"}>
        <QuizButton>Get Workout</QuizButton>
      </Link>
    </div>
  );
};
export default QuizAnswer;
