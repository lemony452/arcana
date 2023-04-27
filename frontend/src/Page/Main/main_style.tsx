import React from 'react';
import styled from 'styled-components';

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

// export const NextBtn = styled.img`
//   position: absolute;
//   width: 10vh;
//   height: auto;
//   right: 0.3vw;
//   top: calc(50vh - 5vh);
//   cursor: pointer;
//   z-index: 1;
// `;
