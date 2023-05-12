import React, { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { setCookie } from './cookie';
import { API2 } from '../../API';
// import { API } from '../../API';

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

function KakaoRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  const navigate = useNavigate();

  useEffect(() => {
    async function KakaoLogin() {
      console.log('카카오 로그인 중');
      await fetch(`https://k8d107.p.ssafy.io//api/v1/user/kakao?code=${code}`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const ACCESS_TOKEN = res.headers.authorization;
      // const REFRESH_TOKEN = res.headers['refresh-token'];
      // setCookie('token', ACCESS_TOKEN, {
      //   path: '/',
      // });
      // setCookie('refreshToken', REFRESH_TOKEN, {
      //   path: '/',
      // });
      // 로그인 완료되면 메인으로 이동
      navigate('/', { replace: true });
    }
    KakaoLogin();
  }, []);
}
