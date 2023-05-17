import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Body = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

export const NumBody = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: end;
  left: 50vw;
  bottom: calc(100vh / 3 + 3vh);
`;

export const Num = styled(motion.div)`
  font-size: 11vh;
`;

export const CardBody = styled(motion.div)`
  margin-top: 10vh;
  margin-left: 47vw;
`;

export const Button = styled.button`
  align-self: center;
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  > img {
    width: 32px;
    height: 32px;
  }
`;