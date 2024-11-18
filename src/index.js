import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ValueProvider } from './Components/Context/Context_Hook';
import './i18Next'
import { useTranslation } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // t=useTranslation();
  <React.StrictMode>
    <ValueProvider>  

    <App />
    </ValueProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
