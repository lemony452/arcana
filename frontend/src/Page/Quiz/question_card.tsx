import React from 'react';
import { AnswerObject } from './old_index';
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
      {/* Question: {questionNr} / {totalQuestions} */}
      <quizStyle.CardArea>
        <img src={`https://arcana.aeoragy.com/api/v1/images/${cardIdx}.png`} alt="questCard" />
      </quizStyle.CardArea>
    </quizStyle.LeftCard>
    <quizStyle.RightArea>
      <quizStyle.RightTop>
        <quizStyle.QuestionArea>
          <p dangerouslySetInnerHTML={{ __html: question }} />
        </quizStyle.QuestionArea>
        <quizStyle.TimerDivide>{timeCount}</quizStyle.TimerDivide>
      </quizStyle.RightTop>
      <quizStyle.QuestBox>
        {answers.map((answer, idx) => (
          <quizStyle.QuestOption
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            quizId={idx}
          >
            <button type="submit" disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </quizStyle.QuestOption>
        ))}
      </quizStyle.QuestBox>
    </quizStyle.RightArea>
  </quizStyle.FullArea>
);

export default QuestionCard;
