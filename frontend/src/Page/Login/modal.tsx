import React, { useRef, useEffect } from 'react';
import { LoginBg, LoginModalStyle } from './login_style';
import LoginBgImg from '../../Assets/etc/loginBg.png';
import { GoogleLogin, KakaoLogin } from './login';
import { userInfoStore } from '../../Store/User/info';

function LoginModal() {
  const outsideLogin = useRef<any>();
  const { isLogin, goLogin, setGoLogin } = userInfoStore();

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
      <LoginBg src={LoginBgImg} />
      <KakaoLogin />
      <GoogleLogin />
    </LoginModalStyle>
  );
}

export default LoginModal;
