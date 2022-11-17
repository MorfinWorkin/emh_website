import React, { useEffect } from 'react';
import styled from 'styled-components';
import jsCer from '../../assets/certificateJS.webp';
import reactCer from '../../assets/certificateReact.webp';
import cssCer from '../../assets/certificateCSS.webp';
import wip from '../../assets/inProgress.webp';

const DaWrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  margin-top: 2%;
`;

const CardImg = styled.div`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : `url(${wip})`)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.7;
  margin: 5px;
  object-fit: contain;
  position: relative;
  -webkit-transition: all 700ms ease-in;
  &.active {
    flex: 5;
    background-image: ${({ activeImg }) =>
      activeImg
        ? `url(${activeImg})`
        : `url(https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=768,549)`};
  }
`;

const ExpandingCards = () => {
  const cards = document.querySelectorAll('.card');

  useEffect(() => {
    const removeActiveClasses = () => {
      cards.forEach((card) => {
        card.classList.remove('active');
      });
    };

    const onPointerDown = (elem) => {
      removeActiveClasses();
      elem.classList.add('active');
    };

    cards.forEach((card) => {
      card.addEventListener('pointerdown', onPointerDown(card));
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('pointerdown', onPointerDown(card));
      });
    };
  }, [cards]);
  return (
    <>
      <DaWrapper className='cards-wrapper'>
        <CardImg className='card active' activeImg={reactCer} />
        <CardImg className='card' activeImg={jsCer} />
        <CardImg className='card' activeImg={cssCer} />
        <CardImg className='card' activeImg={jsCer} />
        <CardImg className='card' activeImg={jsCer} />
      </DaWrapper>
    </>
  );
};

export default ExpandingCards;
