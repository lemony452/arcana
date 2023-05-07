import styled from 'styled-components';
import { motion } from 'framer-motion';
import BackgroundCapture from '../../../Assets/etc/background.jpg';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const CardBody = styled(motion.div)`
  display: flex;
  justify-content: center;
  height: calc(100vh / 1.5);
  width: 40vw;
  background-image: url(${BackgroundCapture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-size: 41vw;
`;

export const Card = styled(motion.div)`
  padding: 3vw;
  margin-top: calc(((100vh / 1.5) - (9.23vw * 5 / 3) - 6vw) / 2 - 5vh);
`;

export const CardFront = styled(motion.img)`
  width: 9.23vw;
  aspect-ratio: 3 / 5;
  margin-inline: 2.075vw;
`;

export const CardTitle = styled(motion.div)`
  height: 5vh;
  text-align: center;
  font-size: 3vh;
  margin-inline: auto;
`;

export const Cardcontent = styled(motion.div)`
  max-width: 10vw;
  margin-inline: auto;
  font-size: 1.5vh;
`;
