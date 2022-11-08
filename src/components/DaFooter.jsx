import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
const DaLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const DaButton = styled.div`
  height: 100%;
  width: 60%;
  padding-left: 7%;
  margin: 0;
  border-radius: 10px;
  background: #1f1f1f;
  font-weight: 500;
  font-size: 1.5rem;
  color: #fff;

  &:hover {
    border-radius: 10px;
    background: #afafaf10;
    box-shadow: inset 1px 1px 1px #89898900, inset -1px -1px 1px #d6d6d650;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const DaFooter = () => {
  const goTo = () => {
    window.location.href = 'www.yoursite.com';
  };
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: '#1f1f1f', height: '20vh', padding: '3%' }}
      >
        <Row>
          <Col xs={2}>
            <DaButton>
              <Row>
                <DaLink target={'blank'} href='https://github.com/MorfinWorkin'>
                  GitHub &nbsp;
                  <i className='fa-brands fa-github'></i>
                </DaLink>
              </Row>
            </DaButton>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <DaButton>
              <DaLink
                target={'blank'}
                href={'https://www.linkedin.com/in/emorfinh/'}
              >
                LinkedIn &nbsp;
                <i class='fa-brands fa-linkedin ml-3'></i>
              </DaLink>
            </DaButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DaFooter;
