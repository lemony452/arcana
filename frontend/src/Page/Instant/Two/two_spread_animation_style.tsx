import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TimeBox = styled(motion.div)`
  margin-top: 5vh;
  margin-left: 2.44vw;
  display: flex;
  position: relative;
`;

export const TwoCard = styled(motion.div)`
  position: absolute;
  width: 18vh;
  height: calc(18vh * 5 / 3);
  background-position: center;
  background-size: cover;
  text-align: center;
  line-height: 20vh;
`;
