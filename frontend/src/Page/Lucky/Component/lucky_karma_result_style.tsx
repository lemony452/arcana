import styled from 'styled-components';
import { motion } from 'framer-motion';
// import BackGround from '../../../Assets/etc/luckybackground.svg';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57vh;
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
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 1px 1px 3px gray;
`;

export const Card = styled(motion.div)<{ back: string; color: string }>`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  border: 5px ${(props) => props.color} solid;
  border-radius: 30px;
  background-image: url(${(props) => props.back});
  background-position: center bottom;
  background-size: cover;
  background-color: rgb(240, 240, 240);
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
  margin-bottom: 9vh;
  max-width: 25vw;
  line-height: 200%;
  font-size: 3vw;
  font-family: 'NanumDaHaengCe';
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
  font-family: DaysOne;
  letter-spacing: 0.2vw;
  font-weight: bolder;
  color: white;
  -webkit-text-stroke: 1px black;
  z-index: 2;
`;

export const MarkContentSubTitle = styled(motion.div)`
  text-align: center;
  font-size: 0.7vw;
  font-weight: bolder;
  z-index: 2;
`;
