import { useState } from "react"

export default function UserInput({onChange,userInput}){
   
    return(
        <div id="user-input">
            <section className="input-group">
                <p>
                <label>initial investment</label>
                <input type="number" 
                required 
                value={userInput.initialInvestment}
                onChange={(event)=>onChange('initialInvestment',event.target.value)}></input>
                </p>
                <p>
                <label>annual investment</label>
                <input type="number" 
                required
                value={userInput.annualInvestment}
                onChange={(event)=>{onChange('annualInvestment',event.target.value)}} ></input>
                </p>
            </section>
            <section className="input-group">
                <p>
                <label>expected return</label>
                <input type="number"
                 required
                 value={userInput.expectedReturn}
                 onChange={(event)=>{onChange('expectedReturn',event.target.value)}}></input>
                </p>
                <p>
                <label>duration</label>
                <input type="number"
                 required
                 value={userInput.duration}
                 onChange={(event)=>{onChange('duration',event.target.value)}}></input>
                </p>
                
            </section>
        </div>
    )
}