import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  TitleBox,
  Title,
  SubTitle,
  StyledCircle,
  CardBox,
  SideBtn,
  MainBg,
  LoginBtn,
} from './main_style';
import Card from './components/card';
import Character from './components/character';
import { useCardStore, useHoverStore } from '../../Store/Main/main';
import SideBtnImg from '../../Assets/etc/sideBtn.png';
import SideBar from '../Mypage';
import { getCookie } from '../Login/cookie';
import LoginModal from '../Login/modal';
import { userInfoStore } from '../../Store/User/info';
import { API } from '../../API';

function Main() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const [goLogin, setGoLogin] = useState(false);
  const { isLogin, isSide, setIsSide, setGoLogin, user, setTarotLog } = userInfoStore();
  // const cookie = getCookie('token');
  const toggleSide = () => {
    // if (cookie) {
    //   setIsOpen(true);
    // } else {
    //   setGoLogin(true);
    // }
    // setIsOpen(true);
    if (isLogin) {
      // setIsOpen(true);
      setIsSide(true);
      API.get(`/api/v1/tarot/log?uid=${user.uid}`)
        .then((res) => {
          console.log(res);
          setTarotLog(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setGoLogin(true);
    }
  };

  const { cardOrder } = useCardStore();
  const { hover } = useHoverStore();

  return (
    <MainBg className={cardOrder}>
      {isLogin ? (
        <SideBtn src={SideBtnImg} onClick={toggleSide} />
      ) : (
        <LoginBtn type="button" onClick={toggleSide}>
          LOGIN
        </LoginBtn>
      )}
      {/* <SideBtn src={SideBtnImg} onClick={toggleSide} /> */}
      <SideBar />
      <LoginModal />
      <TitleBox>
        <Title>ARCANA</Title>
        <SubTitle>당신의 마음을 듣고 읽어주는 타로 프렌즈</SubTitle>
      </TitleBox>
      <StyledCircle
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className={cardOrder}
      />
      <Circle2
        animate={{ x: [0, 50, 0], y: [0, -30, 0, -30, 0, -30, 0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className={cardOrder}
      />
      <Circle3 className={cardOrder} />
      <Circle4 className={cardOrder} />
      <Circle5
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{ originX: 1.2, originY: 0 }}
        className={cardOrder}
      />
      <Character />
      <CardBox>
        <Card isOpen={isSide} />
      </CardBox>
    </MainBg>
  );
}

export default Main;
