import React, {useRef} from 'react'

export default function Answers({answers, selectedAnswer, ansState, onSelect}) {
    const shuffleAnswers = useRef()
    // console.log('v1', selectedAnswer , 'v2', answers[0])
    // console.log(selectedAnswer === answers[0])
    // console.log(ansState)
    if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answers]
        shuffleAnswers.current.sort(()=> Math.random()-0.5)

    }
    // console.log("Shuffeled answer", shuffleAnswers)

  return (
    
    <ul id='answers'>
        {shuffleAnswers.current.map((answer, index)=>{
            const isSelected = selectedAnswer === answer
            
            let cssClasses = ''
            if(ansState == 'answered' && isSelected) cssClasses = 'selected';
            if((ansState === 'correct' || ansState === 'wrong') && isSelected) cssClasses = ansState
            return (
                <li className='answer' key={index}>
                    <button onClick={()=>onSelect(answer)} className={cssClasses} disabled={ansState !== ''}>{answer}</button>
                </li>
            )
        })}
    </ul>

  )
}
