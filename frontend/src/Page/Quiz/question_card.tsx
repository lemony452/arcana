import React from 'react';
import { AnswerObject } from './index';
import * as quizStyle from './quiz_style';
import * as common from '../Common/common_style';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
  timeCount: string;
  cardIdx: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  cardIdx,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  timeCount,
}) => (
  <quizStyle.FullArea>
    <quizStyle.LeftCard>
      Question: {questionNr} / {totalQuestions}
      <quizStyle.CardArea>
        <img src={`https://k8d107.p.ssafy.io/api/v1/images/${cardIdx}.png`} alt="questCard" />
      </quizStyle.CardArea>
    </quizStyle.LeftCard>
    <quizStyle.RightArea>
      <quizStyle.TimerDivide>
        <p>{timeCount}</p>
      </quizStyle.TimerDivide>
      <quizStyle.TimerDivide>
        <p dangerouslySetInnerHTML={{ __html: question }} />
      </quizStyle.TimerDivide>
      <div>
        {answers.map((answer) => (
          <quizStyle.QuestBox
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button type="submit" disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </quizStyle.QuestBox>
        ))}
      </div>
    </quizStyle.RightArea>
  </quizStyle.FullArea>
);

export default QuestionCard;
