import React from 'react'
import quizCompletedImg from '../assets/quiz-complete.png'
import Questions from '../questions'

export default function Summary({userAnswers}) {
    const skippedAnswer = userAnswers.filter((answer => answer == null))
    const correctAnswer = userAnswers.filter((answer, index) => answer == Questions[index].answers[0])
    const skippedShare = Math.round((skippedAnswer.length/userAnswers.length)*100) || 0
    const CorrectShare = Math.round((correctAnswer.length/userAnswers.length)*100) || 0
    const wrongShare = 100 - CorrectShare - skippedShare || 0

  return (
    <div id='summary'>
        <img src={quizCompletedImg} alt="Quiz completed" />
        <h2>QUIZ COMPLETED</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{skippedShare}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{CorrectShare}%</span>
                <span className='text'>Correctly Answered</span>
            </p>
            <p>
                <span className='number'>{wrongShare}%</span>
                <span className='text'>Incorrectly Answered</span>
            </p>
        </div>
        <ol>
            {
                userAnswers.map((answer, index)=>{
                    let cssClass = 'user-answer'
                    if(answer == null){
                        cssClass += ' skipped'
                    }
                    else if(answer == Questions[index].answers[0]){
                        cssClass += ' correct'
                    }
                    else{
                        cssClass += ' wrong'
                    }
                    return (
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className='question'>{Questions[index].text}</p>
                            <p className={cssClass}>{answer ?? "Skipped"}</p>
                        </li>
                    )
                })
            }
        </ol>
    </div>
)
}
