import React from 'react'
import quizIcon from '../assets/quiz-logo.png'
export default function Header() {
  return (
    <header>
        <img src={quizIcon} alt="Quiz Icon" />
        <h1>REACTQUIZ</h1>
      
    </header>
  )
}
