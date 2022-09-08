
import React from "react";
import React from 'react'
import QuizButton from './QuizButton'

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
        <QuizButton />
    </div>
  );

}

export default QuizTemplate;
