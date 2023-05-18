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
  const [incorrectAns, setIncorrectAns] = useState('');
  const [isStop, setIsStop] = useState(false);
  const [intervalId, setIntervalId] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const MINUTES_IN_MS = 0;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  // 퀴즈 시작
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setIsLoading(true); // 문제 번호 띄우는 로딩
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
    // const startTimer = () => {
    //   const temp = setInterval(() => {
    //     serverTime();
    //     if (isStop) {
    //       console.log('interval', temp);
    //       clearInterval(temp);
    //     }
    //   }, 1000);
    // };

    // startTimer();
    let timer;
    if (!isStop) {
      timer = setInterval(() => serverTime(), 1000);
      console.log(timer);
    } else {
      console.log('interval clear!!!!!!!!!!!!!!!!!!!!');
      clearInterval(timer);
    }
  }, []);

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
      console.log(answer);
      API.post(`/api/v1/quiz/answer`, {
        quizIdx: number + 1,
        answerIdx: answer,
      }).then((res) => {
        console.log(res);
      });
      // Check answer against correct answer
      const correct = questions[number].answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      if (!correct) {
        setFail(true);
        setIncorrectAns(answer);
      }
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
    setIsLoading(true);
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
    setIsStop(true);
    navigate('/');
  };

  // div 영역
  if (index === 0) {
    return (
      <quizStyle.FullArea className="waiting">
        <quizStyle.WaitingCard>
          <quizStyle.TimeLeftStyle className="realtime">{realTime}</quizStyle.TimeLeftStyle>
          <quizStyle.TimeLeftStyle className="count">00 명 참여중</quizStyle.TimeLeftStyle>
        </quizStyle.WaitingCard>
        <button style={{ width: '10em', height: '10em' }} type="button" onClick={startQuiz}>
          퀴즈로 넘어가기
        </button>
      </quizStyle.FullArea>
    );
  }
  if (index >= 1 && index <= TOTAL_QUESTIONS) {
    console.log(isLoading);
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 30000);
      return (
        <quizStyle.FullArea className="quizNumber">
          <quizStyle.QuizNumber>
            <div>3</div>
          </quizStyle.QuizNumber>
        </quizStyle.FullArea>
      );
    }

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
          {loading ? <p>Loading Questions...</p> : null}
          <quizStyle.LeftArea>
            <quizStyle.CharacterDialog>앗 오답이었어요.</quizStyle.CharacterDialog>
            <quizStyle.CharacterArea onClick={goHome}>틀렸으니 다음기회에</quizStyle.CharacterArea>
          </quizStyle.LeftArea>
          <quizStyle.RightArea>
            <quizStyle.TimerArea>유저의 오답 : {incorrectAns}</quizStyle.TimerArea>
            <quizStyle.PeopleArea>문제의 정답 : {questions[number].answer}</quizStyle.PeopleArea>
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
