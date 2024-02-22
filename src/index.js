import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/HomePage4';
import HomePage1 from './components/HomePage1';
import HomePage2 from './components/HomePage2';
import HomePage3 from './components/HomePage3';
import HomePage4 from './components/HomePage4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <HomePage4 />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
