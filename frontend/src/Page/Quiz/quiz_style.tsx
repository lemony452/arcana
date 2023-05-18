import styled from 'styled-components';
import quizBgImg from '../../Assets/quiz/quizBgImg.png';

export const FullArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00490d;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${quizBgImg});
  &.waiting {
    position: relative;
  }
  &.quizNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    /* opacity: 0.4; */
    /* background: rgba(0, 0, 0, 0.5); */
  }
  &.questionCard {
    justify-content: space-around;
    align-items: center;
  }
`;

export const TimeLeftStyle = styled.div`
  font-weight: bold;
  &.count {
    margin-top: 0.4em;
    font-size: 4.5em;
  }
  &.realtime {
    font-family: Digital;
    font-size: 8em;
  }
`;

export const QuizNumber = styled.div`
  display: flex;
  width: 80vh;
  height: 80vh;
  background: #f4f4f4;
  border-radius: 100%;
  font-size: 20em;
  font-weight: 800;
  color: #ffc700;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const WaitingCard = styled.div`
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 61.4vw;
  height: 58.2vh;
  background: #f4f4f4;
  border: 5px solid #eaeaea;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 98px;
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
  width: auto;
  /* height: 100%; */
  /* background-color: blue; */
`;

export const CharacterDialog = styled.div`
  width: 100%;
  height: 25%;
  color: coral;
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`;

export const CharacterArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75%;
  /* background-color: magenta; */
`;

export const TimerArea = styled.div`
  width: 100%;
  height: 50%;
  color: ivory;
  font-size: 3em;
  display: flex;
  justify-content: center;
  /* background-color: skyblue; */
`;

export const PeopleArea = styled.div`
  width: 100%;
  height: 50%;
  color: ivory;
  font-size: 3em;
  display: flex;
  justify-content: center;
  /* background-color: navy; */
`;

export const CardArea = styled.div`
  height: 86.6vh;
  aspect-ratio: 3 / 5;
  /* background-color: gold; */
  display: flex;
`;

type QuestBoxProps = {
  correct: boolean;
  userClicked: boolean;
  num: number;
};

export const QuestBoxDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const QuestBox = styled.div<QuestBoxProps>`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    height: 100px;
    width: 45%;
    /* margin: 5px 0; */
    background-color: ${(props) => (props.num === 0 ? '#FF74B6' : '#ffff')};
    background-color: ${(props) => (props.num === 1 ? '#FF945E' : '#ffff')};
    background-color: ${(props) => (props.num === 2 ? '#CBA1FF' : '#ffff')};
    background-color: ${(props) => (props.num === 3 ? '#63BDFF' : '#ffff')};
    border: 15px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const QuestArea = styled.div`
  height: 45%;
  width: 45%;
  background-color: teal;
`;

export const TimerDivide = styled.div`
  width: 21.6vh;
  height: 21.6vh;
  color: #ffff;
  font-size: 4.5em;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc700;
  border-radius: 100%;
`;

export const Question = styled.div`
  width: 50vw;
  height: 15vh;
  background: white;
  font-size: 2.8em;
  font-weight: 600;
  background: #f4f4f4;
  border: 5px solid #eaeaea;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// cv한거
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;

export const QuizButton = styled.button`
  width: 200px;
  height: 100px;
  background-color: indigo;
`;
