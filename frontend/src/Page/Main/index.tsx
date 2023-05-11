import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleBox, Title, SubTitle, StyledCircle, CardBox, SideBtn } from './main_style';
import Card from './components/card';
import Character from './components/character';
import { useCardStore, useHoverStore } from '../../Store/Main/main';
import SideBtnImg from '../../Assets/etc/sideBtn.png';
import SideBar from '../Mypage';
import { getCookie } from '../Login/cookie';
import LoginModal from '../Login/modal';
import { userInfoStore } from '../../Store/User/info';

function Main() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [goLogin, setGoLogin] = useState(false);
  const { isLogin, setIsLogin } = userInfoStore();
  // const cookie = getCookie('token');
  const toggleSide = () => {
    // if (cookie) {
    //   setIsOpen(true);
    // } else {
    //   setGoLogin(true);
    // }
    setIsOpen(true);
    // if (isLogin) {
    //   setIsOpen(true);
    // } else {
    //   setGoLogin(true);
    // }
  };

  const { cardOrder } = useCardStore();
  const { hover } = useHoverStore();
  // if (cardOrder === 'time') {
  //   colorRef.current?.className('time');
  // } else if (cardOrder === 'instant') {
  //   color = 'green';
  // }

  console.log(cardOrder);
  console.log(hover);
  return (
    <div style={{ position: 'relative' }}>
      <SideBtn src={SideBtnImg} onClick={toggleSide} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <LoginModal goLogin={goLogin} setGoLogin={setGoLogin} />
      <TitleBox>
        <Title>ARCANA</Title>
        <SubTitle>동물 친구들의 타로 서비스 아르카나</SubTitle>
      </TitleBox>
      <StyledCircle className={cardOrder} />
      <Character />
      <CardBox>
        <Card isOpen={isOpen} />
      </CardBox>
    </div>
  );
}

export default Main;
