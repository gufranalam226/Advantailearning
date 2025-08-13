import React, {useEffect, useState} from 'react'
export default function Progress({timeout, onTimeout}) {
    useEffect(()=>{
        const timer = setTimeout(onTimeout, timeout)
        return ()=>{
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(()=>{
        const timeInterval =  setInterval(()=>{
            setRemainingTime((prev) => prev-100)
        }, 100)

       return ()=>{
        clearInterval(timeInterval)
       }
        
    }, [])
    
  return (
    <progress id='question-time' value={remainingTime} max={timeout} >
        
      
    </progress>
  )
}
