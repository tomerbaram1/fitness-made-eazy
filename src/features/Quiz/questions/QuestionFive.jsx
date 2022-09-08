import React from "react";
import QuizTemplate from "../QuizTemplate";

function QuestionFive() {
  return (
    <div>
      <QuizTemplate
        title="Health and Lifestyle"
        question={[
          { text: "Very healthy lifestyle" },
          { text: "Healthy lifestyle" },
          { text: "Minor health problems" },
          { text: "Major health problems" },
          { text: "Dead" },
        ]}
      />
    </div>
  );
}

export default QuestionFive;
