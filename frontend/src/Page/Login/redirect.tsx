import React, { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { setCookie } from './cookie';
import { API } from '../../API';
import { userInfoStore } from '../../Store/User/info';

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
  // const code = new URL(window.location.href).searchParams.get('code');
  const location = useLocation();
  const URLcode = location.search.split('=')[1];
  console.log(URLcode);
  const navigate = useNavigate();
  const { setUser, setNickname, setTicket, setWeekly, setIsLogin, user } = userInfoStore();
  let userData: any;
  useEffect(() => {
    const login = async () => {
      console.log('카카오 로그인 중');
      // await window.open(KAKAO_URI);
      // const URLcode = new URL(document.location).searchParams.get('code');
      await API.get(`/api/v1/user/kakao?code=${URLcode}`).then((res) => {
        console.log(res);
        userData = res.data;
        setUser({
          uid: userData.uid,
          email: userData.email,
          providerId: userData.provider,
        });
        setNickname(userData.nickname);
        navigate('/');
        setIsLogin(true);
      });

      await API.get(`/api/v1/user/info`, {
        headers: {
          uid: userData.uid,
        },
      })
        .then((res) => {
          console.log(res);
          setWeekly(res.data.weekly_count);
          setTicket(res.data.ticket);
          // setNickname(res.data.nickname);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    login();
  }, []);

  return <div>로그인중입니다</div>;
}
