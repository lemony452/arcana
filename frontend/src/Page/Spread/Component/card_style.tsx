import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SelectedBody = styled(motion.div)`
  position: absolute;
  width: 7vw;
  aspect-ratio: 3 / 5;
  perspective: 1100px;
  margin: 5px;
  cursor: pointer;
`;

export const SelectedCardBody = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  /* border: 2px black solid; */
  /* border-radius: 10px; */
`;

export const SelectedBack = styled(motion.div)`
  /* background: red; */
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 8vw;
  font-size: 2vw;
  backface-visibility: hidden;
  transition: 0.5s;
  > img {
    width: 12.285vh;
    aspect-ratio: 3 / 5;
  }
  /* border-radius: 10px; */
`;

export const FilppedBody = styled(motion.div)<{ size: string }>`
  position: absolute;
  width: ${(props) => props.size};
  aspect-ratio: 3 / 5;
  perspective: 1100px;
  cursor: pointer;
`;

export const FilppedCardBody = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 1s;
  transform-style: preserve-3d;
  /* border: 2px black solid; */
  /* border-radius: 10px; */
`;

export const FilppedBack = styled(motion.div)<{ size: string }>`
  /* background: red; */
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 8vw;
  font-size: 2vw;
  backface-visibility: hidden;
  > img {
    width: ${(props) => props.size};
    aspect-ratio: 3 / 5;
  }
  /* border-radius: 10px; */
`;

export const FilppedFront = styled(motion.div)<{ size: string }>`
  background: royalblue;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 8vw;
  font-size: 2vw;
  backface-visibility: hidden;
  // 앞면은 사전에 미리 뒤집기
  transform: rotateY(180deg);
  border-radius: 10px;
`;
