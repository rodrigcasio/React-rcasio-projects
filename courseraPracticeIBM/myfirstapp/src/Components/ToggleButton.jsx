import React, {useState} from 'react'
import './../toggleButton.css'
function ToggleButton() {
    const [toggle, setToggle] = useState(false);

    return(
        <div>
            <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
                {toggle ? 'TURN ON' : 'TURN OFF'}
            </button>
        </div>
    );
}
export default ToggleButton;