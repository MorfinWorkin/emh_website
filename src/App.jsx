import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DaNav from './components/DaNav';
import './App.css';
import DaAMT from './components/DaAMT';

function App() {
  return (
    <>
      <DaNav />
      <DaAMT bright={10} color={'fff'} />s
    </>
  );
}

export default App;
