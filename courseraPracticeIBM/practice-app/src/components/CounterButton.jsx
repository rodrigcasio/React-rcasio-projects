import React from 'react'
import { useState } from 'react'
import './../App.css'

const CounterButton = () => {
    const [count, setCount] = useState(0);
    
    const changeCount = () => {
        (setCount(count + 1));
    }
    return(
        <>
            <div className="card">
                <button onClick={changeCount}>Count is {count}</button>
            </div>
        </>
    );
}
export default CounterButton;

/*
    Using inline function:

    Another way to add the function for the event.

    
    () => : event handler
     (count) => count + 1 : the inner arrow function, react provides the -current state value- as an argument to that function (in this case, -count-)

    The full expression : () => setCount((count) => count + 1) can be read as:

"When the button is clicked, execute a function. This function will call setCount and pass it another function. 
The inner function will receive the current count value from React, and it will return the new count value,
 which is count + 1."
*/