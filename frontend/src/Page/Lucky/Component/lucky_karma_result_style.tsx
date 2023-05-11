import styled from 'styled-components';
import { motion } from 'framer-motion';
import BackGround from '../../../Assets/etc/luckybackground.svg';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh / 1.5);
`;

export const CardBody = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 45vw;
  height: calc(45vw / 5 * 3);
  padding: 40px;
`;

export const CardFront = styled(motion.img)`
  position: absolute;
  margin-top: calc(((45vw / 5 * 3) - (12.59vw * 5 / 3)) / 2);
  width: 12.59vw;
  aspect-ratio: 3 / 5;
  z-index: 3;
`;

export const Card = styled(motion.div)`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  border: 5px #ffc1c1 solid;
  border-radius: 30px;
  background-image: url(${BackGround});
  background-position: center bottom;
  background-size: cover;
  align-items: end;
  z-index: 1;
`;

// export const CardTitle = styled(motion.div)`
//   height: 5vh;
//   text-align: center;
//   font-size: 3vh;
//   margin-inline: auto;
// `;

export const Cardcontent = styled(motion.div)`
  text-align: center;
  word-break: keep-all;
  margin-right: 2vw;
  margin-bottom: 11vh;
  max-width: 25vw;
  line-height: 200%;
  font-size: 1.7vw;
  z-index: 2;
`;

export const MarkBox = styled(motion.div)`
  display: flex;
  margin-top: 5vh;
  margin-right: 1vw;
  margin-bottom: 3vh;
  justify-content: end;
  align-items: end;
  z-index: 2;
`;

export const MarkImg = styled(motion.img)`
  width: 2.5vw;
  object-fit: contain;
  margin-right: 1vw;
  z-index: 2;
`;

export const MarkContent = styled(motion.div)``;

export const MarkContentTitle = styled(motion.div)`
  text-align: center;
  font-size: 2vw;
  letter-spacing: 0.5vw;
  font-weight: bolder;
  color: #09203f;
  text-shadow: 0 1px 1px #c0c0c0, 0 2px 0 #a8a7a6, 0 3px 0 #8b8a89, 0 4px 0px #7d7b7a, 0 5px 0px #686766,
    0 6px 3px #5f5e5d;
  z-index: 2;
`;

export const MarkContentSubTitle = styled(motion.div)`
  text-align: center;
  font-size: 0.7vw;
  font-weight: bold;
  z-index: 2;
`;
