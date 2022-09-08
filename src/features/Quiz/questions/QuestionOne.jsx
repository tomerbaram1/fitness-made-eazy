import React from 'react'
import QuizButton from '../QuizButton'
import { BrowserRouter as Router, Link } from "react-router-dom";





function QuestionOne() {
    return (
        <div>
            <Link to={"/questionTwo"}><QuizButton /></Link>
        </div>
    )
}

export default QuestionOne