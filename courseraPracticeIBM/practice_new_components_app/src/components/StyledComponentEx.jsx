import React from 'react';
import {useState} from 'react';

// Example of a component with CSS style applied by using JavaScript objects 

const StyledComponentEx = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
       setIsVisible(!isVisible);
    }
    // object name:
    const messageStyle = {
        display: isVisible ? 'block' : 'none',      // this is a conditional styling, dynamically sets the display property based on the value of isVisible.
        color: 'green',
        fontSize: '18px',
        marginTop: '10px',
    };

    return (
        <div>
            <h2>Toggle Message</h2>
            <button onClick={toggleVisibility}>{isVisible ? 'Hide Message' : 'Show Message'}</button>
            <p style={messageStyle}>This is a hidden message</p>
        </div>
    );
}
export default StyledComponentEx;