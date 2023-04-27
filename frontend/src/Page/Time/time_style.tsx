import styled from 'styled-components';

export const MainBox = styled.div`
  /* background-color: blue; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeBox = styled.div`
  /* background-color: red; */
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aspect-ratio: 1 / 1;
`;

export const TimePartOne = styled.div`
  width: 100%;
  height: 33%;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TimePartTwo = styled.div`
  width: 100%;
  height: 33%;
  background-color: violet;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const TimePartThree = styled.div`
  width: 100%;
  height: 33%;
  background-color: magenta;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MonthCard = styled.div`
  height: 90%;
  aspect-ratio: 3 / 5;
  background-color: gold;
`;
