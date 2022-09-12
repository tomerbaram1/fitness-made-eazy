import React from "react";
import QuizTemplate from "../QuizTemplate";
import Navbar from "../../../core/Navbar/Navbar";

function QuestionOne() {
  const questions = [
    { text: "0-20" },
    { text: "20-30" },
    { text: "30-40" },
    { text: "40-50" },
    { text: "50-60" },
    { text: "60+" },
  ];
  return (
    <div>
      <Navbar />
      <QuizTemplate
        title="How old are you?"
        questions={questions}
        buttonLinkTo="/questionTwo"
      />
    </div>
  );
}

export default QuestionOne;
