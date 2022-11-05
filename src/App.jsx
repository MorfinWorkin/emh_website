import React from 'react';
import styled from 'styled-components';

const DaButton = styled.button`
  border-radius: 10px;
  background-color: #645959;
  box-shadow: inset 5px -5px 7px #383232, inset -5px 5px 7px #908080;
`;

const DaNav = styled.div`
  width: 100vw;
  background-color: #fffff;
  display: block;
  position: absolute;
  z-index: 100;
`;
function App() {
  return (
    <>
      <DaNav />
      <DaButton />
    </>
  );
}

export default App;
