import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Body = styled.div`
  background-color: #faf7f7;
  height: 100vh;
`;

export const Dialog = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0px;
  background: linear-gradient(to left, #ffc1c1, white);
  height: 33vh;
`;

export const Name = styled.div`
  margin-left: 300px;
  width: 120px;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`;

export const Content = styled.div`
  margin-left: 300px;
  font-size: 24px;
  width: 400px;
`;

export const Gom = styled.div`
  > img {
    height: 50vh;
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
`;

export const Btn = styled(motion.button)`
  height: 2.4em;
  cursor: pointer;
  background: #fffffe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 1.2em;
  padding: 10px 20px 10px 20px;
  margin-right: 50px;
`;

export const ButtonBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
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

export const HomeButton = styled.button`
  align-self: end;
  margin-top: 6vh;
  margin-bottom: 1vh;
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  > img {
    width: 32px;
    height: 32px;
  }
`;
