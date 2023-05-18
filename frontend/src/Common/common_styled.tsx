import styled from 'styled-components';
import { motion } from 'framer-motion';
import submitBtn from '../Assets/etc/submitBtn.png';

export const DialogBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: calc(100vh / 3);
`;

export const DialogContent = styled.div<{ color: string }>`
  position: absolute;
  display: flex;
  left: 20vw;
  width: 60vw;
  bottom: 2vh;
  height: calc(100vh / 3 - 8vh);
  /* text-align: center; */
  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.5));
  /* background: ${(props) => props.color}; */
  background-color: rgba(255, 255, 255, 0.7);
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 30px;
  border: 7px solid ${(props) => props.color};
`;

export const DialogNPC = styled.img`
  position: absolute;
  bottom: 0;
  left: 1vw;
  width: 18vw;
  height: auto;
  z-index: 1;
`;

export const DialogName = styled.div<{ color: string }>`
  position: absolute;
  left: 23vw;
  width: 12vw;
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  line-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.color};
  border-radius: 24px;
  z-index: 3;
`;

export const DialogContentStyle = styled.div<{ color: string }>`
  display: flex;
  width: 100%;
  height: auto;
  font-size: 1.2em;
  white-space: pre-wrap;
  padding: 5px 20px;
  margin: 20px 10px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: ${(props) => props.color}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
  /* &.option {
    width: 30vw;
  } */
`;

export const OptionGroup = styled.div`
  right: 0;
  width: 20vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-content: center;
  justify-content: space-around;
  /* margin-right: 1vw; */
  /* &.option {
    width: 45vw;
  } */
`;

export const OptionBtn = styled.button`
  background: #fffffe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 1em;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f1daff;
    transform: scale(1.05);
  }
  transition: all 0.1s;
`;

export const InputBox = styled.div`
  /* right: 0; */
  width: 20vw;
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
