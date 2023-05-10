import styled from 'styled-components';

export const FullArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5438a9;
  display: flex;
`;

export const LeftArea = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: red; */
`;

export const LeftCard = styled(LeftArea)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightArea = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: blue; */
`;

export const CharacterDialog = styled.div`
  width: 100%;
  height: 25%;
  /* background-color: pink; */
`;

export const CharacterArea = styled.div`
  width: 100%;
  height: 75%;
  /* background-color: magenta; */
`;

export const TimerArea = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: skyblue; */
`;

export const PeopleArea = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: navy; */
`;

export const CardArea = styled.div`
  height: 80%;
  aspect-ratio: 3 / 5;
  background-color: gold;
  display: flex;
`;

export const QuestBox = styled(PeopleArea)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const QuestArea = styled.div`
  height: 45%;
  width: 45%;
  background-color: teal;
`;

export const TimerDivide = styled.div`
  width: 100%;
  height: 25%;
  /* background-color: skyblue; */
`;
