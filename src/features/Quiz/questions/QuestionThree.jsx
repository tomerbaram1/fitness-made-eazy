import React from "react";
import QuizTemplate from "../QuizTemplate";

function QuestionThree(props) {
  return (
    <div>
      <QuizTemplate
        title="Training History"
        question={[
          { text: "No History (never trained beofore)" },
          { text: "Minimal" },
          { text: "Average training" },
          { text: "Active (active exercise routine)" },
          { text: "Very active" },
        ]}
      />
    </div>
  );
}

export default QuestionThree;
