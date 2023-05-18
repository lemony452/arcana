import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DialogBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 43vh;
`;

export const DialogContent = styled.div<{ color: string }>`
  position: absolute;
  display: flex;
  left: 20vw;
  width: 60vw;
  bottom: 2vh;
  height: 32vh;
  /* text-align: center; */
  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.5));
  /* background: ${(props) => props.color}; */
  background-color: rgba(255, 255, 255, 0.8);
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 45px;
  border: 7px solid ${(props) => props.color};
`;

export const DialogNPC = styled.img`
  position: absolute;
  bottom: 0;
  left: 1vw;
  width: 23vw;
  height: auto;
  z-index: 1;
`;

export const DialogName = styled.div<{ color: string }>`
  position: absolute;
  height: 8vh;
  left: 21vw;
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
  border-radius: 4vh;
  z-index: 3;
`;

export const DialogContentStyle = styled.div<{ color: string }>`
  display: flex;
  width: 100%;
  height: auto;
  font-size: 1.2em;
  white-space: pre-wrap;
  padding: 5px 20px;
  margin: 4vh 4vh;
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
  justify-content: space-evenly;
  /* margin-right: 1vw; */
  /* &.option {
    width: 45vw;
  } */
`;

export const OptionBtn = styled.button`
  background: #fffffe;
  border: 3px solid rgb(150, 150, 150);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 1.5em;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #f1daff;
    transform: scale(1.05);
  }
  transition: all 0.1s;
  > img {
    margin-left: 7px;
    height: 1em;
  }
`;

export const InputBox = styled.div`
  /* right: 0; */
  width: 30vw;
  position: absolute;
  bottom: 0;
  height: auto;
  display: flex;
  /* flex-wrap: wrap; */
  /* flex-direction: column; */
  /* align-content: flex-end; */
  justify-content: end;
  text-align: center;
  margin-right: 3vw;
  margin-bottom: 3vh;
`;

export const InputText = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 10px;
  width: 30vw;
  border: 0;
  background: gray;
  height: 3.3vh;
  /* box-sizing: border-box; */
  font-size: 22px;
  padding: 10px 10px 10px 10px;
  color: white;
  ::placeholder {
    color: rgba(255, 255, 255, 0.382);
  }
`;

export const SubmitBtn = styled.button`
  width: 5vh;
  height: 5vh;
  margin-left: 1vw;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  > img {
    width: 4vh;
    height: 4vh;
  }
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
