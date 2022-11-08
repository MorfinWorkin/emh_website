import React from 'react';
import styled from 'styled-components';

const DaContainer = styled.div`
  width: 100%;
  margin: auto;
  display: inline-block;
  background-color: #1f1f1f;
`;
const DaNavContainer = styled.nav`
  margin: auto;
  height: 100%;
  padding: 10px;
  background-color: #1f1f1f;
`;

const DaButton = styled.div`
  height: 100%;
  padding-inline: 1.82vw;
  margin: 0;
  border-radius: 0px;
  background: #1f1f1f;
  font-weight: 500;
  font-size: 1.5rem;
  color: #fff;

  &:hover {
    border-radius: 10px;
    background: #afafaf10;
    box-shadow: inset 1px 1px 1px #89898900, inset -1px -1px 1px #d6d6d650;
    transition: 0.5s;
  }
`;
const DaNav = ({ children }) => {
  return (
    <>
      <DaContainer className='fluid sticky-top'>
        <DaNavContainer className='navbar navbar-expand-lg'>
          <a className='navbar-brand' href='/'>
            <DaButton> MorfinWorking </DaButton>
          </a>
        </DaNavContainer>
      </DaContainer>
      {children}
    </>
  );
};

export default DaNav;
