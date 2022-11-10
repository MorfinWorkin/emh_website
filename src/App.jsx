import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DaAMT from './components/DaAMT';
import DaCarousel from './components/DaCarousel/DaCarousel';
import { Container, Row } from 'react-bootstrap';
import myCV from './assets/myCV.png';
import DaCV from './components/DaCV/DaCV';

function App() {
  return (
    <>
      <Container className='fluid m-0 p-0'>
        <DaAMT bright={0} color={''} />
      </Container>
      <DaCarousel />
      <h1
        style={{
          position: 'absoulte',
          display: 'flex',
          justifyContent: 'center',
          padding: '5vh',
          fontSize: '1.5em',
        }}
      >
        “First, solve the problem. Then, write the code.”
        <br />
        <strong>
          <em> &nbsp; - John Johnson</em>
        </strong>
      </h1>
      <Container>
        <Row>
          <DaCV id='curriculumCode' />
        </Row>
      </Container>
    </>
  );
}

export default App;
