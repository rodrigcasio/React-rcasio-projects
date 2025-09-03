import React from 'react';
import { useState } from 'react';
// this is not a toggle button
// Component example of using states to change a name with a button 
// Button disables once the button is clicked, and leaves the value of true 

const StateManagement = () => {
    const [name, setName] = useState('John');
    const [buttonClicked, setButtonClicked] = useState(false);

    //functions
    const updateName = () => {
        setName('John Mayer');  // changing the name
        setButtonClicked(true); // setting buttonClicked to true after updating name
    }
    
    return(
        <>
            <h1>State Management using setState</h1>
            <p>The name is {name}</p>
            <button onClick={updateName} disabled={buttonClicked}>Click to update name</button>
        </>
    );
}
export default StateManagement;