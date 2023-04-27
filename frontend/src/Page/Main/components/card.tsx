import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import { StyledCard } from '../main_style';
import Card0 from '../../../Assets/etc/card0.png';
import Card1 from '../../../Assets/etc/card1.png';
import Card2 from '../../../Assets/etc/card2.png';

function Card() {
  const navigate = useNavigate();

  const MoveCeltic = () => {
    navigate('/celtic');
  };

  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation pagination={{ clickable: true }}>
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
