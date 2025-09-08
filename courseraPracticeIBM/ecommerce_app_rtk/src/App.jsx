import React from 'react';
import './App.css'
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
function App() {

  return (
    <div>
      <h1 className="app-heading">E-Commerce Application</h1>
      <ProductList />
      <ShoppingCart />
    </div>
  )
}

export default App
