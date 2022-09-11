import React, { useState } from "react";
import { useEffect } from "react";
import QuizButton from "./QuizButton";
import "./css/templateQuestion.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToGrade } from "../../reducers/QuizGradeSlice";
import { change } from "../../reducers/SelectedProgramSlice";

import { Collapse, CssBaseline, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function QuizTemplate(props) {
  const dispatch = useDispatch();
  const quizGrade = useSelector((state) => state.quizGrade.QuizGrade);
  const selectedProgram = useSelector((state) => state.selectedProgram.value);

  const [value, setValue] = useState("-select-");
  const [quizResult, setQuizResult] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    switch (props.title) {
      case "How old are you?":
        //age switch
        switch (value) {
          case "0-20":
            dispatch(addToGrade(12));

            break;
          case "20-30":
            dispatch(addToGrade(20));

            break;
          case "30-40":
            dispatch(addToGrade(15));

            break;
          case "40-50":
            dispatch(addToGrade(10));

            break;
          case "50-60":
            dispatch(addToGrade(6));

            break;
          case "60+":
            dispatch(addToGrade(2));

            break;
          default:
            break;
        }
        break;

      case "What is your BMI?":
        //BMI switch
        switch (value) {
          case "Less then 18.5":
            dispatch(addToGrade(10));

            break;
          case "18.5-24.9":
            dispatch(addToGrade(20));

            break;
          case "24.9-30":
            dispatch(addToGrade(10));

            break;
          case "30-34.9":
            dispatch(addToGrade(5));

            break;
          case "35+":
            dispatch(addToGrade(2));

            break;

          default:
            break;
        }
        break;
      case "Training History":
        //Training History switch
        switch (value) {
          case "No History (never trained before)":
            dispatch(addToGrade(2));

            break;
          case "Minimal":
            dispatch(addToGrade(6));

            break;
          case "Average training":
            dispatch(addToGrade(10));

            break;
          case "Active (active exercise routine)":
            dispatch(addToGrade(14));

            break;
          case "Very active":
            dispatch(addToGrade(20));

            break;

          default:
            break;
        }
        break;

      case "What best matches your primary goal? (it’s okay if you have other goals too)":
        //Goal switch
        switch (value) {
          case "Improve my Strength + Muscle":
            dispatch(addToGrade(20));

            break;
          case "Improve my Strength":
            dispatch(addToGrade(14));

            break;
          case "Grow Big Muscles":
            dispatch(addToGrade(14));

            break;
          case "Lose Weight":
            dispatch(addToGrade(10));

            break;
          case "Keep A Healthy Lifestyle":
            dispatch(addToGrade(2));

            break;

          default:
            break;
        }
        break;
      case "Health and Lifestyle":
        //Goal switch
        switch (value) {
          case "Very healthy lifestyle":
            dispatch(addToGrade(20));

            break;
          case "Healthy lifestyle":
            dispatch(addToGrade(14));

            break;
          case "Minor health problems":
            dispatch(addToGrade(6));

            break;
          case "Major health problems":
            dispatch(addToGrade(10));

            break;
          case "Dead":
            alert("FUCKING SHIT A GHOST!!");

            break;

          default:
            break;
        }
        break;
    }
  };
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div className="question-body">
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedheight={50}
          >
            <h1 className="question-title">{props.title}</h1>
            <select
              className="question-select"
              value={value}
              onChange={handleChange}
            >
              <option className="question-option" value={""}>
                Select
              </option>
              {props.questions.map((question, index) => {
                return (
                  <option key={index} className="question-option">
                    {question.text}
                  </option>
                );
              })}
            </select>
            <br /> <br /> <br />
            {value !== "-select-" ? (
              <Link to={`${props.buttonLinkTo}`}>
                <QuizButton handleClick={() => handleClick()} />
              </Link>
            ) : (
              <QuizButton />
            )}
          </Collapse>
          <IconButton>
            <ExpandMoreIcon
              sx={{ color: "rgb(242, 163, 5)", fontSize: "2rem" }}
            />
          </IconButton>
        </div>
      </>
    </React.Fragment>
  );
}

export default QuizTemplate;
