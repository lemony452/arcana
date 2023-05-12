import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuizQuestions, QuestionsState } from './api';
import * as quizStyle from './quiz_style';
import * as common from '../Common/common_style';
import { DialogNPC } from '../../Common/common_styled';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import QuestionCard from './question_card';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 2;

function Quiz() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [fail, setFail] = useState(false);
  const [realTime, setRealTime] = useState('00:00:00');

  const navigate = useNavigate();
  const MINUTES_IN_MS = 0;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const currentTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    setRealTime(`${hours}:${minutes}:${seconds}`);
  };

  // const startTimer = () => {
  //   setInterval(currentTime);
  // };

  // startTimer();

  // 퀴즈 시작
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setTimeLeft(MINUTES_IN_MS + 10 * 1000);
    setIndex(index + 1);
  };

  // 퀴즈 풀이시간 카운트 다운s
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log('타이머가 종료되었습니다.');
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  // 퀴즈 정답 확인
  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      if (!correct) setFail(true);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
    setTimeLeft(0);
    setIndex(index + 1);
    console.log('imindex', index);
  };

  // 다음 문제로
  const nextQuestion = () => {
    return [setNumber(number + 1), setTimeLeft(MINUTES_IN_MS + 10 * 1000)];
  };
  console.log('question', number + 1);
  console.log(second);

  // 끝내기 모달
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  // 메인으로 보내기
  const goHome = () => {
    navigate('/');
  };

  // div 영역
  if (index === 0) {
    return (
      <quizStyle.FullArea>
        <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>오늘도 완주를 향해 화이팅!</quizStyle.CharacterDialog>
          {/* 아래 onNext는 백엔드 서버에서 시간 받으면 자동으로 실행되게끔 구현해두어여함 */}
          <quizStyle.CharacterArea onClick={startQuiz}>
            <DialogNPC src={charDialog0} />
          </quizStyle.CharacterArea>
        </quizStyle.LeftArea>
        <quizStyle.RightArea>
          <quizStyle.TimerDivide>시작까지 남은 시간</quizStyle.TimerDivide>
          <quizStyle.TimerDivide>{realTime}</quizStyle.TimerDivide>
          <quizStyle.PeopleArea>현재 참여 인원</quizStyle.PeopleArea>
        </quizStyle.RightArea>
      </quizStyle.FullArea>
    );
  }
  if (index >= 1 && index <= TOTAL_QUESTIONS) {
    if (timeLeft !== 0) {
      return (
        <div>
          {!loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              timeCount={second}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
        </div>
      );
    }
    if (fail === true) {
      return (
        <quizStyle.FullArea>
          {loading ? <p>Loading Questions...</p> : null}
          <quizStyle.LeftArea>
            <quizStyle.CharacterDialog>앗 오답이었어요.</quizStyle.CharacterDialog>
            <quizStyle.CharacterArea onClick={goHome}>틀렸으니 다음기회에</quizStyle.CharacterArea>
          </quizStyle.LeftArea>
          <quizStyle.RightArea>
            <quizStyle.TimerArea>정답자 수를 보여주는 자리 (생존자)</quizStyle.TimerArea>
            <quizStyle.PeopleArea>정답률 그래프가 들어갈 자리</quizStyle.PeopleArea>
          </quizStyle.RightArea>
        </quizStyle.FullArea>
      );
    }
    return (
      <quizStyle.FullArea>
        {loading ? <p>Loading Questions...</p> : null}
        <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>
            {!gameOver ? <p className="score">Score: {score}</p> : null}
          </quizStyle.CharacterDialog>
          <quizStyle.CharacterArea onClick={nextQuestion}>일단 누르면 다음 문제로</quizStyle.CharacterArea>
        </quizStyle.LeftArea>
        <quizStyle.RightArea>
          <quizStyle.TimerArea>정답자 수를 보여주는 자리 (생존자)</quizStyle.TimerArea>
          <quizStyle.PeopleArea>정답률 그래프가 들어갈 자리</quizStyle.PeopleArea>
        </quizStyle.RightArea>
      </quizStyle.FullArea>
    );
  }
  if (index === TOTAL_QUESTIONS + 1) {
    if (timeLeft !== 0) {
      return (
        <div>
          {!loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              timeCount={second}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
        </div>
      );
    }
    return (
      <quizStyle.FullArea>
        <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>모든 문제를 다 풀었어요!</quizStyle.CharacterDialog>
          <quizStyle.CharacterArea onClick={showModal}>
            <DialogNPC src={charDialog0} />
            {modalOpen ? (
              <common.ModalBackdrop>
                <common.QuizModal onClick={(e) => e.stopPropagation()}>
                  보상으로 토큰을 줄게요
                  <common.ToHomeBtn onClick={goHome}>
                    메인으로 <br />
                    돌아가기
                  </common.ToHomeBtn>
                </common.QuizModal>
              </common.ModalBackdrop>
            ) : null}
          </quizStyle.CharacterArea>
        </quizStyle.LeftArea>
        <quizStyle.RightArea>
          <quizStyle.TimerArea>정답자 수를 보여주는 자리 (생존자)</quizStyle.TimerArea>
          <quizStyle.PeopleArea>정답률 그래프가 들어갈 자리</quizStyle.PeopleArea>
        </quizStyle.RightArea>
      </quizStyle.FullArea>
    );
  }

  return null;
}

export default Quiz;
