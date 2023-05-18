import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  TitleBox,
  Title,
  TitleImg,
  SubTitle,
  StyledCircle,
  CardBox,
  SideBtn,
  MainBg,
  LoginBtn,
  ModalBtnBox,
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
import { ModalBackdrop } from '../Common/common_style';
import Arcana from '../../Assets/etc/ARCANA.png';

function Main() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const [goLogin, setGoLogin] = useState(false);
  const { setIsTarotLog, isLogin, isSide, setIsSide, setGoLogin, user, setTarotLog, goLogin } = userInfoStore();
  // const cookie = getCookie('token');

  const goPseudo = () => {
    navigate('/pseudo');
  };
  const goQuiz = () => {
    navigate('/quiz');
  };

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
          if (res.data === '') {
            setIsTarotLog(false);
          } else {
            setIsTarotLog(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsTarotLog(false);
        });
    } else {
      setGoLogin(true);
    }
  };

  const { cardOrder } = useCardStore();
  const { hover } = useHoverStore();

  return (
    <MainBg className={cardOrder}>
      {goLogin ? <ModalBackdrop /> : null}
      <ModalBtnBox>
        {isLogin ? (
          <SideBtn src={SideBtnImg} onClick={toggleSide} />
        ) : (
          <LoginBtn type="button" onClick={toggleSide}>
            LOGIN
          </LoginBtn>
        )}
      </ModalBtnBox>
      {/* <SideBtn src={SideBtnImg} onClick={toggleSide} /> */}
      <SideBar />
      <LoginModal />
      <TitleBox>
        {/* <Title>ARCANA</Title> */}
        <TitleImg>
          <img src={Arcana} alt="title" />
        </TitleImg>
        <SubTitle>당신의 마음을 듣고 읽어주는 타로 프렌즈</SubTitle>
        {/* 임시버튼 */}
        <button type="submit" onClick={goQuiz}>
          quiz
        </button>
        <button type="submit" onClick={goPseudo}>
          server
        </button>
      </TitleBox>
      <StyledCircle
        // animate={{ scale: [1, 1.05, 1] }}
        // transition={{ duration: 5, repeat: Infinity }}
        className={cardOrder}
      />
      <Circle2
        animate={{ x: [0, 50, 0], y: [0, -30, 0, -30, 0] }}
        transition={{ duration: 2.5 }}
        className={cardOrder}
      />
      <Circle3 className={cardOrder} />
      <Circle4 animate={{ y: [0, -30, 0] }} transition={{ duration: 2 }} className={cardOrder} />
      <Circle5 animate={{ y: [0, -30, 0] }} transition={{ duration: 2 }} className={cardOrder} />
      <Character />
      <CardBox>
        <Card isOpen={isSide} />
      </CardBox>
    </MainBg>
  );
}

export default Main;
