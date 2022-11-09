import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppCopy.jsx';
import reportWebVitals from './reportWebVitals';
import DaNav from './components/DaNav';
import DaFooter from './components/DaFooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DaNav /> */}
    <App />
    {/* <DaFooter /> */}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
