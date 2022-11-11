import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './DaCV.css';
import styled from 'styled-components';
import profileImg from '../../assets/profileImg.webp';

const ResourcesLinks = styled.a`
  font-size: 1.5vmax;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
`;

const DatesCV = styled.p`
  color: #fecc01;
  font-size: 1.3vmax;
  font-weight: 700;
`;
const ResumeSkills = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  margin-left: 3%;
`;
const Description = styled.div`
  width: 40;
  padding: 1%;
  color: #fecc01;
  font-size: 3vmin;
  padding-inline: 10%;
  margin-bottom: 0%;
`;
const SkillsHeaders = styled.div`
  width: 100 %;
  padding: 1%;
  color: #bebebe;
  font-size: 1.5vmax;
  padding-inline: 10%;
  margin-bottom: 0;
  letter-spacing: 0.2vw;
  font-weight: 600;
`;
const Headers = styled.div`
  width: 100%;
  padding: 1%;
  color: #000;
  font-size: 1.7vmax;
  padding-inline: 5vw;
  margin-bottom: 0;
  letter-spacing: 0.2vw;
  font-weight: 700;
`;
const SkillsContent = styled.div`
  width: 100%;
  padding: 1%;
  color: #bebebe;
  font-size: 1.2vmax;
  padding-inline: 2vw;
  margin-bottom: 0;
  letter-spacing: 0.3vw;
  font-weight: 400;
  line-height: 5vh;
`;
const SkillsLine = styled.div`
  width: 100%;
  padding: 1%;
  background-color: #fecc01;
  padding-inline: 10%;
  margin-top: 5%;
  border: 1px solid;
  border-color: #fecc01;
`;
const HeadersLine = styled.div`
  width: 80%;
  padding: 0.5vw;
  background-color: #fecc01;
  padding-inline: 5vw;
  margin-top: 0;
  margin-left: 2vw;
  border: 1px solid;
  border-color: #fecc01;
`;
// const BarContainer = styled.div`
//   width: 50%;
//   padding: 100%
//   height: 50%;
//   justify-content: center;

// `;
const YellowContainer = styled.div`
  margin-top: 10vw;
  margin-left: -5vmin;
  background-color: #fecc01;
  width: 100%;
  padding: 5%;
  display: flex-box;
  justify-content: center;
  align-items: center;
`;

const ExpAndEd = styled.div`
  position: absolute;
`;
const DaCV = () => {
  return (
    <>
      <Container
        fluid
        style={{
          zIndex: '1',
        }}
      >
        <Row>
          <Col xs={5}>
            <ResumeSkills>
              <img
                alt='This is Eduardo Morfin , gray scaled.'
                src={profileImg}
                style={{ width: '100%', padding: '1%' }}
              />
              <Description>
                Recently started as a Software Developer, Im a code enthusiast
                and consider myself a great co-worker, a proactive and
                resolutive person. Currently im in my first year of computer
                systems engineering.
              </Description>
              <SkillsHeaders>
                SKILLS
                <SkillsLine />
              </SkillsHeaders>
              <SkillsContent>
                <ul
                  style={{ listStyleType: 'none', margin: '0', padding: '0' }}
                >
                  <li>
                    <Row>
                      <Col>
                        React
                        <ProgressBar now={80} />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        JavaScript
                        <ProgressBar now={75} />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        CSS
                        <ProgressBar now={80} />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        HTML
                        <ProgressBar now={80} />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        Threejs
                        <ProgressBar now={70} />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        UnitTesting
                        <ProgressBar now={60} />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        Nodejs
                        <ProgressBar now={60} />
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
                <ul
                  style={{
                    listStyleType: 'none',
                    marginBottom: '10vh',
                    padding: '0',
                  }}
                >
                  <li>
                    <Row>
                      <Col>
                        English
                        <ProgressBar now={85} />
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col>
                        Spanish
                        <ProgressBar now={100} />
                      </Col>
                    </Row>
                  </li>
                </ul>
              </SkillsContent>
            </ResumeSkills>
          </Col>
          <Col xs={7} style={{ marginLeft: '-3vw' }}>
            <ExpAndEd id='exp-edu'>
              <YellowContainer id='yellow-container'>
                <h2
                  style={{
                    fontWeight: '900',
                    fontSize: '2vmax',
                    letterSpacing: '0.3vw',
                  }}
                >
                  MORFIN HERNANDEZ
                </h2>
                <h3
                  style={{
                    fontWeight: '400',
                    fontSize: '2vmax',
                    letterSpacing: '0.3vw',
                  }}
                >
                  EDUARDO
                </h3>
              </YellowContainer>
              <div
                id='education'
                style={{ padding: '2vw', marginBottom: '4vw' }}
              >
                <br />
                <br />
                <br />
                <br />
                <Headers>EDUCATION</Headers>
                <HeadersLine />
                <div style={{ marginTop: '3vh', paddingInline: '5vw' }}>
                  <DatesCV>FEB 2021 - FEB 2022</DatesCV>
                  <ResourcesLinks
                    href='https://www.freecodecamp.org/'
                    target='blank'
                  >
                    freeCodeCamp.org
                  </ResourcesLinks>
                  <p style={{ fontSize: '1.5vmax' }}>
                    JavaScript Algorithms and Data Structures.
                    <br />
                    Front End Development libraries.
                  </p>
                </div>
              </div>
              <div
                id='experience'
                style={{ padding: '2vw', marginBottom: '4vw' }}
              >
                <Headers>EXPERIENCES</Headers>
                <HeadersLine />
                <div style={{ marginTop: '3vh', paddingInline: '5vw' }}>
                  <DatesCV>FEB 2022 - On Going</DatesCV>
                  <ResourcesLinks href='#footer' target='self'>
                    Autonomous
                  </ResourcesLinks>
                  <p style={{ fontSize: '1.5vmax' }}>
                    I've been working as front-end developer using React,
                    JavaScript, CSS, HTML and Three js mostly.
                    <br />
                    Bellow you can find some links to my work.
                  </p>
                  <ul>
                    <li>
                      <ResourcesLinks
                        href='https://nurem-f9b0e.web.app/login'
                        target='blank'
                        style={{ fontSize: '1.5vmax' }}
                        id='nuren'
                      >
                        Nuren WebApp
                      </ResourcesLinks>
                    </li>
                    <li>
                      <ResourcesLinks
                        href='https://mi-refa-test.web.app/'
                        target='blank'
                        style={{ fontSize: '1.5vmax' }}
                        id='3d-isolated'
                      >
                        3D isolated
                      </ResourcesLinks>
                    </li>
                    <li>
                      <ResourcesLinks
                        href='https://enlaceambiental.mx/'
                        target='blank'
                        style={{ fontSize: '1.5vmax' }}
                        id='enlaceambiental'
                      >
                        enlaceambiental.mx
                      </ResourcesLinks>
                    </li>
                  </ul>
                </div>
              </div>
            </ExpAndEd>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DaCV;
