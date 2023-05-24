import axios from 'axios';
import React from 'react';

// export const API = axios.create({
//   baseURL: `http://arcana.aeoragy.com:18081`, // 기본 서버 주소
//   // baseURL: `http://localhost:3000`, // 기본 서버 주소
//   headers: {
//     'Content-Type': 'application/json',
//     // access_token: null,
//   },
// });

export const API = axios.create({
  baseURL: `https://arcana.aeoragy.com`, // 기본 서버 주소
  // baseURL: `http://localhost:3000`, // 기본 서버 주소
  headers: {
    'Content-Type': 'application/json',
    // access_token: null,
  },
});
