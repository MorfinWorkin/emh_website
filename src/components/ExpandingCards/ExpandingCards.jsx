import React, { useEffect } from 'react';
import styled from 'styled-components';
import jsCer from '../../assets/certificates/certificateJS.webp';
import reactCer from '../../assets/certificates/certificateReact.webp';
import cssCer from '../../assets/certificates/certificateCSS.webp';
import wip from '../../assets/certificates/inProgress.webp';
import techNature1 from '../../assets/techNature/tech-nature1.webp';
import techNature2 from '../../assets/techNature/tech-nature2.webp';
import techNature3 from '../../assets/techNature/tech-nature3.webp';
import techNature4 from '../../assets/techNature/tech-nature4.webp';
import techNature5 from '../../assets/techNature/tech-nature5.webp';

const DaWrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  margin-top: 1%;
`;

const CardImg = styled.div`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : `url(${wip})`)};
  background-size: 100%;
  background-position: center;
  border-radius: 0px;
  height: 80vh;
  color: #000;
  cursor: pointer;
  flex: 1;
  margin-inline: 0.5vmin;
  object-fit: contain;
  position: relative;
  transition: all 750ms ease-in-out, background-image 450ms;
  &.active {
    flex: 5;
    margin-inline: 10px;
    border-radius: 10px;
    background-size: cover;
    background-image: ${({ activeImg }) =>
      activeImg
        ? `url(${activeImg})`
        : `url(https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=768,549)`};
  }
`;

const ExpandingCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const removeActiveClasses = () => {
      cards.forEach((card) => {
        console.log(card);
        card.classList.remove('active');
      });
    };

    const onPointerDown = (elem) => {
      removeActiveClasses();
      elem.classList.add('active');
    };

    cards.forEach((card) => {
      card.addEventListener('pointerdown', () => onPointerDown(card));
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('pointerdown', () => onPointerDown(card));
      });
    };
  }, []);
  return (
    <>
      <DaWrapper className='cards-wrapper'>
        <CardImg
          className='card active'
          bgImg={techNature1}
          activeImg={reactCer}
        />
        <CardImg className='card' bgImg={techNature2} activeImg={jsCer} />
        <CardImg className='card' bgImg={techNature3} activeImg={cssCer} />
        <CardImg className='card' bgImg={techNature4} activeImg={jsCer} />
        <CardImg className='card' bgImg={techNature5} activeImg={jsCer} />
      </DaWrapper>
    </>
  );
};

export default ExpandingCards;
