import React from "react";
import Navbar from "../../../core/Navbar/Navbar";
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
      <Navbar />
      <QuizTemplate
        title="Health and Lifestyle"
        buttonLinkTo={"/quizAnswer"}
        questions={questions}
      />
    </div>
  );
}
export default QuestionFive;
