import React from 'react';
import styled from 'styled-components';
import logoHTML5 from '../../assets/HTML5logo.svg';
import logoJS from '../../assets/JSlogo.svg';
import logoReact from '../../assets/ReactBadge.svg';
import logoCSS from '../../assets/CSSlogo.svg';
import logoThree from '../../assets/ThreeJSlogo.svg';
import jsCer from '../../assets/certificateJS.webp';
import reactCer from '../../assets/certificateReact.webp';
import cssCer from '../../assets/certificateCSS.webp';
import wip from '../../assets/inProgress.webp';
import { Col, Row } from 'react-bootstrap';

const DaCard = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => `${bgColor}99`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 5%;
  z-index: 1;
`;

const CardImg = styled.img`
  max-width: 100%;
  height: 100%;
  z-index: 0;
  transition: transform 0.3s;
  transform: scale(0.8);
  border-radius: 25px;
  &:active {
    transform: scale(1);
    position: absolute;
    width: 85%;
    height: 85%;
    margin-inline: 8%;
    padding: 2%;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #bebebe;
    z-index: 0;
    border-radius: 25px;
    &:nth-child(1) {
      z-index: 1;
      border-radius: 25px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-color: #ffffff;
      background-image: ${({ bgHover }) =>
        bgHover ? `url(${bgHover})` : `url(${wip})`};
      object-position: -99999px 99999px;
    }
  }
`;
const DaCards = () => {
  const orientation = window.screen.orientation.type;
  const vertical = 'portrait-primary';
  const calcOrientation = orientation === vertical ? '15vh' : '75vh';
  return (
    <>
      <Row
        id='myHeader'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          margin: 'auto',
          padding: '1%',
        }}
      >
        <Col md={2}>
          <DaCard
            draggable={false}
            height={calcOrientation}
            id='card-1'
            bgColor='#61DAFF'
          >
            <CardImg draggable={false} bgHover={reactCer} src={logoReact} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard
            draggable={false}
            height={calcOrientation}
            id='card-2'
            bgColor='#E44D26'
          >
            <CardImg draggable={false} src={logoHTML5} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard
            draggable={false}
            height={calcOrientation}
            id='card-3'
            bgColor='#F0BE25'
          >
            <CardImg draggable={false} bgHover={jsCer} src={logoJS} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard
            draggable={false}
            height={calcOrientation}
            id='card-4'
            bgColor='#264DE4'
          >
            <CardImg draggable={false} bgHover={cssCer} src={logoCSS} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard
            draggable={false}
            height={calcOrientation}
            id='card-5'
            bgColor='#bbbbbb'
          >
            <CardImg draggable={false} src={logoThree} />
          </DaCard>
        </Col>
      </Row>
    </>
  );
};

export default DaCards;
