import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TimeBox = styled(motion.div)`
  margin-top: 5vh;
  margin-left: 2.44vw;
  display: flex;
  position: relative;
`;

export const ThreeCard = styled(motion.div)`
  /* background-color: gold; */
  position: absolute;
  width: 24.3vh;
  height: calc(24.3vh * 5 / 3);
  background-position: center;
  background-size: cover;
  text-align: center;
  line-height: 20vh;
`;
