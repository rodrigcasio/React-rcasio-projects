import React from 'react';
import {useState} from 'react';

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
            <h1>Toggle Message</h1>
            <button onClick={toggleVisibility}>{isVisible ? 'Hide Message' : 'Show Message'}</button>
            <p style={messageStyle}>This is a hidden message</p>
        </div>
    );
}
export default StyledComponentEx;

    // Explanation of using the CSS property 'display: 'block' or 'none';
// Example of a component with CSS style applied by using JavaScript objects 
// the property display in css, when is set to 'block' the element behaves as a block-level element
// when block, take up a full available width and their parent container
// Basically, it controls the layout behavior of an element on a web page, depending display: 'block' or 'none'.
// it dictates how an element is rendered and interacts with the document flow