import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';        // import hooks from React redux

// this a practice exercise to implement a new feature component with the concept of implementing super coins

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    
    // retrieve the cartItems from the cart slice of the Redux store's state to get the total quantity of number of products using the useSelector hook
    const cartItems = useSelector(state => state.cart.cartItems);

    // evaluate the total amount by summing the product of the price and quantity for each item in the cartItems array using the reduce method
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // now update the superCoins state based on the totalAmount: setting it to 10, 20, 30 coins for different ranges of the total
    // amount, and to 0 if the amount is below 100. this effect runs whenever the totalAmount changes.
    useEffect(() => {
        if(totalAmount >= 100 && totalAmount < 200){
            setSuperCoins(10);
        }else if(totalAmount >= 200 && totalAmount < 300){
            setSuperCoins(20);
        }else if(totalAmount >= 300){
            setSuperCoins(30);
        }else{
            setSuperCoins(0);
        }
    }, [totalAmount])

    return(
        <div className="super-coins" style={{textAlign: 'center'}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
    );
}
export default SuperCoin;