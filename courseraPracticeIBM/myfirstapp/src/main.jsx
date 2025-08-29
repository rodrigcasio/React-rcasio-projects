import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { Comp2A, Comp3A } from './App.jsx'
import ListFavLanguages, {Comp1LFL, Comp2LFL} from './ListFavLanguages.jsx' 
import OrganizationDetails from './OrganizationDetails.jsx' // importing the new parent component

const root = ReactDOM.createRoot(document.getElementById('root'));

// inserting components inside the root render
root.render(
  <>
  <App />
  <ListFavLanguages />
  <OrganizationDetails />   
  </>
);
