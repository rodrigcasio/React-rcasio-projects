import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { Comp2A, Comp3A } from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

// inserting components inside the root render
root.render(
  <>
    <App />
  </>
);
