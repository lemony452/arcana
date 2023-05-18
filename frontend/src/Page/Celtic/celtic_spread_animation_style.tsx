import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CelticBox = styled(motion.div)`
  margin-top: 5vh;
  margin-left: 2.44vw;
  display: flex;
  position: relative;
`;

export const CelticCard = styled(motion.div)`
  position: absolute;
  width: 12.285vh;
  height: calc(12.285vh * 5 / 3);
  background-position: center;
  background-size: cover;
  text-align: center;
  line-height: 20vh;
`;
