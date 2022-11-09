import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import styled from 'styled-components';
import myCV from '../assets/myCV.png';

const centerIt = {
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
};

const BarContainer = styled.div`
  width: 100%;
  height: 40%;
}`;

const Description = styled.div`
  width: ${window.innerWidth / 3.08};
  padding: 1%;
  color: yellow;
  font-size: 2.1rem;
  padding-inline: 10%;
  margin-bottom: 20%;
  border: 1px solid;
  border-color: yellow;
`;

const SkillsHeaders = styled.div`
  width: ${window.innerWidth / 3.08};
  padding: 1%;
  color: white;
  font-size: 2.1rem;
  padding-inline: 10%;
  margin-bottom: ${window.innerHeight / 2};
  border: 1px solid;
  border-color: yellow;
  letter-spacing: 0.3em;
  font-weight: 600;
`;
const SkillsContent = styled.div`
  width: ${window.innerWidth / 3.08};
  padding: 1%;
  color: white;
  font-size: 1.5rem;
  padding-inline: 5%;
  margin-bottom: ${window.innerHeight / 2};
  border: 1px solid;
  border-color: yellow;
  letter-spacing: 0.3em;
  font-weight: 400;
`;
const SkillsLine = styled.div`
  width: 112.5%;
  padding: 1%;
  background-color: yellow;
  color: white;
  font-size: 2.1rem;
  padding-inline: 10%;
  margin-top: 5%;
  border: 1px solid;
  border-color: yellow;
  letter-spacing: 0.3em;
  font-weight: 600;
`;

const DaCV = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: 'white',
        zIndex: '1',
        opacity: 0.8,
      }}
    >
      <div
        style={{
          backgroundColor: '#444444',
          width: window.innerWidth / 3.08,
          marginLeft: '3.5%',
          height: window.innerHeight * 2.5,
          border: '2px solid yellow',
        }}
      >
        <img
          alt='Eduardo Morfin CV'
          src={myCV}
          style={{ width: window.innerWidth / 3.08, padding: '1%' }}
        />
        <Description>
          Recently started as a Software Developer, Im a code enthusiast and
          consider myself a proactive and resolutive person.
        </Description>
        <SkillsHeaders>
          SKILLS
          <SkillsLine />
        </SkillsHeaders>
        <SkillsContent>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Row>
                <Col>React &nbsp;</Col>
                <Col style={centerIt}>
                  <BarContainer>
                    <ProgressBar now={80} />
                  </BarContainer>
                </Col>
              </Row>
            </li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Threejs</li>
            <li>UnitTesing</li>
            <li>Nodejs</li>
          </ul>
        </SkillsContent>
        <SkillsHeaders>
          LANGUAGES
          <SkillsLine />
        </SkillsHeaders>
      </div>
      <div style={{ backgroundColor: 'green' }}>sdfadsf</div>
    </Container>
  );
};

export default DaCV;
