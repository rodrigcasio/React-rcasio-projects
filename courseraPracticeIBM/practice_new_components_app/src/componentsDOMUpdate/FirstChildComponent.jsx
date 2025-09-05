import React from 'react';
import { useState } from 'react';

// the first child component renders a list of items, and the parent (App) component updates only one item

const FirstChildComponent = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    
    const updateItem = () => {
        const updatedItems = [...items];
        updatedItems[0] = 'Updated Item 1';     // changing the item 1 value 
        setItems(updatedItems);       // setting up the first item new value into the items list
    };

    console.log('Rendering First Child Component');
    return (
        <div>
            <button onClick={updateItem}>Update Item</button> {/* this allows to update the first item */}
            <ul> {items.map((item, index) => (              // creates a li tag the map() for each item
                <li key={index}>{item}</li> ))} 
            </ul>
        </div>
    );
}
export default FirstChildComponent;


// In this example, the app component
// maintains the state of a list of items.
// The first child component has a list of
// array items with one button to
// update the first element of that item.
// The second child component only
// shows information related to that component. 

// Explanation
/*
    IBM explanation: 
    if we inspect the console logs, we'll notice the following behavior.

"For the first time loading,
all the components will render.
When you select to update the item,
only the first child component will be re-rendered.
Neither the app component nor
the second child component will change.
React's virtual DOM compares the updated app with
the previous virtual DOM and determines that
only the state of the first child component has changed.
Therefore, it only updates the relevant part of the DOM,
the child component, without re-rendering the entire list.

This example demonstrates how React's virtual DOM updates
only the necessary parts of
the DOM, improving the application's performance,
especially in scenarios where
only specific components or elements need to be updated. "  : IBM.

*/