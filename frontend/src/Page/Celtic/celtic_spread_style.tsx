import styled from 'styled-components';

export const MainBox = styled.div`
  background-color: blue;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CelticBox = styled.div`
  background-color: red;
  width: 90vh;
  height: 90vh;
  display: flex;
`;

// 카드 비율 3:5
const CelticCard = styled.div`
  background-color: gold;
  height: 22.75%;
  width: 13.65%;
`;

// 카드 10개

export const CelticOne = styled(CelticCard)``;

export const CelticTwo = styled(CelticCard)``;

export const CelticThree = styled(CelticCard)``;

export const CelticFour = styled(CelticCard)``;

export const CelticFive = styled(CelticCard)``;

export const CelticSix = styled(CelticCard)``;

export const CelticSeven = styled(CelticCard)``;

export const CelticEight = styled(CelticCard)``;

export const CelticNine = styled(CelticCard)``;

export const CelticTen = styled(CelticCard)``;
