import React, { useState } from 'react';
import '../cardCounter.css'
// example of using useState

function CardCounter() {
    const [count, setCount] = useState(0);
    // functions to increase count
    const increment = () => { setCount(count + 1); }
    const decrement = () => { setCount(count - 1); }
    
    return(
        <div className="card-container">
            <h2>Card counter </h2>
            <p>Count: {count}</p>
            <button className="increase-btn" onClick={increment}>Increase</button>
            <button className="decrease-btn" onClick={decrement}>Decrease</button>
        </div>
    );
}

export default CardCounter;