import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import { useCardStore } from '../../../Store/Main/main';
import { StyledCard, StyledCircle } from '../main_style';
import Character from './character';
import Card0 from '../../../Assets/etc/card0.png';
import Card1 from '../../../Assets/etc/card1.png';
import Card2 from '../../../Assets/etc/card2.png';

function Card() {
  const navigate = useNavigate();
  // const swiper = useSwiper();
  // console.log('swiper', swiper);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  // const [hover, setHover] = useState<string>('');
  const { cardIdx, setCardIdx } = useCardStore();

  let temp = cardIdx;
  const NextClick = () => {
    if (temp === 2) {
      temp = 0;
    } else {
      temp += 1;
    }
    setCardIdx(temp);
    console.log('cardIdx : ', cardIdx);
    console.log('================');
    // swiper.slideNext();
    // console.log(swiper.slideNext());
  };
  const MoveCeltic = () => {
    navigate('/celtic');
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={{ nextEl, prevEl }}
      pagination={{ clickable: true }}
      loop
    >
      <button type="button" ref={(node) => setNextEl(node)} onClick={NextClick}>
        Slide Next
      </button>
      <button type="button" ref={(node) => setPrevEl(node)}>
        Slide Prev
      </button>
      <SwiperSlide>
        <StyledCard onClick={MoveCeltic} src={Card0} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveCeltic} src={Card1} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveCeltic} src={Card2} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Card;
