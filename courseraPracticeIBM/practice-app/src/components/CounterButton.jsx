import React from 'react'
import { useState } from 'react'

const CounterButton = () => {
    const [count, setCount] = useState(0);
    
    const changeCount = () => {
        (setCount(count + 1));
    }
    return(
        <>
            <button onClick={changeCount}>Count is {count}</button>
        </>
    );
}
export default CounterButton;