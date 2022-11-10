import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myCV from './assets/myCV.png';
import DaCV from './components/DaCV/DaCV';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid>
        <img
          alt='Eduardo Morfin CV'
          src={myCV}
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            zIndex: '-1',
          }}
        />
      </Container>
      <DaCV />
    </>
  );
}

export default App;
