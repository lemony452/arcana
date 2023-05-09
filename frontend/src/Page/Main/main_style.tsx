import React from 'react';
import styled, { keyframes } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//   display: flex;
// `;

export const TitleBox = styled.div`
  align-content: center;
  flex-direction: column;
  position: absolute;
  top: 26vh;
  left: 3vw;
  text-align: center;
  z-index: 1;
`;

export const Title = styled.div`
  font-size: 7.5vw;
  font-weight: bolder;
  color: #09203f;
  text-shadow: 0 1px 1px #c0c0c0, 0 2px 0 #a8a7a6, 0 3px 0 #8b8a89, 0 4px 0px #7d7b7a, 0 5px 0px #686766,
    0 6px 3px #5f5e5d;
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

export const SubTitle = styled.div`
  font-size: 1.7vw;
  font-weight: 600;
  color: black;
  /* animation: ${blink} 3s infinite; */
`;

export const spin = keyframes`
  from { background-position: 0 0; }
  to { background-position: 100% 100%; }
`;

export const StyledCircle = styled.div`
  position: absolute;
  right: calc(100vw / 3);
  /* right: 0; */
  width: 50vh;
  /* width: 90vh; */
  height: 100vh;
  /* border-radius: 100vh; */
  border-radius: 100vh 0 0 100vh;
  /* animation: ${spin} 1s linear infinite; */
  /* transform-origin: 50% 50%; */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%);
  &.time {
    background: linear-gradient(to right, #fff1eb 0%, #ace0f9 100%);
  }
  &.instant {
    background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  }
`;

export const CardBox = styled.div`
  position: absolute;
  right: 0;
  width: calc(100vw / 3);
  height: 100vh;
  filter: drop-shadow(-10px 0px 15px rgba(0, 0, 0, 0.7));
`;

export const StyledCard = styled.img`
  width: calc(100vw / 3);
  height: 100vh;
  cursor: pointer;
  /* object-fit: fill; */
`;

export const CharBox = styled.div`
  position: absolute;
  right: 0;
  width: calc(50vh + calc(100vw / 3));
  height: 100vh;
  overflow: hidden;
`;

const MoveChar = keyframes`
  0% {
    translate: 0;
  }
  100% {
    translate: -30%;
  }
`;

export const StyledChar = styled.img`
  position: absolute;
  left: 50vh;
  top: 50vh;
  transform: translate(-20%, -50%);
  height: 70vh;
  width: auto;

  &.hover {
    animation: ${MoveChar} 3s;
    animation-fill-mode: both;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  }
`;

export const NextBtn = styled.img`
  position: absolute;
  width: 8vh;
  height: auto;
  right: 0.3vw;
  top: calc(50vh - 5vh);
  cursor: pointer;
  z-index: 1;
  /* visibility: hidden; */
  /* &.hover {
    visibility: visible;
  } */
`;

export const PrevBtn = styled.img`
  position: absolute;
  width: 8vh;
  height: auto;
  right: calc(calc(100vw / 3) - 8vh - 0.3vw);
  top: calc(50vh - 5vh);
  cursor: pointer;
  z-index: 1;
  transform: scaleX(-1);
  display: none;
`;

export const SideBtn = styled.img`
  position: absolute;
  width: 3vw;
  height: auto;
  left: 1vw;
  top: 1vh;
  cursor: pointer;
  position: fixed;
  transition: 0.4s ease;
`;
