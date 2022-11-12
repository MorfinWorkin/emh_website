import React from 'react';
import styled from 'styled-components';
import logoHTML5 from '../../assets/HTML5logo.svg';
import logoJS from '../../assets/JSlogo.svg';
import logoReact from '../../assets/ReactBadge.svg';
import logoCSS from '../../assets/CSSlogo.svg';
import logoThree from '../../assets/ThreeJSlogo.svg';
import { Col, Container, Row } from 'react-bootstrap';
/*eslint-disable*/

const Carousel = styled.div`
  height: 100%;
  width: 100%;
  padding: 3%;
  top: 0;
  overflow: hidden;
  scroll-behavior: smooth;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: #00000000;
  height: calc(100% / 6);
  width: 80;
  display: flex;
  transition: transform 1s;
  background-size: auto 110%;
  background-position: center;
  transition: all 0.3s;
  &:hover {
    background-size: auto 100%;
  }
  &::first-child {
    margin-left: 0;
  }
  &::last-child {
    margin-right: 0;
  }
`;

const CardImg = styled.img`

    height: 100%;
    width: calc(100vw / 50px)
    color: white;
    padding: 5%;
    transition: all 0.3s;
    transform: scale(1);
    src: ${(src) => (src ? src : '')}
    &:hover {
      transform: scale(1.3);
    }

`;

const DaCarousel = () => {
  console.log(window.screen.orientation);
  /*values
  horizontal : 'landscape-primary'
  vertical : 'portrait-primary'*/
  const calcOrientation =
    window.screen.orientation === 'portrait-primary'
      ? 'to do when vertical'
      : window.screen.orientation === 'portrait-primary'
      ? 'to do when horizontal'
      : null;
  const heightCalc =
    window.innerWidth < '850' ? 'calc(100vh / 5.8)' : 'calc(100vh - 200px)';
  return (
    <>
      <Container fluid id='carousel'>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Col sm={12} md={12} lg={2}>
            <Card
              className='card'
              height={heightCalc}
              style={{
                backgroundColor: '#61DAFF99',
              }}
            >
              <CardImg src={logoReact} />
            </Card>
          </Col>
          <Col sm={12} md={12} lg={2}>
            <Card
              className='card'
              height={heightCalc}
              style={{
                backgroundColor: '#E44D2695',
              }}
            >
              <CardImg src={logoHTML5} />
            </Card>
          </Col>
          <Col sm={12} md={12} lg={2}>
            <Card
              className='card'
              height={heightCalc}
              style={{
                backgroundColor: '#F0BE2595',
              }}
            >
              <CardImg src={logoJS} />
            </Card>
          </Col>
          <Col sm={12} md={12} lg={2}>
            <Card
              className='card'
              height={heightCalc}
              style={{
                backgroundColor: '#264DE495',
              }}
            >
              <CardImg src={logoCSS} />
            </Card>
          </Col>
          <Col sm={12} md={12} lg={2}>
            <Card
              className='card'
              height={heightCalc}
              style={{
                backgroundColor: '#bbbbbb99',
              }}
            >
              <CardImg src={logoThree} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DaCarousel;
