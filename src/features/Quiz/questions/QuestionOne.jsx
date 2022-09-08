import React from "react";
import QuizTemplate from "../QuizTemplate";

function QuestionOne(props) {
  return (
    <div>
      <QuizTemplate
        title="How old are you?"
        question={[
          { text: "0-20" },
          { text: "20-30" },
          { text: "30-40" },
          { text: "40-50" },
          { text: "50-60" },
          { text: "60+" },
        ]}
      />
    </div>
  );
}

export default QuestionOne;
