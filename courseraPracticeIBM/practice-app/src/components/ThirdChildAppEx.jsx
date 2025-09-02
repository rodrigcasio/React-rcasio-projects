import React from 'react'
import { useState } from 'react'

// third example of child component recieving data from App component (Parent)

const ThirdChildAppEx = (props) => {
    const [showIncrease, setShowIncrease] = useState(false)    // showIncrease == false (default value)

    const changeIncrease  = () => {
        setShowIncrease(!showIncrease);   // changes to true
    }

    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.employeeId}</h2>
            <h2>{props.dept_id}</h2>
            <div>{props.dept_name}</div>
            <button onClick={changeIncrease}>Click here to {showIncrease ? 'Hide' : 'Show'} the yearly increment</button>
            {showIncrease && <div>{props.increase}</div>}
        </>
    );
}
export default ThirdChildAppEx;

/*
    the changeIncrease can be an inline function like this too
    <button onClick={() => setShowIncrease(!showIncrease)}> 
    
    this could also set the value of of showIncrease to true therefore I will be show 'hide' the button.

    ---

    the line 
    {showIncrease &&  <div>{props.increase}</div>} 

    this is using the conditional double AND expression for conditional rendering 

    {showIncrese && <div>{props.increase}</div>}
    if showIncrease is true, the increase data will be displayed within a <div> element!
    
 */