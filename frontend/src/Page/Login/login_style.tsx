import React from 'react';
import styled from 'styled-components';

export const LoginModalStyle = styled.div`
  position: absolute;
  width: 30vw;
  height: calc(30vw * 1.5);
  left: -50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  z-index: 3;
  &.gologin {
    left: 50vw;
  }
`;

export const GoogleBtn = styled.img`
  position: absolute;
  width: calc(100vw / 5);
  left: 50%;
  top: 74%;
  transform: translate(-50%, -50%);
`;

export const KakaoBtn = styled.img`
  position: absolute;
  width: calc(100vw / 5);
  left: 50%;
  top: 62%;
  transform: translate(-50%, -50%);
`;

export const LoginBg = styled.img`
  width: 30vw;
  height: calc(30vw * 1.5);
`;
