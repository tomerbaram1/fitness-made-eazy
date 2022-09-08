import React from 'react'
import QuizButton from '../QuizButton'
import { BrowserRouter as Router, Link } from "react-router-dom";





function QuestionThree() {
    return (
        <div>
            <Link to={"/questionFour"}><QuizButton /></Link>
        </div>
    )
}

export default QuestionThree