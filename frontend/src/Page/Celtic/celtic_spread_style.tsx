import styled from 'styled-components';

export const MainBox = styled.div`
  /* background-color: blue; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CelticBox = styled.div`
  /* background-color: red; */
  height: 90%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: space-between;
`;

// 카드 담을 박스들

// 5번카드
export const CelticPartOne = styled.div`
  width: 13.65%;
  height: 100%;
  display: flex;
  align-items: center;
  /* background-color: green; */
`;

// 3,4번 카드 + CelticPartZero
export const CelticPartTwo = styled.div`
  width: 21.3%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

// 1,2번 카드
export const celticPartZero = styled.div`
  width: 100%;
  height: 35.7%;
  /* background-color: lightgreen; */
`;

// 6번 카드
export const CelticPartThree = styled(CelticPartOne)``;

// 7~10번 카드
export const CelticPartFour = styled.div`
  width: 13.65%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

// 카드 비율 3:5

export const CelticOne = styled.div`
  width: 64.08%;
  aspect-ratio: 3 / 5;
  background-color: gold;
  position: relative;
`;

export const CelticTwo = styled.div`
  width: 64.08%;
  aspect-ratio: 3 / 5;
  background-color: orange;
  position: relative;
  left: 35.5%;
  bottom: 27.5%;
`;

export const CelticThree = styled.div`
  width: 64.08%;
  aspect-ratio: 3 / 5;
  background-color: gold;
`;

export const CelticFour = styled(CelticThree)``;

export const CelticFive = styled.div`
  width: 100%;
  aspect-ratio: 3 / 5;
  background-color: gold;
`;

// export const CelticSix = styled(CelticFive)``;

// export const CelticSeven = styled(CelticFive)``;

// export const CelticEight = styled(CelticFive)``;

// export const CelticNine = styled(CelticFive)``;

// export const CelticTen = styled(CelticFive)``;
