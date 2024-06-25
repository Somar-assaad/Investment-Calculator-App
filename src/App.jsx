import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
  const [userInput,setuserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});
function handleChange(inputIdentifier,newValue){
    setuserInput((prev)=>{
        return (
            {...prev,
            [inputIdentifier]:+newValue
        }
        )
    })
}
  return (
    <>
    <Header/>
    <UserInput onChange={handleChange} userInput={userInput}/>
    <Result input={userInput}/>
    </>
    )
}

export default App
