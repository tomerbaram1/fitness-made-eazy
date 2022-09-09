import React, { useState } from "react";
import QuizTemplate from "../QuizTemplate";
import QuizButton from "../QuizButton";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Footer from "../../../core/Footer/Footer";

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
      <QuizTemplate
        title="What is your BMI?"
        questions={questions}
        buttonLinkTo={"/questionthree"}
      />
    </div>
  );
}
export default QuestionTwo;
