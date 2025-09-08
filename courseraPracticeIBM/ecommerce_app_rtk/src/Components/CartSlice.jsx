// Implementing logic for the Redux toolkit to ensure when "Add To Cart" is clicked, the info of the product qty should be available
// globally to any component
// for this file it is needed to install @reduxjs/toolkit and react-redux as a third-party module.
import  { createSlice } from 'react-redux'

const CartSlice = createSlice({     // initialized with one createSlice Redux toolkit function

});


const initialState = {      // initialized an empty array
    cartItems: [],
};
