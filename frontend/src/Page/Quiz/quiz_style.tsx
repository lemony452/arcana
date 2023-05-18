import styled from 'styled-components';
import bgImg from '../../Assets/etc/quizbg.png';

export const FullArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImg});
`;

export const StartArea = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 40px;
`;

export const LeftArea = styled.div`
  width: 33%;
  height: 100%;
  /* background-color: red; */
`;

export const LeftCard = styled(LeftArea)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightArea = styled.div`
  width: 67%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

export const RightTop = styled.div`
  display: flex;
  align-items: center;
`;

export const CharacterArea = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  /* background-color: magenta; */
`;

export const TimerArea = styled.div`
  height: 50%;
  width: 100%;
  font-size: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: skyblue; */
`;

export const QuestionArea = styled.div`
  height: 2.5em;
  width: 70%;
  color: #3d3d3d;
  font-weight: 900;
  font-size: 2em;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background-color: white;
  border-radius: 10px;
  margin-left: 2.5%;
  > p {
    margin: 0 0.5em 0.25em 0.5em;
    display: flex;
    align-items: center;
  }
  /* background-color: skyblue; */
`;

export const PeopleArea = styled.div`
  width: 100%;
  height: 30%;
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: navy; */
`;

export const CardArea = styled.div`
  height: 80%;
  aspect-ratio: 3 / 5;
  background-color: gold;
  display: flex;
`;

type QuestBoxProps = {
  correct: boolean;
  userClicked: boolean;
  quizId: number;
};

export const QuestBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const QuestOption = styled.div<QuestBoxProps>`
  width: 50%;
  height: 25vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  button {
    cursor: pointer;
    user-select: none;
    font-size: 4rem;
    height: 20vh;
    width: 90%;
    /* margin: 5px 0; */
    background-color: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.quizId === 0 ? '#ff74b6' : props.quizId === 1 ? '#ff945e' : props.quizId === 2 ? '#cba1ff' : '#63bdff'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    :hover {
      font-weight: 600;
      border: 6px solid #ffffff;
      box-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
    }
    transition: all 0.2s ease;
  }
`;

export const QuestArea = styled.div`
  height: 45%;
  width: 45%;
  background-color: teal;
`;

export const TimerDivide = styled.div`
  width: 3em;
  height: 2em;
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  border-radius: 100%;
  margin-inline: auto;
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
