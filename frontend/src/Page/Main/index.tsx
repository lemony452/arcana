import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TitleBox, Title, SubTitle, StyledCircle, CardBox, SideBtn } from './main_style';
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
  const { isLogin, setIsLogin, isSide, setIsSide, goLogin, setGoLogin } = userInfoStore();
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
      // setGoLogin(false);
    } else {
      setGoLogin(true);
    }
  };

  const login = async (urlcode: string) => {
    console.log('카카오 로그인 중');
    // await window.open(KAKAO_URI);
    // const URLcode = new URL(document.location).searchParams.get('code');
    await API.get(`/api/v1/user/kakao?code=${urlcode}`).then((res) => {
      console.log(res);
    });
    await navigate('/', { replace: true });
  };

  const { cardOrder } = useCardStore();
  const { hover } = useHoverStore();
  const location = useLocation();

  if (location.search.includes('=')) {
    const URLcode = location.search.split('=')[1];
    console.log(URLcode);
    login(URLcode);
  }

  return (
    <div style={{ position: 'relative' }}>
      {isLogin ? (
        <SideBtn src={SideBtnImg} onClick={toggleSide} />
      ) : (
        <button style={{ position: 'absolute' }} type="button" onClick={toggleSide}>
          Login
        </button>
      )}
      {/* <SideBtn src={SideBtnImg} onClick={toggleSide} /> */}
      <SideBar />
      <LoginModal />
      <TitleBox>
        <Title>ARCANA</Title>
        <SubTitle>동물 친구들의 타로 서비스 아르카나</SubTitle>
      </TitleBox>
      <StyledCircle className={cardOrder} />
      <Character />
      <CardBox>
        <Card isOpen={isSide} />
      </CardBox>
    </div>
  );
}

export default Main;
