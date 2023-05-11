import React, { useRef, useEffect } from 'react';
import { LoginBg, LoginModalStyle } from './login_style';
import LoginBgImg from '../../Assets/etc/loginBg.png';
import { GoogleLogin, KakaoLogin } from './login';
import { userInfoStore } from '../../Store/User/info';

function LoginModal({ goLogin, setGoLogin }: { goLogin: any; setGoLogin: any }) {
  const outside = useRef<any>(null);
  const { isLogin, isSide, setIsSide } = userInfoStore();

  const handleClose = (event: any) => {
    if (!outside.current.contains(event.target)) {
      setGoLogin(false);
      console.log('로그인 모달 사라져라!');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  });

  return (
    <LoginModalStyle ref={outside} className={goLogin && !isLogin ? 'gologin' : ''}>
      <LoginBg src={LoginBgImg} />
      <KakaoLogin />
      <GoogleLogin />
    </LoginModalStyle>
  );
}

export default LoginModal;
