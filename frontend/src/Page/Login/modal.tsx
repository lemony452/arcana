import React, { useRef, useEffect } from 'react';
import { LoginBg, LoginModalStyle, LoginMent } from './login_style';
import LoginBgImg from '../../Assets/etc/loginBg.png';
import { GoogleLogin, KakaoLogin } from './login';
import { userInfoStore } from '../../Store/User/info';

function LoginModal() {
  const outsideLogin = useRef<any>();
  const { isLogin, goLogin, setGoLogin } = userInfoStore();
  console.log(goLogin);
  const toggleLogin = () => {
    setGoLogin(false);
  };

  const handleClose = (event: any) => {
    if (!outsideLogin.current.contains(event.target)) {
      toggleLogin();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [goLogin]);

  return (
    <LoginModalStyle ref={outsideLogin} className={goLogin && !isLogin ? 'gologin' : ''}>
      <LoginBg>
        <LoginMent>SNS 계정으로 로그인</LoginMent>
        <LoginMent className="sub">기존에 사용하시는 계정으로</LoginMent>
        <LoginMent className="sub">간편하게 로그인하세요</LoginMent>
        <KakaoLogin />
        <GoogleLogin />
      </LoginBg>
    </LoginModalStyle>
  );
}

export default LoginModal;
