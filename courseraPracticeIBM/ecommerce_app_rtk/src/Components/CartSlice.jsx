// Implementing logic for the Redux toolkit to ensure when "Add To Cart" is clicked, the info of the product qty should be available
// globally to any component
// for this file it is needed to install @reduxjs/toolkit and react-redux as a third-party module.
import  { createSlice } from 'react-redux'


// Slice Creation
const CartSlice = createSlice({     // initialized with one createSlice Redux toolkit function
    name : 'cart',  // represents the name of the slice
    initialState,   // an object representing the intial state o slice 
    reducers: { // an object containing reducer functions. Each key-value pair represents a single reducer, where the key is the name of the action and the vlaue is the reducer function

    }
});


const initialState = {      // initialized an empty array
    cartItems: [],
};
