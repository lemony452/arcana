import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const QuizModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 280px;
  background: #f4f4f4;
  border: 2px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const QuizBox = styled.button`
  position: absolute;
  width: 185px;
  height: 103.6;
  left: 50%;
  transform: translate(-50%);
  top: 0.5em;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 3;
`;

export const QuizBtn = styled.img`
  position: absolute;
  left: 1em;
  top: 1em;
  :hover {
    opacity: 0.8;
  }
`;

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
  font-size: 7.5vw;
  font-family: DaysOne;
  font-weight: bolder;
  color: white;
  text-shadow: -5px 0 #3b3b3b, 0 5px #3b3b3b, 5px 0 #3b3b3b, 0 -5px #3b3b3b;
`;

export const TitleImg = styled.div`
  > img {
    width: 38vw;
  }
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
`;

export const StyledCircle = styled(motion.div)`
  position: absolute;
  left: calc(calc(100vw / 3) - 30vh);
  top: 5vh;
  width: 86vh;
  height: 86vh;
  border-radius: 100%;
  background: white;
`;

export const Circle2 = styled(motion.div)`
  position: absolute;
  left: calc(calc(100vw / 3) - 4.5vh);
  top: 30.5vh;
  width: 35vh;
  height: 35vh;
  border-radius: 100%;
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

export const Circle3 = styled(motion.div)`
  position: absolute;
  left: calc(calc(100vw / 3) - 5vw);
  top: 15vh;
  width: 15vh;
  height: 15vh;
  border-radius: 100%;
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

export const Circle4 = styled(motion.div)`
  position: absolute;
  left: 5vw;
  top: 28vh;
  width: 40vh;
  height: 40vh;
  border-radius: 100%;
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

export const Circle5 = styled(motion.div)`
  position: absolute;
  left: 2vw;
  top: 48vh;
  width: 20vh;
  height: 20vh;
  border-radius: 100%;
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
  100% {
    left: calc(calc(200vw / 3) - 52vh);
  }
`;

export const StyledChar = styled.img`
  position: absolute;
  left: calc(calc(200vw / 3) - 25vh);
  top: 0;
  transform: rotate(-15deg);
  &.hover {
    animation: ${MoveChar} 2s;
    animation-fill-mode: both;
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

export const ModalBtnBox = styled.div`
  position: absolute;
  top: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 8vh;
`;

export const SideBtn = styled.img`
  width: 2.5vw;
  height: 70%;
  margin-left: 0.5em;
  cursor: pointer;
  transition: 0.4s ease;
  padding-inline: 0.7vw;
  z-index: 1;
`;

export const LoginBtn = styled.button`
  font-size: 1.5em;
  font-weight: bold;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  z-index: 1;
  margin-left: 0.5em;
  padding-inline: 1vw;
  height: 80%;
  background-color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: #3d3d3d;
  &:hover {
    background-color: #f1daff;
    transform: scale(1.05);
  }
  transition: all 0.1s;
  > img {
    margin-left: 7px;
    height: 1em;
  }
`;
