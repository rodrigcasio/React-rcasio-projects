import React from 'react';
import {useState} from 'react';
// example component with methods that remove and add items from a array with buttons using useState

const AddRemoveItemsButtons = () => {
    const [items, setItems] = useState(['Autumn', 'Spring', 'Winter', 'Summer']);   
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        setItems([...items, inputValue]);       // adds the inputValue at the end of the array items
        setInputValue('');
    }
    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);      // 1 is the deletedCount starting from the index
        setItems(newItems);     // updated array placed 
    }
    
    return (
        <div>
            <h1>Seasons</h1>
            {items.length > 0 ? (           // added a condition if there are or not season in the items list
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}
                            <button onClick={() => removeItem(index)}>Remove</button>
                        </li>   // each li will have its own button 
                    ))}
                </ul>
            ) : (
                <p>No Seasons are available </p>
            )}
            <input type="text" value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />     {/* setInputValue(inputValue) = setInputValue(e.target.value) targetting the text content */}
            <button onClick={addItem}>Add</button>
        </div>
    );
}
export default AddRemoveItemsButtons;
