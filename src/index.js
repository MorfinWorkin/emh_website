import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import DaNav from './components/DaNav';
import DaFooter from './components/DaFooter';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAYu4k-K-TtKq5mNk_nJy2vsfevDbFXP1I',
  authDomain: 'emorfincv.firebaseapp.com',
  projectId: 'emorfincv',
  storageBucket: 'emorfincv.appspot.com',
  messagingSenderId: '752423824566',
  appId: '1:752423824566:web:89eb9d3159fb8f9f3d8a17',
  measurementId: 'G-BW0507460F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DaNav />
    <App />
    <DaFooter />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
