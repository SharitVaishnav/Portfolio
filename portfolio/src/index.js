import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AnimatePresence mode = "wait">
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AnimatePresence>
    
);

