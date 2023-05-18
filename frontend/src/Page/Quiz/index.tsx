import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { fetchQuizQuestions, QuestionsState } from './api';
import * as quizStyle from './quiz_style';
import * as common from '../Common/common_style';
import { DialogNPC } from '../../Common/common_styled';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import QuestionCard from './question_card';
import { API } from '../../API';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 5;

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
    // 아래에 있는 걸로 퀴즈 시간 조절
    setTimeLeft(MINUTES_IN_MS + 600 * 1000);
    setIndex(index + 1);
  };

  useEffect(() => {
    const serverTime = async () => {
      // console.log('서버시간은 밀리초가 있는 유닉스');
      await API.get(`/api/v1/quiz/servertime`).then((res) => {
        // console.log(res.data);
        // console.log(typeof res.data);
        const serverDate = new Date(Math.floor(res.data / 1000) * 1000);
        console.log(serverDate.getHours(), serverDate.getMinutes(), serverDate.getSeconds());
        // console.log(typeof serverDate.getHours());
        if (serverDate.getHours() < 6) {
          const hours = String(5 - serverDate.getHours()).padStart(2, '0');
          const minutes = String(59 - serverDate.getMinutes()).padStart(2, '0');
          const seconds = String(59 - serverDate.getSeconds()).padStart(2, '0');
          setRealTime(`${hours}:${minutes}:${seconds}`);
        } else if (serverDate.getHours() === 6 && serverDate.getMinutes() === 15 && serverDate.getSeconds() === 0) {
          startQuiz();
        } else {
          const hours = String(29 - serverDate.getHours()).padStart(2, '0');
          const minutes = String(59 - serverDate.getMinutes()).padStart(2, '0');
          const seconds = String(59 - serverDate.getSeconds()).padStart(2, '0');
          setRealTime(`${hours}:${minutes}:${seconds}`);
        }
      });
      // const date = new Date();
    };
    const startTimer = () => {
      setInterval(() => serverTime(), 1000);
    };

    startTimer();
  });

  // 퀴즈 풀이시간 카운트 다운s
  const second = String(Math.floor((timeLeft / 1000) % 9999)).padStart(2, '0');
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
      const correct = questions[number].answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      if (!correct) setFail(true);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].content,
        answer,
        correct,
        correctAnswer: questions[number].answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
    setTimeLeft(0);
    setIndex(index + 1);
    console.log('imindex', index);
  };

  // 다음 문제로
  const nextQuestion = () => {
    return [setNumber(number + 1), setTimeLeft(MINUTES_IN_MS + 600 * 1000)];
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
        <quizStyle.CharacterArea onClick={startQuiz}>
          <DialogNPC src={charDialog0} />
        </quizStyle.CharacterArea>
        {/* <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>오늘도 완주를 향해 화이팅!</quizStyle.CharacterDialog> */}
        {/* 아래 onNext는 백엔드 서버에서 시간 받으면 자동으로 실행되게끔 구현해두어여함 */}
        {/* </quizStyle.LeftArea>
        <quizStyle.RightArea>
          <quizStyle.TimerArea>시작까지 남은 시간</quizStyle.TimerArea>
        </quizStyle.RightArea> */}
        <quizStyle.StartArea>
          <quizStyle.TimerArea>{realTime}</quizStyle.TimerArea>
          <quizStyle.PeopleArea>명 참여중</quizStyle.PeopleArea>
        </quizStyle.StartArea>
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
              cardIdx={questions[number].cardIdx}
              question={questions[number].content}
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
          {/* {loading ? <p>Loading Questions...</p> : null}
          <quizStyle.LeftArea>
            <quizStyle.CharacterDialog>앗 오답이었어요.</quizStyle.CharacterDialog>
            <quizStyle.CharacterArea onClick={goHome}>틀렸으니 다음기회에</quizStyle.CharacterArea>
          </quizStyle.LeftArea>
          <quizStyle.RightArea>
            <quizStyle.TimerArea>정답자 수를 보여주는 자리 (생존자)</quizStyle.TimerArea>
            <quizStyle.PeopleArea>정답률 그래프가 들어갈 자리</quizStyle.PeopleArea>
          </quizStyle.RightArea> */}
          <quizStyle.StartArea>
            <quizStyle.TimerArea>탈락하셨습니다</quizStyle.TimerArea>
            <quizStyle.PeopleArea onClick={goHome}>메인으로 돌아가기</quizStyle.PeopleArea>
          </quizStyle.StartArea>
        </quizStyle.FullArea>
      );
    }
    return (
      <quizStyle.FullArea>
        {/* {loading ? <p>Loading Questions...</p> : null}
        <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>
            {!gameOver ? <p className="score">Score: {score}</p> : null}
          </quizStyle.CharacterDialog>
          <quizStyle.CharacterArea onClick={nextQuestion}>일단 누르면 다음 문제로</quizStyle.CharacterArea>
        </quizStyle.LeftArea>
        <quizStyle.RightArea>
          <quizStyle.TimerArea>정답자 수를 보여주는 자리 (생존자)</quizStyle.TimerArea>
          <quizStyle.PeopleArea>정답률 그래프가 들어갈 자리</quizStyle.PeopleArea>
        </quizStyle.RightArea> */}
        <quizStyle.StartArea>
          <quizStyle.TimerArea>정답입니다!</quizStyle.TimerArea>
          <quizStyle.PeopleArea onClick={nextQuestion}>다음 문제로</quizStyle.PeopleArea>
        </quizStyle.StartArea>
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
              cardIdx={questions[number].cardIdx}
              question={questions[number].content}
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
        {/* <quizStyle.LeftArea>
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
        </quizStyle.RightArea> */}
        <quizStyle.StartArea>
          <quizStyle.TimerArea>모든 문제를 다 풀었어요!</quizStyle.TimerArea>
          <quizStyle.PeopleArea onClick={goHome}>보상으로 토큰을 줄게요</quizStyle.PeopleArea>
        </quizStyle.StartArea>
      </quizStyle.FullArea>
    );
  }

  return null;
}

export default Quiz;
