import React, { useEffect, useState, createContext } from 'react';
import { Cookies } from 'react-cookie';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { GoogleBtn, KakaoBtn } from './login_style';
import googleBtnImg from '../../Assets/etc/googleBtn.png';
import kakaoBtnImg from '../../Assets/etc/kakaoBtn.png';
import { userInfoStore } from '../../Store/User/info';

export function GoogleLogin() {
  // 구글 인가 코드 요청
  // const GOOGLE_REDIRECT_URI = `https://ssafy-8d107-arcana.firebaseapp.com/__/auth/handler`;
  // const GOOGLE_CLIENT_ID = `122535767259-mir9chcomcejjs8tsagiuqajsogbdjn6.apps.googleusercontent.com`;
  // const GOOGLE_URI = `https://accounts.google.com/o/oauth2/auth?scope=profile&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;
  const [u, setU] = useState();
  const { setUser, setIsLogin } = userInfoStore();

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const stateChange = onAuthStateChanged(auth, (currentUser: any) => {
    setU(currentUser);
    setUser(currentUser);
    setIsLogin(true);
  });

  useEffect(() => {
    return () => {
      stateChange();
      console.log(u);
    };
  }, []);

  return (
    // <a href={GOOGLE_URI}>
    // </a>
    <GoogleBtn onClick={login} src={googleBtnImg} />
  );
}

export function KakaoLogin() {
  // 카카오 인가 코드 요청
  const KAKAO_CLIENT_ID = '49505a61dc30b027fd8d12856836c7fb';
  const KAKAO_REDIRECT_URI = `https://k8d107.p.ssafy.io/api/v1/user/kakao`;
  const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <a href={KAKAO_URI}>
      <KakaoBtn src={kakaoBtnImg} />
    </a>
  );
}
