import QuizButton from '../QuizButton'
import React from "react";
import QuizTemplate from "../QuizTemplate";

function QuestionFive() {
  return (
    <div>
      <QuizTemplate
        title="Health and Lifestyle"
        questions={[
          { text: "Very healthy lifestyle" },
          { text: "Healthy lifestyle" },
          { text: "Minor health problems" },
          { text: "Major health problems" },
          { text: "Dead" },
        ]}
      />
      <QuizButton />
    </div>
  );
}
export default QuestionFive;
