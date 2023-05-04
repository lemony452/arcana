import axios from 'axios';
import React from 'react';

export const API = axios.create({
  baseURL: `SERVER_ADDRESS`, // 기본 서버 주소
  headers: {
    access_token: 'access_token',
  },
});
