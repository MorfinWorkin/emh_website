import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './DaCV.css';
import styled from 'styled-components';
import profileImg from '../../assets/profileImg.webp';

const centerIt = {
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
};
const ResumeSkills = styled.div`
  background-color: #444444;
  width: 26.5%;
  margin-left: 3%;
  border: 2px solid #fecc01;
`;
const Description = styled.div`
  width: 40;
  padding: 1%;
  color: #fecc01;
  font-size: 1.9rem;
  padding-inline: 10%;
  margin-bottom: 0%;
  border: 1px solid;
  border-color: #fecc01;
`;
const SkillsHeaders = styled.div`
  width: 100 %;
  padding: 1%;
  color: white;
  font-size: 2.1rem;
  padding-inline: 10%;
  margin-bottom: 0;
  border: 1px solid;
  border-color: #fecc01;
  letter-spacing: 0.3em;
  font-weight: 600;
`;
const Headers = styled.div`
  width: 100 %;
  padding: 1%;
  color: #000;
  font-size: 2.3rem;
  padding-inline: 10%;
  margin-bottom: 0;
  border: 1px solid;
  border-color: #fecc01;
  letter-spacing: 0.2em;
  font-weight: 700;
`;
const SkillsContent = styled.div`
  width: 100%;
  padding: 1%;
  color: white;
  font-size: 1.5rem;
  padding-inline: 5%;
  margin-bottom: 0;
  border: 1px solid;
  border-color: #fecc01;
  letter-spacing: 0.3em;
  font-weight: 400;
  line-height: 2.3em;
`;
const SkillsLine = styled.div`
  width: 112.5%;
  padding: 1%;
  background-color: #fecc01;
  padding-inline: 10%;
  margin-top: 5%;
  border: 1px solid;
  border-color: #fecc01;
`;
const HeadersLine = styled.div`
  width: 90%;
  padding: 0.5%;
  background-color: #fecc01;
  padding-inline: 10%;
  margin-top: 0;
  margin-left: 5%;
  border: 1px solid;
  border-color: #fecc01;
`;
const BarContainer = styled.div`
  width: 100%;
  height: 40%;
`;
const NameContainer = styled.div`
  margin-block: 15%;
  background-color: #fecc01;
  width: 90%;
  height: 33%;
  padding: 5%;
`;
const DaCV = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: 'white',
          zIndex: '1',
          opacity: 0.8,
        }}
      >
        <ResumeSkills>
          <img
            alt='This is Eduardo Morfin , gray scaled.'
            src={profileImg}
            style={{ width: '100%', padding: '1%' }}
          />
          <Description>
            Recently started as a Software Developer, Im a code enthusiast and
            consider myself a great co-worker, a proactive and resolutive
            person. Currently im in my first year of computer systems
            engineering.
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
              <li>
                <Row>
                  <Col>JavaScript </Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={75} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col>CSS &nbsp;</Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={80} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col>HTML &nbsp;</Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={80} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col>Threejs &nbsp;</Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={70} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col>UnitTesting </Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={60} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col>Nodejs &nbsp;</Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={60} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
            </ul>
          </SkillsContent>
          <SkillsHeaders>
            LANGUAGES
            <SkillsLine />
          </SkillsHeaders>
          <SkillsContent>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <Row>
                  <Col>English &nbsp;</Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={85} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col>Spanish &nbsp;</Col>
                  <Col style={centerIt}>
                    <BarContainer>
                      <ProgressBar now={100} />
                    </BarContainer>
                  </Col>
                </Row>
              </li>
            </ul>
          </SkillsContent>
        </ResumeSkills>
        <Container>
          <div
            style={{
              top: 0,
              marginLeft: '11.5%',
              backgroundColor: '#ff000050',
              height: '100vh',
              width: '53.7%',
              position: 'absolute',
            }}
          >
            <NameContainer>
              <h2
                style={{
                  fontWeight: '900',
                  fontSize: '3.5rem',
                  letterSpacing: '0.1em',
                }}
              >
                MORFIN HERNANDEZ
              </h2>
              <h3
                style={{
                  fontWeight: '400',
                  fontSize: '3.5rem',
                  letterSpacing: '0.1em',
                }}
              >
                EDUARDO
              </h3>
            </NameContainer>
            <div style={{ padding: '2%' }}>
              <Headers>EDUCATION</Headers>
              <HeadersLine />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default DaCV;
