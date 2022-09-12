import React from "react";
import QuizTemplate from "../QuizTemplate";
import Navbar from "../../../core/Navbar/Navbar";
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
      <Navbar />
      <QuizTemplate
        title="Training History"
        questions={questions}
        buttonLinkTo={"/questionFour"}
      />
    </div>
  );
}

export default QuestionThree;
