import React from "react";

function QuizTemplate(props) {
  return (
    <div className="question-body">
      <h1 className="question-title">{props.title}</h1>
      <select className="question-select">
        {props.questions.map((question, index) => {
          <div key={index}>
            <option className="question-option">{question.text}</option>
          </div>;
        })}
      </select>
      <button></button>
    </div>
  );
}

export default QuizTemplate;
