import React from 'react';
import styled from 'styled-components';
import logoHTML5 from '../../assets/HTML5logo.svg';
import logoJS from '../../assets/JSlogo.svg';
import logoReact from '../../assets/ReactBadge.svg';
import logoCSS from '../../assets/CSSlogo.svg';
import logoThree from '../../assets/ThreeJSlogo.svg';
import { Col, Container, Row } from 'react-bootstrap';

const DaCard = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 5%;
`;

const CardImg = styled.img` 
    max-width: 100%;
    height: 100%;   
    transition: all 0.3s;
    transform: scale(.9);
    src: ${(src) => (src ? src : '')}
    &:hover {  
      transform: scale(1.1);
    }
  
`;
const DaCards = () => {
  // const [orientation, setOrientation] = useState(initialState);
  const orientation = window.screen.orientation.type;
  const vertical = 'portrait-primary';
  /* horizontal  width: 100%;  height: 80%;*/
  const calcOrientation = orientation === vertical ? '15vh' : '75vh';

  return (
    <>
      <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          margin: 'auto',
          padding: '1%',
        }}
      >
        <Col md={2}>
          <DaCard height={calcOrientation} id='card-1' bgColor='#61DAFF99'>
            <CardImg src={logoReact} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard height={calcOrientation} id='card-2' bgColor='#E44D2695'>
            <CardImg src={logoHTML5} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard height={calcOrientation} id='card-3' bgColor='#F0BE2595'>
            <CardImg src={logoJS} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard height={calcOrientation} id='card-4' bgColor='#264DE495'>
            <CardImg src={logoCSS} />
          </DaCard>
        </Col>
        <Col md={2}>
          <DaCard height={calcOrientation} id='card-5' bgColor='#bbbbbb99'>
            <CardImg src={logoThree} />
          </DaCard>
        </Col>
      </Row>
    </>
  );
};

export default DaCards;
