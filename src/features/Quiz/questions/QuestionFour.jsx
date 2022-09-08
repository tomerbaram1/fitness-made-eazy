import React from 'react'
import QuizButton from '../QuizButton'
import { BrowserRouter as Router, Link } from "react-router-dom";





function QuestionFour() {
    return (
        <div>
            <Link to={"/QuestionFive"}><QuizButton /></Link>
        </div>
    )
}

export default QuestionFour