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

export function GoogleLogin() {
  // 구글 인가 코드 요청
  // const GOOGLE_REDIRECT_URI = `https://ssafy-8d107-arcana.firebaseapp.com/__/auth/handler`;
  // const GOOGLE_CLIENT_ID = `122535767259-mir9chcomcejjs8tsagiuqajsogbdjn6.apps.googleusercontent.com`;
  // const GOOGLE_URI = `https://accounts.google.com/o/oauth2/auth?scope=profile&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;
  // const [userData, setUserData] = useState<any>();
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
  // 카카오 인가 코드 요청
  const KAKAO_CLIENT_ID = '49505a61dc30b027fd8d12856836c7fb';
  // const KAKAO_REDIRECT_URI = `https://k8d107.p.ssafy.io/api/v1/user/kakao`;
  const KAKAO_REDIRECT_URI = `https://k8d107.p.ssafy.io`;
  const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;
  const navigate = useNavigate();

  // const location = useLocation();
  // useEffect(() => {
  //   const login = async () => {
  //     console.log('카카오 로그인 중');
  //     // await window.open(KAKAO_URI);
  //     // const URLcode = new URL(document.location).searchParams.get('code');
  //     const URLcode = location.search.split('=')[1];
  //     console.log(URLcode);
  //     API.get(`/api/v1/user/kakao?code=${URLcode}`).then((res) => {
  //       console.log(res);
  //     });
  //     navigate('/', { replace: true });
  //   };
  // }, []);

  return (
    <a href={KAKAO_URI}>
      <KakaoBtn src={kakaoBtnImg} />
    </a>
  );
}
