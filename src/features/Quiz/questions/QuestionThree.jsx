import React from "react";
import QuizTemplate from "../QuizTemplate";
import QuizButton from "../QuizButton";
import { BrowserRouter as Router, Link } from "react-router-dom";

function QuestionThree(props) {
  const questions = [
    { text: "No History (never trained before)" },
    { text: "Minimal" },
    { text: "Average training" },
    { text: "Active (active exercise routine)" },
    { text: "Very active" },
  ];
  return (
    <div>
      <QuizTemplate
        title="Training History"
        questions={questions}
        buttonLinkTo={"/questionFour"}
      />
    </div>
  );
}

export default QuestionThree;
