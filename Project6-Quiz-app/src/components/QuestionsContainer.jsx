import React, { useCallback, useEffect, useRef, useState } from 'react'
import questions from '../questions'
import Progress from './Progress';
import Answers from './Answers';
import Questions from './Questions';
import Summary from './Summary';


let TIMER = 10000;


export default function QuestionsContainer() {
    const [ansState, setAnsState] = useState('')
    const [userAnswers, setUserAnswers] = useState([])
    const selectedQuestionIndex = ansState === ''? userAnswers.length : userAnswers.length -1;
    const isCompleted = selectedQuestionIndex === questions.length
    // console.log( "answer ---  ",questions[selectedQuestionIndex].answers[0])
    // console.log("User ans --- " , userAnswers[selectedQuestionIndex])

    // console.log(userAnswers[selectedQuestionIndex] === questions[selectedQuestionIndex].answers[0])
    
    function handleButtonClick(answer){
        setAnsState('answered')
        setUserAnswers((prevAnswer)=>[ ...prevAnswer, answer])

        setTimeout(()=>{
            if(answer === questions[selectedQuestionIndex].answers[0]){
                setAnsState('correct')
            }
            else{
                setAnsState('wrong')
            }
            setTimeout(()=>{
                setAnsState('')
            }, 1500)
        },800)
        
    }

    
    
    const handleTimeout = useCallback(function handleTimeout(){
        setUserAnswers((prevAnswer)=>[ ...prevAnswer, null])
    }, [])
    if(isCompleted){
        return (
            <Summary userAnswers={userAnswers}/>
        )
    }
    
    // console.log(userAnswers[userAnswers.length - 1])
  return (
    <section id='quiz'>
        <Questions 
            key={selectedQuestionIndex}
            index ={selectedQuestionIndex}
            questionText={questions[selectedQuestionIndex].text} 
            answers={questions[selectedQuestionIndex].answers} 
            onSelectAnswer={handleButtonClick}
            selectedAnswer = {userAnswers[userAnswers.length - 1]}
            ansState={ansState}
            onTimeout={handleTimeout}
        />
        
        
    </section>
  )
}
