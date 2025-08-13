import react, {PureComponent, useState} from 'react'

export default function UserInput({onChangeInput, userInput}){
    
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required 
                        onChange={(e)=>onChangeInput('initialInvestment' , e.target.value)}
                        value={userInput.initialInvestment}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required  
                        onChange={(e)=>onChangeInput('annualInvestment' , e.target.value)}
                        value={userInput.annualInvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        onChange={(e)=>onChangeInput('expectedReturn' , e.target.value)} 
                        value={userInput.expectedReturn}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        onChange={(e)=>onChangeInput('duration' , e.target.value)} 
                        value={userInput.duration}/>
                </p>
            </div>
        </section>
    )
}