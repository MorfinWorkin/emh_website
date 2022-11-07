import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DaNav from './components/DaNav';
import './App.css';
import DaAMT from './components/DaAMT';
import styled from 'styled-components';
import DaCarousel from './components/DaCarousel/DaCarousel';

const DaDiv = styled.div`
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: auto;
  background: #bebebe22;
  border: ${({ border }) => (border ? '1px solid #ffffff00' : '0px')};
  border-radius: 0px;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  color: #fff;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

function App() {
  return (
    <>
      <DaNav />
      <DaAMT bright={90} color={''} />
      <DaDiv>
        {/* <p style={{ margin: 'auto', display: 'flex-box' }}>
            “First, solve the problem. Then, write the code.”
            <br />
            <strong>
              <em> &nbsp; - John Johnson</em>
            </strong>
          </p> */}
        <DaCarousel />
      </DaDiv>
    </>
  );
}

export default App;
