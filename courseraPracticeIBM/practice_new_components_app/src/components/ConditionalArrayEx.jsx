import {useState} from 'react';
import React from 'react';

// example of a component that uses conditional rendering to display the contents of an array in a list <li> tag elements
const ConditionalArrayEx = () => {
    const [items] = useState(['React', 'Vue', 'Angular', 'Vanilla ']);
    
    return (
        <div>
            <h1>Front-end Languages</h1>
            {items.length > 0 ? (
                <div>   {/* added a new div if wanted to add a new <h4>*/}
                <h4>Non-empty array</h4>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>
            ) : (
                <div>
                <h4>Empty array</h4>
                <p>No Front-end languages are avaiable</p>
                </div>
            )}
        </div>
    );   
}
export default ConditionalArrayEx;