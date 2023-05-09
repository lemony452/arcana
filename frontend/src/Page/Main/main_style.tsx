import React from 'react';
import styled, { keyframes } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//   display: flex;
// `;

export const TitleBox = styled.div`
  align-content: center;
  flex-direction: column;
  position: absolute;
  top: 32vh;
  left: 3vw;
  text-align: center;
  z-index: 1;
`;

export const Title = styled.div`
  font-size: 7.5vw;
  font-weight: bolder;
`;

export const SubTitle = styled.div`
  font-size: 1.7vw;
  font-weight: bold;
`;

export const StyledCircle = styled.div<{ color: string }>`
  position: absolute;
  right: calc(100vw / 3);
  width: 50vh;
  height: 100vh;
  border-radius: 100vh 0 0 100vh;
  background: ${(props) => props.color || 'beige'};
`;

export const CardBox = styled.div`
  position: absolute;
  right: 0;
  width: calc(100vw / 3);
  height: 100vh;
  filter: drop-shadow(-10px 0px 15px rgba(0, 0, 0, 0.7));
  /* background: pink; */
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
