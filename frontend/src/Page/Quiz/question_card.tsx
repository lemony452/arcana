import React from 'react';
import { AnswerObject } from './index';
import { Wrapper, ButtonWrapper, QuestionButton } from './question_card_style';
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
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  timeCount,
}) => (
  <quizStyle.FullArea>
    <quizStyle.LeftCard>
      <quizStyle.CardArea />
    </quizStyle.LeftCard>
    <quizStyle.RightArea>
      <quizStyle.TimerDivide>
        <p className="number">
          Question: {questionNr} / {totalQuestions}
        </p>
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
            <quizStyle.QuizButton disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </quizStyle.QuizButton>
          </quizStyle.QuestBox>
        ))}
      </div>
    </quizStyle.RightArea>
  </quizStyle.FullArea>
);

export default QuestionCard;
