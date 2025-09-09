import React from 'react';     
import './ProductList.css'
import  { useDispatch, useSelector } from 'react-redux';        // import hooks from React redux
import { addItemToCart } from './CartSlice.jsx'; // action to add product to cart

const ProductList = () => {
    
    const products = [                          // Sample list of products 
        { id: 1, name: 'Product A', price: 60 },
        { id: 2, name: 'Product B', price: 75 },
        { id: 3, name: 'Product C', price: 30 },
    ];

    const dispatch = useDispatch();         // initialize the dispatch function to send actions to the Redux store 
    
    const cartItems = useSelector(state => state.cart.cartItems);        // Access the current cart items from global Redux state

    const handleAddToCart = product => {                // Function to handle adding a product to the cart
        dispatch(addItemToCart(product));   // dispatch action to add product to cart
    }

    return(
        <div className="product-list">
            <h2 className="product-line-title">Products</h2>
            <ul className="product-list-items">
            {products.map(product => {
                const isAlreadyInCart = cartItems.some(item => item.id === product.id);
                return (
                    <li key={product.id} className="product-list-item">
                        <span>{product.name} - ${product.price}</span>
                        <button
                            className={`add-to-cart-btn${isAlreadyInCart ? ' disable' : ''}`}
                            onClick={() => handleAddToCart(product)}
                            disabled={isAlreadyInCart}
                        >
                            {isAlreadyInCart ? 'Added' : 'Add to Cart'}
                        </button>
                    </li>
                );
            })}
            </ul>
        </div>
    );
}
export default ProductList;
