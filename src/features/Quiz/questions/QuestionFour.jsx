import QuizButton from "../QuizButton";
import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import QuizTemplate from "../QuizTemplate";

function QuestionFour() {
  const questions = [
    { text: "Improve my Strength + Muscle" },
    { text: "Improve my Strength" },
    { text: "Grow Big Muscles" },
    { text: "Lose Weight" },
    { text: "Keep A Healthy Lifestyle" },
  ];
  return (
    <div>
      <QuizTemplate
        title="What best matches your primary goal? (it’s okay if you have other goals too)"
        questions={questions}
      />
      <Link to={"/QuestionFive"}>
        <QuizButton />
      </Link>
    </div>
  );
}

export default QuestionFour;
