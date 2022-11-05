import React from 'react';
import styled from 'styled-components';
const DaContainer = styled.div`
  width: 100%;
  margin: auto;
  display: inline-block;
  background-color: #444444;
`;

const DaButton = styled.button`
  width: 5%;
  padding: 5px;
  margin: 1%;
  border: none;
  height: 60px;

  border-radius: 10px;
  background: #645959;
  box-shadow: inset 5px -5px 0px #383232, inset -5px 5px 0px #908080;
`;
const DaNav = () => {
  return (
    <DaContainer>
      <DaButton />;
    </DaContainer>
  );
};

export default DaNav;
