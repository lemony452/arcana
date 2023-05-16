import React from 'react';
import styled from 'styled-components';

export const LoginModalStyle = styled.div`
  position: absolute;
  width: 20vw;
  height: 19.9vw;
  left: -50vw;
  top: 0;
  z-index: 2;
  /* visibility: hidden; */
  &.gologin {
    left: 50vw;
    top: 50vh;
  }
`;

export const GoogleBtn = styled.img`
  width: 18vw;
  margin-top: 0.5em;
  cursor: pointer;
`;

export const KakaoBtn = styled.img`
  width: 18vw;
  margin-top: 1.5em;
`;

export const LoginBg = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #aaaaaa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2em 0 2em;
  transform: translate(-50%, -50%);
`;

export const LoginMent = styled.div`
  font-family: Poppins;
  font-size: 1.8em;
  color: #717171;
  margin: 0 0 0.5em 0;
  &.sub {
    font-size: 1em;
    margin-bottom: 0;
  }
`;
