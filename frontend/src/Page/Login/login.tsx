import React, { useEffect, useState, createContext } from 'react';
import { Cookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { GoogleBtn, KakaoBtn } from './login_style';
import googleBtnImg from '../../Assets/etc/googleBtn.png';
import kakaoBtnImg from '../../Assets/etc/kakaoBtn.png';
import { userInfoStore } from '../../Store/User/info';
import { API } from '../../API';
import 'dotenv/config';

export function GoogleLogin() {
  // 구글 인가 코드 요청
  const { setUser, setIsLogin, setNickname } = userInfoStore();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((data) => {
        const userData = data.user;
        // setUserData(data.user);
        console.log(userData);
        setNickname(userData.displayName!);
        setIsLogin(true);
        setUser({ uid: userData.uid, email: userData.email, providerId: userData.providerId });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <a href={GOOGLE_URI}>
    // </a>
    <GoogleBtn onClick={login} src={googleBtnImg} />
  );
}

export function KakaoLogin() {
  const { REACT_APP_KAKAO_CLIENT_ID } = process.env;
  // 카카오 인가 코드 요청
  // const KAKAO_REDIRECT_URI = `https://k8d107.p.ssafy.io/api/v1/user/kakao`;
  const KAKAO_REDIRECT_URI = `https://k8d107.p.ssafy.io/authkakao`;
  const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  return (
    <a href={KAKAO_URI}>
      <KakaoBtn src={kakaoBtnImg} />
    </a>
  );
}
