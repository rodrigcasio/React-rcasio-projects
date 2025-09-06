import React from 'react';
import {useState} from 'react';

// example of UseToggle custom hook is used to manage the state of a buttton

const UseToggle = (initialValue = false) => {
    const[value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(!value);
    }

    return [value, toggle];         // return two values, "value" = isToggled : representing the current state (either true of false)
}                                                    // and "toggle" : a function that toggles the state between true and false when invoked)
export default UseToggle;
