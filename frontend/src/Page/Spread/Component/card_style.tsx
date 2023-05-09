import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Body = styled(motion.div)`
  position: absolute;
  width: 7vw;
  aspect-ratio: 3 / 5;
  perspective: 1100px;
  margin: 5px;
  cursor: pointer;
`;

export const CardBody = styled(motion.div)<{ index: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  /* border: 2px black solid; */
  /* border-radius: 10px; */
`;

export const Front = styled(motion.div)`
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
    width: 7vw;
    aspect-ratio: 3 / 5;
  }
  /* border-radius: 10px; */
`;

export const Back = styled(motion.div)`
  background: royalblue;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 8vw;
  font-size: 2vw;
  backface-visibility: hidden;
  // 뒷면은 사전에 미리 뒤집기
  transform: rotateY(180deg);

  border-radius: 10px;
`;
