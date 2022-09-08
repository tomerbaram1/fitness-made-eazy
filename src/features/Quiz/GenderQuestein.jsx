import { BrowserRouter as Router, Link } from "react-router-dom";
import React from 'react'
import QuizButton from './QuizButton'






function GenderQuestein() {
    return (
        <div>

            <Link to={"/questionOne"}><QuizButton /></Link>

        </div>
    )
}

export default GenderQuestein