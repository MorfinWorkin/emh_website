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
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Carousel = styled.div`
   {
    height: calc(100vh - 150px);
    width: calc(100vw - 250px);
    margin: auto;
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
        carousel.current.scrollLeft =
          index * (window.innerWidth - 150) + index * 5;
      });
    });

    leftBtn.current.addEventListener('click', leftBtnListener);
    rightBtn.current.addEventListener('click', rightBtnListener);
    return () => {
      /*eslint-disable*/
      leftBtn.current.removeEventListener('click', leftBtnListener);
      rightBtn.current.removeEventListener('click', rightBtnListener);
      /*esling-enable*/
    };
  }, []);
  return (
    <Wrapper>
      <Carousel ref={carousel} id='carousel'>
        <Card
          className='card'
          style={{
            backgroundColor: '#61DAFB99',
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
            backgroundColor: '#44444495',
          }}
        >
          <CardImg src={logoThree} />
        </Card>

        <Card
          className='card'
          style={{
            backgroundImage:
              " url('https://images.pexels.com/photos/572688/pexels-photo-572688.jpeg?cs=srgb&dl=pexels-tyler-lastovich-572688.jpg&fm=jpg')",
          }}
        >
          <CardP>6</CardP>
        </Card>
        <Card
          className='card'
          style={{
            backgroundImage:
              " url('https://burst.shopifycdn.com/photos/golden-autumn-leaves.jpg?width=1200&format=pjpg&exif=1&iptc=1')",
          }}
        >
          <CardP>7</CardP>
        </Card>
        <Card
          className='card'
          style={{
            backgroundImage:
              " url('https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg?fit=1500%2C1000&ssl=1')",
          }}
        >
          <CardP>8</CardP>
        </Card>
        <Card
          className='card'
          style={{
            backgroundImage:
              " url('https://images.squarespace-cdn.com/content/v1/5c69df27ca525b3b56a5cce6/1553777016469-K6PBICDGY54KWX764B3Q/Redwoods-Sarah-Marino-1500px.jpg?format=1500w')",
          }}
        >
          <CardP>9</CardP>
        </Card>
        <Card
          className='card'
          style={{
            backgroundImage:
              " url('https://i.guim.co.uk/img/media/18c7596e2cda2b1f2b943c938b977b59028c5f86/0_500_3915_2348/master/3915.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3c9aaf2e827c29ee2f8114a60acc93aa')",
          }}
        >
          <CardP>10</CardP>
        </Card>
      </Carousel>
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
    </Wrapper>
  );
};

export default DaCarousel;
