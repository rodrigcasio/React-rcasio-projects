import {useState} from 'react';
import React from 'react';

// example of a component that uses conditional rendering to display the contents of an array in a list <li> tag elements
const ConditionalArrayEx = () => {
    const [items, setItems] = useState(['React', 'Vue', 'Angular', 'Vanilla ']);
    
    return (
        <div>
            <h1>Front-end Languages</h1>
            {items > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li id={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No Font-end languages are avaiable</p>
            )}
        </div>
    );   
}
export default ConditionalArrayEx;