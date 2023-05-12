import React, { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { setCookie } from './cookie';

// export function GoogleRedirect() {
//   // 쿼리 스트링 형태의 인가코드를 백으로 전달해줘야함
//   const code = new URL(window.location.href).searchParams.get('code');
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function GoogleLogin() {
//       const res = await axios.post(`${process.env.REACT_APP_API}/api/user/login/google?code=${code}`);
//       console.log(res);
//       const ACCESS_TOKEN = res.headers.authorization;
//       // const REFRESH_TOKEN = res.headers['refresh-token'];
//       setCookie('token', ACCESS_TOKEN, {
//         path: '/',
//       });
//       // setCookie('refreshToken', REFRESH_TOKEN, {
//       //   path: '/',
//       // });
//       // 로그인 완료되면 메인으로 이동
//       navigate('/', { replace: true });
//     }
//     GoogleLogin();
//   }, []);

//   return <div>로그인중입니다.</div>;
// }

export function KakaoRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    async function KakaoLogin() {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/user/login/kakao?code=${code}`);
      const ACCESS_TOKEN = res.headers.authorization;
      // const REFRESH_TOKEN = res.headers['refresh-token'];
      setCookie('token', ACCESS_TOKEN, {
        path: '/',
      });
      // setCookie('refreshToken', REFRESH_TOKEN, {
      //   path: '/',
      // });
      // 로그인 완료되면 메인으로 이동
      navigate('/', { replace: true });
    }
    KakaoLogin();
  }, []);

  return <div>로그인중입니다.</div>;
}
