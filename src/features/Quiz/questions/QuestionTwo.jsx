import React from "react";
import QuizTemplate from "../QuizTemplate";

import BmiCalc from "./BmiCalc";
import Navbar from "../../../core/Navbar/Navbar";

function QuestionTwo(props) {
  const questions = [
    { text: "Less then 18.5" },
    { text: "18.5-24.9" },
    { text: "24.9-30" },
    { text: "30-34.9" },
    { text: "35+" },
  ];
  return (
    <div className="bmi-questein">
      <Navbar />
      <QuizTemplate
        title="What is your BMI?"
        questions={questions}
        buttonLinkTo={"/questionthree"}
      />
      <BmiCalc />
    </div>
  );
}
export default QuestionTwo;
