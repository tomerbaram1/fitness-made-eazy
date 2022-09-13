import React from "react";
import Navbar from "../../../core/Navbar/Navbar";
import QuizTemplate from "../QuizTemplate";

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
