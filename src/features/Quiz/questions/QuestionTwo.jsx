import React from 'react'
import QuizButton from '../QuizButton'
import { BrowserRouter as Router, Link } from "react-router-dom";






function QuestionTwo() {
    return (
        <div>
            <Link to={"/questionthree"}><QuizButton /></Link>
        </div>
    )
}

export default QuestionTwo