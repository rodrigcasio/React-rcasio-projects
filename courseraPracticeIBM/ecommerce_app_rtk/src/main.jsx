import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';   // optional, delete if wanted to follow same style as the created .css files
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
