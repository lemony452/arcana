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
// import 'dotenv/config';

export function GoogleLogin() {
  // 구글 인가 코드 요청
  const { setUser, setIsLogin, setNickname, user, setWeekly, setTicket } = userInfoStore();
  let isUser = false;
  let userData: any;
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((data) => {
        userData = data.user;
        console.log(userData);
        setNickname(userData.displayName!);
        setIsLogin(true);
        setUser({ uid: userData.uid, email: userData.email, providerId: 'Google' });
      })
      .catch((err) => {
        console.log(err);
      });

    // 유저가 DB에 있는지 확인
    await API.get(`/api/v1/user/search?email=${userData.email}`).then((res) => {
      console.log(res);
      isUser = res.data;
    });

    const RegisterUser = () => {
      // console.log('-----------------');
      // console.log('isUser', isUser);
      // console.log(userData);
      // console.log(userData.uid);
      // console.log(userData.email);
      if (isUser) {
        API.post(`/api/v1/user/register`, {
          uid: userData.uid,
          email: userData.email,
          provider: 'Google',
        })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    };

    await RegisterUser();

    await API.get(`/api/v1/user/info`, {
      headers: {
        uid: userData.uid,
      },
    })
      .then((res) => {
        console.log(res);
        setWeekly(res.data.weekly_count);
        setTicket(res.data.ticket);
        setNickname(res.data.nickname);
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
