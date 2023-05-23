import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import { useCardStore, useHoverStore } from '../../../Store/Main/main';
import { StyledCard, NextBtn, PrevBtn } from '../main_style';
import NextBtnImg from '../../../Assets/etc/nextButton.png';
import MainCeltic from '../../../Assets/etc/MainCeltic.png';
import MainTime from '../../../Assets/etc/MainTime.png';
import MainInstant from '../../../Assets/etc/MainInstant.png';
import { useFortuneStore } from '../../../Store/User/fortune';
import { userInfoStore } from '../../../Store/User/info';

function Card({
  isOpen,
  setModalOpen,
}: {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // navigate hook
  // swiper hook
  const navigate = useNavigate();

  const { weeklyCount, setWeekly, isLogin, setGoLogin } = userInfoStore();

  // 캐러셀 이동
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  // spread 방식 store에 저장
  const { setSpread } = useFortuneStore();

  // 카드 hovering 변수
  const { hover, setHover } = useHoverStore();

  const Hovering = () => {
    if (!hover) {
      setHover(true);
    } else {
      setHover(false);
    }
  };

  // celtic, instant, time 카드 순서 변수
  const { setCardOrder } = useCardStore();

  // celtic 페이지로 이동
  const MoveCeltic = () => {
    if (!isOpen) {
      setSpread('celtic');
      // 메인 페이지로 이동 했을때 값을 초기화해줌
      setCardOrder('celtic');
      setHover(false);
      // setHover(hover);
      if (isLogin) {
        if (weeklyCount > 0) {
          navigate('/celtic');
          setWeekly(weeklyCount - 1);
        } else {
          setModalOpen(true);
        }
      } else {
        setGoLogin(true);
      }
    }
  };
  // time 페이지로 이동
  const MoveTime = () => {
    if (!isOpen) {
      setSpread('time');
      // 메인 페이지로 이동 했을때 값을 초기화해줌
      setCardOrder('time');
      setHover(false);
      // setHover(hover);
      if (isLogin) {
        if (weeklyCount > 0) {
          setCardOrder('celtic');
          navigate('/time');
          setWeekly(weeklyCount - 1);
        } else {
          setModalOpen(true);
        }
      } else {
        setGoLogin(true);
      }
    }
  };
  // instant 페이지로 이동
  const MoveInstant = () => {
    if (!isOpen) {
      setSpread('instant');
      // 메인 페이지로 이동 했을때 값을 초기화해줌
      setHover(false);
      setCardOrder('instant');
      if (isLogin) {
        setCardOrder('celtic');
        navigate('/instant');
      } else {
        setGoLogin(true);
      }
    }
  };

  // 활성화된 스와이프 페이지의 인덱스를 가져와서 CardOrder 스토어에 저장
  const setImg = (index: number) => {
    if (index === 0) {
      setCardOrder('celtic');
    } else if (index === 1) {
      setCardOrder('time');
    } else if (index === 2) {
      setCardOrder('instant');
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={{ nextEl, prevEl }}
      pagination={{ clickable: true }}
      onActiveIndexChange={(page) => setImg(page.realIndex)}
      loop
    >
      <NextBtn src={NextBtnImg} ref={(node) => setNextEl(node)} />
      <PrevBtn src={NextBtnImg} ref={(node) => setPrevEl(node)} />
      <SwiperSlide>
        <StyledCard onClick={MoveCeltic} onMouseEnter={Hovering} onMouseLeave={Hovering} src={MainCeltic} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveTime} onMouseEnter={Hovering} onMouseLeave={Hovering} src={MainTime} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledCard onClick={MoveInstant} onMouseEnter={Hovering} onMouseLeave={Hovering} src={MainInstant} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Card;
