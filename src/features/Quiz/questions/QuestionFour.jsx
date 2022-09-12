import React from "react";
import QuizTemplate from "../QuizTemplate";
import Navbar from "../../../core/Navbar/Navbar";
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
      <Navbar />
      <QuizTemplate
        title="What best matches your primary goal? "
        questions={questions}
        buttonLinkTo={"/QuestionFive"}
      />
    </div>
  );
}

export default QuestionFour;
