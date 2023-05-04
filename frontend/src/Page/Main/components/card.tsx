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
import { useCardStore, useHoverStore } from '../../../Store/Main/main';
import { StyledCard, StyledCircle } from '../main_style';
import Character from './character';
import Card0 from '../../../Assets/etc/card0.png';
import Card1 from '../../../Assets/etc/card1.png';
import Card2 from '../../../Assets/etc/card2.png';
import { useFortuneStore } from '../../../Store/User/fortune';

function Card() {
  // navigate hook
  // swiper hook
  // const swiper = useSwiper();
  // console.log('swiper', swiper);
  const navigate = useNavigate();

  // 캐러셀 이동
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  // spread 방식 store에 저장
  const { setSpread } = useFortuneStore();

  // 카드 hovering 변수
  const { hover, setHover } = useHoverStore();

  const Hovering = () => {
    setHover(hover);
  };

  // celtic, instant, time 카드 순서 변수
  const { cardOrder, setCardOrder } = useCardStore();

  let temp = cardOrder;
  const NextClick = () => {
    if (temp === 'instant') {
      temp = 'celtic';
    } else if (temp === 'time') {
      temp = 'instant';
    } else {
      temp = 'time';
    }
    setCardOrder(temp);
  };

  const PrevClick = () => {
    if (temp === 'instant') {
      temp = 'time';
    } else if (temp === 'time') {
      temp = 'celtic';
    } else {
      temp = 'instant';
    }
    setCardOrder(temp);
  };

  // celtic 페이지로 이동
  const MoveCeltic = () => {
    setSpread('celtic');
    // 메인 페이지로 이동 했을때 값을 초기화해줌
    setCardOrder('celtic');
    setHover(hover);
    navigate('/celtic');
  };
  // time 페이지로 이동
  const MoveTime = () => {
    setSpread('time');
    // 메인 페이지로 이동 했을때 값을 초기화해줌
    setCardOrder('celtic');
    setHover(hover);
    navigate('/time');
  };
  // instant 페이지로 이동
  const MoveInstant = () => {
    setSpread('instant');
    // 메인 페이지로 이동 했을때 값을 초기화해줌
    setCardOrder('celtic');
    setHover(hover);
    navigate('/instant');
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
      <button type="button" ref={(node) => setPrevEl(node)} onClick={PrevClick}>
        Slide Prev
      </button>
      <SwiperSlide>
        <StyledCard onClick={MoveCeltic} onMouseEnter={Hovering} onMouseLeave={Hovering} src={Card0} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveTime} onMouseEnter={Hovering} onMouseLeave={Hovering} src={Card1} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveInstant} onMouseEnter={Hovering} onMouseLeave={Hovering} src={Card2} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Card;