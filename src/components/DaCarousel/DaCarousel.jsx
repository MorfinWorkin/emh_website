import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import logoHTML5 from '../../assets/HTML5logo.svg';
import logoJS from '../../assets/JSlogo.svg';
import logoReact from '../../assets/ReactBadge.svg';
import logoCSS from '../../assets/CSSlogo.svg';
import logoThree from '../../assets/ThreeJSlogo.svg';

const Wrapper = styled.div`
   {
    margin-top: -5%;
    background-color: #29292960;
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Carousel = styled.div`
   {
    height: calc(100vh - 150px);
    width: calc(100vw - 250px);
    margin: 0;
    overflow: hidden;
    scroll-behavior: smooth;
    display: flex;
    justify-content: space-between;
  }
`;

const Card = styled.div`
   {
    flex-shrink: 0;
    background-color: #545454;
    height: 100%;
    width: calc(20% - 8px);
    margin: 0 5px;
    transition: transform 1s;
    background-repeat: no-repeat;
    background-size: auto 120%;
    background-position: center;
    transition: all 0.3s;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      background-size: auto 100%;
    }
    &::first-child {
      margin-left: 0;
    }
    &::last-child {
      margin-right: 0;
    }
  }
`;

const CardP = styled.p`
   {
    margin: 0;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 10vw;
    color: white;
    transition: all 0.3s;
    transform: scale(1);
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      transform: scale(1.3);
    }
  }
`;
const CardImg = styled.img`
   {
    margin: 0;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 10vw;
    color: white;
    transition: all 0.3s;
    transform: scale(1);
    src: ${(src) => (src ? src : '')}
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      transform: scale(1.3);
    }
  }
`;

const Pagination = styled.div`
   {
    position: absolute;
    bottom: 0;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Ball = styled.div` {
  height: 12px;
  width: 12px;
  background-color: white;
  border-radius: 20px;
  margin: 2px;
  cursor: pointer;
  transition: width 0.2s;
&:first-child {
  width: 25px;
}`;

const Arrow = styled.i`
   {
    position: absolute;
    height: auto;
    width: 75px;
    color: white;
    font-size: 80px;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
`;

const DaCarousel = () => {
  let pagination = document.querySelectorAll('.ball');
  let cards = document.querySelectorAll('.card');
  let carousel = useRef();
  let leftBtn = useRef();
  let rightBtn = useRef();
  let section = 0;

  const updatePag = () => {
    pagination.forEach((el) => (el.style.width = '12px'));
    pagination[section].style.width = '25px';
  };

  const rightBtnListener = () => {
    if (section < 2) {
      section++;
      carousel.current.scrollLeft =
        section * (window.innerWidth - 150) + section * 5;
      updatePag();
    }
  };

  const leftBtnListener = () => {
    if (section > 0) {
      section--;
      carousel.current.scrollLeft =
        section * (window.innerWidth - 150) + section * 5;
      updatePag();
    }
  };

  useEffect(() => {
    pagination.forEach((curItem, index) => {
      curItem.addEventListener('click', () => {
        //eslint-disable-next-line
        section = index;
        updatePag();
        carousel.current.scrollLeft = index * (window.innerWidth - 150) + index;
      });
    });
    leftBtn.current?.addEventListener('click', leftBtnListener);
    rightBtn.current?.addEventListener('click', rightBtnListener);
    return () => {
      /*eslint-disable*/
      pagination.forEach((curItem, index) => {
        curItem.removeEventListener('click', () => {
          //eslint-disable-next-line
          section = index;
          updatePag();
          carousel.current.scrollLeft =
            index * (window.innerWidth - 150) + index;
        });
      });
      leftBtn.current?.removeEventListener('click', leftBtnListener);
      rightBtn.current?.removeEventListener('click', rightBtnListener);
      /*esling-enable*/
    };
  }, []);
  return (
    <Wrapper>
      <Carousel ref={carousel} id='carousel'>
        <Card
          className='card'
          style={{
            backgroundColor: '#61DAFF99',
          }}
        >
          <CardImg src={logoReact} />
        </Card>
        <Card
          className='card'
          style={{
            backgroundColor: '#E44D2695',
          }}
        >
          <CardImg src={logoHTML5} />
        </Card>
        <Card
          className='card'
          style={{
            backgroundColor: '#F0BE2595',
          }}
        >
          <CardImg src={logoJS} />
        </Card>
        <Card
          className='card'
          style={{
            backgroundColor: '#264DE495',
          }}
        >
          <CardImg src={logoCSS} />
        </Card>
        <Card
          className='card'
          style={{
            backgroundColor: '#bbbbbb99',
          }}
        >
          <CardImg src={logoThree} />
        </Card>
      </Carousel>
      {cards.lenght > 4 && (
        <>
          <Pagination id='pagination'>
            <Ball className='ball'></Ball>
            <Ball className='ball'></Ball>
            <Ball className='ball'></Ball>
          </Pagination>

          <Arrow
            ref={leftBtn}
            style={{ left: '0' }}
            id='leftArrow'
            className='arrow fa-solid fa-caret-left'
          ></Arrow>
          <Arrow
            ref={rightBtn}
            style={{ right: '0' }}
            id='rightArrow'
            className='arrow fa-solid fa-caret-right'
          ></Arrow>
        </>
      )}
    </Wrapper>
  );
};

export default DaCarousel;
