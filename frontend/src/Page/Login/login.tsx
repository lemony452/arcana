import React from 'react';
import { Cookies } from 'react-cookie';
import { LoginBtn } from './login_style';
import googleBtnImg from '../../Assets/etc/googleBtn.png';
import kakaoBtnImg from '../../Assets/etc/kakaoBtn.png';

export function GoogleLogin() {
  // 구글 인가 코드 요청
  const GOOGLE_REDIRECT_URI = `요청하기`;
  const GOOGLE_CLIENT_ID = `요청하기`;
  const GOOGLE_URI = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20openid&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;

  return (
    <a href={GOOGLE_URI}>
      <LoginBtn src={googleBtnImg} />
    </a>
  );
}

export function KakaoLogin() {
  // 카카오 인가 코드 요청
  const KAKAO_CLIENT_ID = `요청`;
  const KAKAO_REDIRECT_URI = `요청`;
  const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <a href={KAKAO_URI}>
      <LoginBtn src={kakaoBtnImg} />
    </a>
  );
}
