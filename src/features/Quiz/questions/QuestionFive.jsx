import QuizButton from "../QuizButton";
import React from "react";
import QuizTemplate from "../QuizTemplate";

function QuestionFive() {
  const questions = [
    { text: "Very healthy lifestyle" },
    { text: "Healthy lifestyle" },
    { text: "Minor health problems" },
    { text: "Major health problems" },
    { text: "Dead" },
  ];
  return (
    <div>
      <QuizTemplate title="Health and Lifestyle" questions={questions} />
      <QuizButton />
    </div>
  );
}
export default QuestionFive;
