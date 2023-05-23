import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { GoogleBtn, KakaoBtn } from './login_style';
import googleBtnImg from '../../Assets/etc/googleBtn.png';
import kakaoBtnImg from '../../Assets/etc/kakaoBtn.png';
import { userInfoStore } from '../../Store/User/info';
import { API } from '../../API';
// import 'dotenv/config';

export function GoogleLogin() {
  // 구글 인가 코드 요청
  const { setProfileChar, setUser, setIsLogin, setNickname, setWeekly, setTicket, setGoLogin } = userInfoStore();
  let isUser = false;
  let userData: any;
  const login = async () => {
    const num = Math.floor(Math.random() * 3); // 0, 1, 2 난수
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((data) => {
        userData = data.user;
        console.log(userData);
        setNickname(userData.displayName!);
        setIsLogin(true);
        setUser({ uid: userData.uid, email: userData.email, providerId: 'Google' });
        setProfileChar(num);
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

    setGoLogin(false);
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

  return <GoogleBtn onClick={login} src={googleBtnImg} />;
}

export function KakaoLogin() {
  const { REACT_APP_KAKAO_CLIENT_ID } = process.env;
  // 카카오 인가 코드 요청
  const KAKAO_REDIRECT_URI = `https://k8d107.p.ssafy.io/authkakao`;
  const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  return (
    <a href={KAKAO_URI}>
      <KakaoBtn src={kakaoBtnImg} />
    </a>
  );
}
