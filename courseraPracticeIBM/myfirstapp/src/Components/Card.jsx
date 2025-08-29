import React from 'react'
import Button from './Button.jsx'
import './../card.css'

function Card () {
    return (
        <div className="cardN-container">
            <h1>Card Name</h1>
            <p>Card Description...</p>
            <Button />
        </div>
    );
}

export default Card;