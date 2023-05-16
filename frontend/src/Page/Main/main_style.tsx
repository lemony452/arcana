import React from 'react';
import styled, { keyframes } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//   display: flex;
// `;

export const MainBg = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff6a3;
  &.time {
    background: #ffe2bf;
  }
  &.instant {
    background: #ffd8dc;
  }
`;

export const TitleBox = styled.div`
  align-content: center;
  flex-direction: column;
  position: absolute;
  top: 38vh;
  left: 6vw;
  text-align: center;
  z-index: 1;
`;

export const Title = styled.div`
  /* font-size: 6.7em; */
  font-size: 7.5vw;
  font-family: DaysOne;
  font-weight: bolder;
  color: white;
  /* text-shadow: -5px 0px black, 0px 5px black, 5px 0px black, 0px -5px black; */
  -webkit-text-stroke: 3px black;
  letter-spacing: -0.07em;
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

export const SubTitle = styled.div`
  font-size: 1.8vw;
  font-weight: bolder;
  color: black;
  /* animation: ${blink} 3s infinite; */
  margin-top: -1em;
`;

export const StyledCircle = styled.div`
  position: absolute;
  left: calc(calc(100vw / 3) - 30vh);
  top: 5vh;
  width: 86vh;
  height: 86vh;
  /* border-radius: 100vh; */
  border-radius: 100%;
  /* transform-origin: 50% 50%; */
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); */
  background: white;
`;

export const Circle2 = styled.div`
  position: absolute;
  left: calc(calc(100vw / 3) - 4.5vh);
  top: 30.5vh;
  width: 35vh;
  height: 35vh;
  /* border-radius: 100vh; */
  border-radius: 100%;
  /* transform-origin: 50% 50%; */
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); */
  &.celtic {
    background: #cba1ff;
  }
  &.time {
    background: #ff945e;
  }
  &.instant {
    background: #ff74b6;
  }
`;

export const Circle3 = styled.div`
  position: absolute;
  left: calc(calc(100vw / 3) - 5vw);
  top: 15vh;
  width: 15vh;
  height: 15vh;
  /* border-radius: 100vh; */
  border-radius: 100%;
  /* transform-origin: 50% 50%; */
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); */
  &.celtic {
    background: #cba1ff;
  }
  &.time {
    background: #ff945e;
  }
  &.instant {
    background: #ff74b6;
  }
`;

export const Circle4 = styled.div`
  position: absolute;
  left: 5vw;
  top: 28vh;
  width: 40vh;
  height: 40vh;
  /* border-radius: 100vh; */
  border-radius: 100%;
  /* transform-origin: 50% 50%; */
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); */
  &.celtic {
    background: #cba1ff;
  }
  &.time {
    background: #ff945e;
  }
  &.instant {
    background: #ff74b6;
  }
`;

export const Circle5 = styled.div`
  position: absolute;
  left: 2vw;
  top: 48vh;
  width: 20vh;
  height: 20vh;
  /* border-radius: 100vh; */
  border-radius: 100%;
  /* transform-origin: 50% 50%; */
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); */
  &.celtic {
    background: #cba1ff;
  }
  &.time {
    background: #ff945e;
  }
  &.instant {
    background: #ff74b6;
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
  width: 100vw;
  /* width: calc(50vh + calc(100vw / 3)); */
  height: 100vh;
  overflow: hidden;
`;

const MoveChar = keyframes`
  0% {
    translate: 0;
  }
  100% {
    translate: -28%;
    transform: rotate(-28deg);
  }
`;

const MoveKitty = keyframes`
  0% {
    /* translate: 0; */
  }
  100% {
    left: calc(calc(200vw / 3) - 52vh);
  }
`;

export const StyledChar = styled.img`
  position: absolute;
  left: calc(calc(200vw / 3) - 25vh);
  top: 0;
  /* transform: translate(-100%, -50%); */
  transform: rotate(-15deg);
  /* height: 70vh;
  width: auto; */
  &.hover {
    animation: ${MoveChar} 2s;
    animation-fill-mode: both;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  }
  &.kittyHover {
    animation: ${MoveKitty} 1s;
    animation-fill-mode: both;
  }
  &#draco {
    top: 50vh;
    left: 90vw;
    width: 60vh;
    height: 45vh;
    /* z-index: 5; */
    transform: rotate(0deg);
  }
  &#toast {
    top: 15vh;
    width: 64vh;
    height: 80vh;
  }
  &#kitty {
    top: 15vh;
    width: 64vh;
    height: 80vh;
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

export const LoginBtn = styled.button`
  position: absolute;
  top: 0.3em;
  left: 0.3em;
  font-size: 1.5em;
  font-weight: bold;
  border: 0;
  background: transparent;
  cursor: pointer;
  z-index: 3;
`;
