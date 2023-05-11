import styled from 'styled-components';
import { motion } from 'framer-motion';
import submitBtn from '../Assets/etc/submitBtn.png';

export const DialogBox = styled.div<{ color: string }>`
  position: absolute;
  display: flex;
  width: 100vw;
  height: calc(100vh / 3);
  /* text-align: center; */
  filter: drop-shadow(0px -6px 10px rgba(0, 0, 0, 0.5));
  background: ${(props) => props.color};
  bottom: 0px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const DialogNPC = styled.img`
  position: absolute;
  bottom: 0;
  left: 1vw;
  width: 18vw;
  height: auto;
  z-index: 1;
`;

export const DialogName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-bottom: 1vh;
  margin-top: 1vh;
`;

export const DialogContentStyle = styled.div`
  display: flex;
  width: 50vw;
  height: auto;
  font-size: 1.2em;
  white-space: pre-wrap;
  /* &.option {
    width: 30vw;
  } */
`;

export const OptionGroup = styled.div`
  right: 0;
  width: 25vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-content: center;
  justify-content: center;
  /* margin-right: 1vw; */
  /* &.option {
    width: 45vw;
  } */
`;

export const OptionBtn = styled.button`
  background: #fffffe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 1.2em;
  padding: 10px 20px 10px 20px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1daff;
    transform: scale(1.03);
  }
  transition: all 0.1s;
`;

export const InputBox = styled.div`
  /* right: 0; */
  width: 35vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-end;
  justify-content: flex-end;
  text-align: center;
  margin-right: 1vw;
  margin-bottom: 3vh;
`;

export const InputText = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 10px;
  width: 30vw;
  height: 3.3vh;
  /* box-sizing: border-box; */
  font-size: 26px;
  padding: 10px 10px 10px 10px;
  color: white;
  ::placeholder {
    color: white;
  }
`;

export const SubmitBtn = styled.img.attrs({
  src: `${submitBtn}`,
})`
  width: 5vh;
  height: 5vh;
  margin-left: 1vw;
`;

export const CelticDetail = styled.div`
  display: flex;
  width: 40vw;
  height: auto;
  font-size: 1.2em;
  white-space: pre-wrap;
`;

export const NpcBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NpcCharacter = styled(motion.div)`
  width: 30vw;
  > img {
    width: 30vw;
  }
`;
