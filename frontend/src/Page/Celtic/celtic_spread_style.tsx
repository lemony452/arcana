import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MainBox = styled(motion.div)`
  /* background-color: blue; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const CelticBox = styled(motion.div)`
  /* background-color: red; */
  height: 90%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: space-between;
`;

// 카드 담을 박스들

// 5번카드
export const CelticPartOne = styled(motion.div)`
  width: 13.65%;
  height: 100%;
  display: flex;
  align-items: center;
  /* background-color: green; */
`;

// 3,4번 카드 + CelticPartZero
export const CelticPartTwo = styled(motion.div)`
  width: 21.3%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

// 1,2번 카드
export const celticPartZero = styled(motion.div)`
  width: 100%;
  height: 35.7%;
  /* background-color: lightgreen; */
`;

// 6번 카드
export const CelticPartThree = styled(CelticPartOne)``;

// 7~10번 카드
export const CelticPartFour = styled(motion.div)`
  width: 13.65%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

// 카드 비율 3:5

export const CelticOne = styled(motion.div)`
  width: 64.08%;
  aspect-ratio: 3 / 5;
  position: relative;
  > img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const CelticTwo = styled(motion.div)`
  width: 64.08%;
  aspect-ratio: 3 / 5;
  position: relative;
  left: 35.5%;
  bottom: 27.5%;
  > img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const CelticThree = styled(motion.div)`
  width: 64.08%;
  aspect-ratio: 3 / 5;
  > img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const CelticFour = styled(CelticThree)`
  > img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const CelticFive = styled(motion.div)`
  width: 100%;
  aspect-ratio: 3 / 5;
  > img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

// export const CelticSix = styled(CelticFive)``;

// export const CelticSeven = styled(CelticFive)``;

// export const CelticEight = styled(CelticFive)``;

// export const CelticNine = styled(CelticFive)``;

// export const CelticTen = styled(CelticFive)``;
