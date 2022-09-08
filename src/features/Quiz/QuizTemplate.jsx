import React from "react";
import QuizButton from "./QuizButton";
import "./css/templateQuestion.css";

function QuizTemplate(props) {
  return (
    <div className="question-body">
      <h1 className="question-title">{props.title}</h1>
      <select className="question-select">
        {props.questions.map((question, index) => {
          return (
            <option key={index} className="question-option">
              {question.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default QuizTemplate;
