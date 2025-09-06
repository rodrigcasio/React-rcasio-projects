import React from 'react';
import UseToggle from './UseToggle.jsx';

const ToggleButtonCustomHook = () => {
    const [isToggled, toggle] = UseToggle(false);
    
    return (
        <div>
            <h1>Toggle Button with using a custom hook</h1>
            <button onClick={toggle}>{isToggled ? 'ON' : 'OFF'}</button>
        </div>
    );
}
export default ToggleButtonCustomHook;
