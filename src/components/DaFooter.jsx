import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

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
  }
`;

const DaFooter = () => {
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
                <span>
                  GitHub &nbsp;
                  <i className='fa-brands fa-github'></i>
                </span>
              </Row>
            </DaButton>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <DaButton>
              <span>
                LinkedIn &nbsp;
                <i class='fa-brands fa-linkedin ml-3'></i>
              </span>
            </DaButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DaFooter;
