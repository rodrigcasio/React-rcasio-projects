import React from 'react';
import {useState} from 'react';

// New Counter Button example with robust body block for the increment function
// Using funcional update 
// Giving React the recipe for the update.
//  React takes the current value *prevCount* and applies your recipe to get the correct result

const CounterButton2 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1); 
    }
    return(
        <>
            <h1>Functional state update</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </>
    );
}
export default CounterButton2;

/*
    prevCount : is a parameter that React provides to your function. it is guaranteed to be 
                most "up-to-date state value " at the time the update is processed

    By using 'prevCount', you ensure that each state update is based on the correct, sequential value,
        preventing the 'stale data' bugs that can occur with the direct state update method.
*/