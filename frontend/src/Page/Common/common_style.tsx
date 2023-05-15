import styled from 'styled-components';

export const ChatArea = styled.div`
  width: 100vw;
  height: 33vh;
  background-color: #ffc1c1;
`;

export const CardArea = styled.div`
  width: 100vw;
  height: 67vh;
  background-color: #f0f0f0;
  display: flex;
`;

export const CardBox = styled.div`
  width: 80%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideBlock = styled.div`
  width: 10%;
  height: 100%;
`;

export const DefaultCard = styled.div`
  height: 70%;
  aspect-ratio: 3 / 5;
  margin: 0 2%;
  position: flex;
  > img {
    height: 100%;
    width: 100%;
  }
`;

export const NextBtn = styled.button`
  width: 100%;
  aspect-ratio: 5 / 3;
`;

export const SpreadBtn = styled.button`
  height: 30%;
  aspect-ratio: 5 / 3;
`;

export const SpreadModal = styled.div`
  width: 75%;
  aspect-ratio: 1 / 1;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ExitBtn = styled.button`
  background-color: #b32626;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 80vw;
  height: 80vh;
  /* background-color: #ffffff; */
  &.replay {
    margin-left: 20vw;
  }
`;

export const ToHomeBtn = styled.button`
  background-color: #26b363;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 60vw;
  height: 60vh;
  background-color: grey;
`;
