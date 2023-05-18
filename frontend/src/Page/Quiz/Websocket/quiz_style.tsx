import styled from 'styled-components';

export const FullArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00490d;
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
  height: 80%;
  aspect-ratio: 3 / 5;
  background-color: gold;
  display: flex;
`;

type QuestBoxProps = {
  correct: boolean;
  userClicked: boolean;
};

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
    background-color: blue;
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
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
  width: 100%;
  height: 25%;
  color: ivory;
  font-size: 3em;
  display: flex;
  justify-content: center;
  /* background-color: skyblue; */
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
