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
import { StyledCard, StyledCircle, NextBtn, PrevBtn } from '../main_style';
import Character from './character';
import NextBtnImg from '../../../Assets/etc/nextButton.png';
import celticImg from '../../../Assets/etc/celtic.png';
import timeImg from '../../../Assets/etc/time.png';
import instantImg from '../../../Assets/etc/instant.png';
import { useFortuneStore } from '../../../Store/User/fortune';
import { userInfoStore } from '../../../Store/User/info';

function Card({ isOpen }: { isOpen: boolean }) {
  // navigate hook
  // swiper hook
  // const swiper = useSwiper();
  // console.log('swiper', swiper);
  const navigate = useNavigate();

  const { weeklyCount, setWeekly, isLogin } = userInfoStore();

  // 캐러셀 이동
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  // spread 방식 store에 저장
  const { setSpread } = useFortuneStore();

  // 카드 hovering 변수
  const { hover, setHover } = useHoverStore();

  const Hovering = () => {
    if (!isOpen) {
      setHover(hover);
    }
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
    if (!isOpen) {
      setSpread('celtic');
      // 메인 페이지로 이동 했을때 값을 초기화해줌
      setCardOrder('celtic');
      setHover(hover);
      if (isLogin) {
        navigate('/celtic');
        setWeekly(weeklyCount - 1);
      }
    }
  };
  // time 페이지로 이동
  const MoveTime = () => {
    if (!isOpen) {
      setSpread('time');
      // 메인 페이지로 이동 했을때 값을 초기화해줌
      setCardOrder('celtic');
      setHover(hover);
      if (isLogin) {
        navigate('/time');
        setWeekly(weeklyCount - 1);
      }
    }
  };
  // instant 페이지로 이동
  const MoveInstant = () => {
    if (!isOpen) {
      setSpread('instant');
      // 메인 페이지로 이동 했을때 값을 초기화해줌
      setCardOrder('celtic');
      setHover(hover);
      navigate('/instant');
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={{ nextEl, prevEl }}
      pagination={{ clickable: true }}
      loop
    >
      <NextBtn src={NextBtnImg} ref={(node) => setNextEl(node)} onClick={NextClick} />
      <PrevBtn src={NextBtnImg} ref={(node) => setPrevEl(node)} onClick={PrevClick} />
      {/* <button type="button" ref={(node) => setNextEl(node)} onClick={NextClick}>
        Slide Next
      </button> */}
      {/* <button type="button" ref={(node) => setPrevEl(node)} onClick={PrevClick}>
        Slide Prev
      </button> */}
      <SwiperSlide>
        <StyledCard onClick={MoveCeltic} onMouseEnter={Hovering} onMouseLeave={Hovering} src={celticImg} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveTime} onMouseEnter={Hovering} onMouseLeave={Hovering} src={timeImg} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveInstant} onMouseEnter={Hovering} onMouseLeave={Hovering} src={instantImg} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Card;
