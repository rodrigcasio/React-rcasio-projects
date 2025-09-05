import React from 'react';
import { useState } from 'react';

// the first child component renders a list of items, and the parent (App) component updates only one item
// The first child component has a list of
// array items with one button to
// update the first element of that item.
// The second child component only
// shows information related to that component. 

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
            <button onClick={updateItem}>Update Item</button>         
            <ul> {items.map((item, index) => (              // creates a li tag the map() for each item
                <li key={index}>{item}</li> ))} 
            </ul>
        </div>
    );
}
export default FirstChildComponent;