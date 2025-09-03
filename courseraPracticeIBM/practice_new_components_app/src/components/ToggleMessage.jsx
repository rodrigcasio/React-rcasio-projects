import React from 'react';
import {useState} from 'react';

// example of a component of a toggle message
// this compontent shows a hidden message and we use a button to hide the message.
const ToggleMessage = () => {
    const [isVisible , setIsValid] = useState(true);

    // function
    const toggleVisibility = () => {
        setIsValid(!isVisible);     // Toggle the value of isVisible
    }
    
    return (
        <>
            <h1>Toggle Message</h1>
            <button onClick={toggleVisibility}>{isVisible ? 'Hide message' : 'Show message'}</button>
            {isVisible && <p>This is a hidden message.</p>}    {/* needs to be true the isVisible to output the <p>*/}
        </>
    );
}
export default ToggleMessage;