import React, { useState } from 'react'
import Progress from './Progress'
import Answers from './Answers'
import questions from '../questions'



export default function Questions({questionText,index, answers, onSelectAnswer, selectedAnswer, ansState, onTimeout}) {
 
  let timer = 10000;
  



  return (
    <div id='question'>
        <Progress  timeout={timer} onTimeout={onTimeout} mode={ansState}/>
        <h2 id='question-overview'>{questionText}</h2>
        <Answers 
            answers={answers}
            selectedAnswer = {selectedAnswer}
            ansState={ansState}
            onSelect={onSelectAnswer}
        />
    </div>
  )
}
