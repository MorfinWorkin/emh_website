import React from 'react';
import styled from 'styled-components';

const DaContainer = styled.div`
  width: 100%;
  margin: auto;
  display: inline-block;
  background-color: #afafaf;
`;
const DaNavContainer = styled.nav`
  margin: auto;
  height: 100%;
  padding: 10px;
  background-color: #afafaf;
`;

const DaButton = styled.div`
  height: 100%;
  padding-inline: 1.82vw;
  margin-block: auto;
  border-radius: 5px;
  background: #afafaf;
  font-weight: 500;

  &:hover {
    border-radius: 10px;
    background: #afafaf;
    box-shadow: inset 3px 3px 1px #898989, inset -3px -3px 1px #d6d6d6;

    transition: 0.5s;
  }
`;
const DaNav = ({ children }) => {
  return (
    <>
      <DaContainer className='fluid sticky-top'>
        <DaNavContainer className='navbar navbar-expand-lg'>
          <a className='navbar-brand' href='/'>
            <DaButton> MORFIN WORKING</DaButton>
          </a>
        </DaNavContainer>
      </DaContainer>
      {children}
    </>
  );
};

export default DaNav;
