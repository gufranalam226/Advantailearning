import {useState} from 'react'
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInut] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration : 10,
  })
  const inputIsValid = userInput.duration>=1;



  function handleChange(inputIdentifier, newValue){
    setUserInut(prevUserInput=>{
      return {
          ...prevUserInput,
          [inputIdentifier] :+newValue
      }
  })
}
  return (
    <>
    <Header />
    <UserInput onChangeInput = {handleChange} userInput={userInput}/>
    {inputIsValid ?<Result input={userInput}/>:<p className='center'>Please enter duration grether then 0</p>}
    </>
  )
}

export default App
