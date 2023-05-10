import axios from 'axios';
import React from 'react';

export const API = axios.create({
  baseURL: `http://k8d107.p.ssafy.io:18081`, // 기본 서버 주소
  // baseURL: `http://localhost:3000`, // 기본 서버 주소
  // headers: {
  //   access_token: null,
  // },
});
