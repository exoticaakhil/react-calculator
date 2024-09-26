import React, { useState } from 'react'
import ButtonContainer from './Buttoncontainer'
import Display from './display'

export default function Calculator(props) {
    const [input,setIn] = useState("")
    const [output,setOutput] = useState("")

    const readVal = (val) => {
        console.log(`btn clicked =`, val)
        switch(val){
            case "CE":
                setIn("")
                setOutput("")
                break;
            case "C":
                setIn("")
                break;
            case "<-":
                setIn(input.slice(0,-1))
                break;
            case "sqr":
                setOutput(input * input)        
                break;   
            case "sqrt":
                setOutput(Math.sqrt(input))
                break; 
            case "1/x":
                setOutput(1/input)
                break; 
            case "+/-":
                if(Math.sign(input) == -1) {
                    setIn(Math.abs(input)); // converts to positive
                } else {
                    setIn(-input); // converts to negative
                }
    
                break; 
            case "=":
                let res = eval(input)
                setOutput(res)
                break; 
            default:setIn(input + val)
        }
    }

    return (
        <div className="calc-container">
            <div className="title">
                <h1 className="txt">Calculator</h1>
            </div>

            <div className="calc">
                <Display inp={input} out={output} />
                <ButtonContainer readVal={readVal} />
            </div>
        </div>
    )
}

