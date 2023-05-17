import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './src/scss/App.scss';
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
