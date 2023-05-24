import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as StompJs from '@stomp/stompjs';
import useSound from 'use-sound';
import Swal from 'sweetalert2';
import { fetchQuizQuestions, QuestionsState } from './api';
import * as quizStyle from './quiz_style';
import * as common from '../Common/common_style';
import { DialogNPC } from '../../Common/common_styled';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import QuestionCard from './question_card';
import { API } from '../../API';
import { userInfoStore } from '../../Store/User/info';
import ClockBgm from '../../Assets/bgm/clockBgm.mp3';
import SuccessBgm from '../../Assets/bgm/success.mp3';
import WinBgm from '../../Assets/bgm/win.mp3';
import EventTiket from '../../Assets/etc/eventTicket.png';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 2;

function Quiz() {
  const [win] = useSound(WinBgm);
  const [success] = useSound(SuccessBgm);
  const [clockPlay, { stop }] = useSound(ClockBgm);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [fail, setFail] = useState(false);
  const [realTime, setRealTime] = useState('00:00:00');
  const [hour, setHour] = useState(99); // 시
  const [min, setMin] = useState(99); // 분
  const [sec, setSec] = useState(99); // 초

  const [userNum, setUserNum] = useState(0);

  const navigate = useNavigate();
  const MINUTES_IN_MS = 0;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const { user } = userInfoStore();
  const token = user.uid;
  const [client, changeClient] = useState<any>();
  const [subscription, changeSubscription] = useState<any>();

  // 유저 숫자 불러오기
  const userCount = async () => {
    await API.get(`/api/v1/quiz/userCount?roomId=quiz`).then((res) => {
      console.log(res);
      setUserNum(res.data);
    });
  };

  // 퀴즈 서버 접속

  const connect = async () => {
    if (token === '') {
      return;
    }

    const callback = function (res: any) {
      // called when the client receives a STOMP message from the server
      if (res.body) {
        console.log(user);
        console.log(res.body);
        // alert(res.body);
      } else {
        console.log('got empty message');
      }
    };

    try {
      const clientdata = await new StompJs.Client({
        brokerURL: 'wss://arcana.aeoragy.com/ws/websocket',
        // connectHeaders: {
        //   login: id,
        //   passcode: 'password',
        // },
        debug(str) {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      let subscriptiondata: any;
      clientdata.onConnect = await function () {
        subscriptiondata = clientdata.subscribe('/sub/channel/quiz', callback);
        changeSubscription(subscriptiondata);
      };

      const res = await clientdata.activate();
      console.log(res);
      userCount();
      changeClient(clientdata);
    } catch (error) {
      console.log(error);
    }
  };

  const disConnect = () => {
    if (client === null) {
      return;
    }

    client.deactivate();
  };

  // 접속시 퀴즈라는 이름의 방이 없으면 본인이 호스트가 되어 생성해야 됨
  const send = () => {
    client!.publish({
      destination: '/pub/enter',
      body: JSON.stringify({
        type: 'ENTER',
        uid: token,
        channel: 'quiz',
        data: 'entrance message',
      }),
      headers: { priority: 9 },
    });
  };

  useEffect(() => {
    connect();
    console.log('connected');
  }, []);

  const winOn = () => {
    win();
  };
  useEffect(() => {
    if (index === TOTAL_QUESTIONS + 1) {
      winOn();
    }
  }, []);

  // 이벤트 대기방 타이머 계산
  const loadingTimer = () => {
    if (sec !== 0) {
      console.log('초 감소');
      setSec((prev) => prev - 1);
    } else if (sec === 0 && min !== 0) {
      console.log('분 감소');
      setMin((prev) => prev - 1);
      setSec(59);
    } else if (sec === 0 && min === 0 && hour !== 0) {
      console.log('시 감소');
      setHour((prev) => prev - 1);
      setMin(59);
      setSec(59);
    } else if (sec === 0 && min === 0 && hour === 0) {
      setSec(0);
      setMin(0);
      setHour(0);
    }
  };

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
    setTimeLeft(MINUTES_IN_MS + 10 * 1000);
    setIndex(index + 1);
    send();
  };

  // 서버 시간 불러오기
  const serverTime = async () => {
    console.log('서버시간은 밀리초가 있는 유닉스');
    // await API.get(`/api/v1/quiz/servertime`).then((res) => {
    //   // console.log(res.data);
    //   // console.log(typeof res.data);
    //   const serverDate = new Date(Math.floor(res.data / 1000) * 1000);
    //   console.log(serverDate.getHours(), serverDate.getMinutes(), serverDate.getSeconds());
    //   let hours = serverDate.getHours();
    //   let minutes = serverDate.getMinutes();
    //   let seconds = serverDate.getSeconds();
    //   if (serverDate.getHours() < 13) {
    //     hours = 12 - hours;
    //     minutes = 30 - minutes;
    //     seconds = 59 - seconds;
    //     // setRealTime(`${hours}:${minutes}:${seconds}`);
    //   }
    //   setHour(hours);
    //   setMin(minutes);
    //   setSec(seconds);
    // });
    // 임시
    setHour(0);
    setMin(0);
    setSec(10);
  };

  useEffect(() => {
    serverTime();
  }, []);

  useEffect(() => {
    console.log('시 : 분 : 초', hour, min, sec);
    const timer = setInterval(loadingTimer, 1000);
    if (hour === 0 && min === 0 && sec === 0) {
      console.log('타이머 끝');
      startQuiz(); // 퀴즈 시작
    } else {
      const realHour = String(hour).padStart(2, '0');
      const realMin = String(min).padStart(2, '0');
      const realSec = String(sec).padStart(2, '0');
      setRealTime(`${realHour}:${realMin}:${realSec}`);
    }
    return () => clearInterval(timer);
  }, [hour, min, sec]);

  // useEffect(() => {
  //   const serverTime = async () => {
  //     // console.log('서버시간은 밀리초가 있는 유닉스');
  //     await API.get(`/api/v1/quiz/servertime`).then((res) => {
  //       // console.log(res.data);
  //       // console.log(typeof res.data);
  //       const serverDate = new Date(Math.floor(res.data / 1000) * 1000);
  //       console.log(serverDate.getHours(), serverDate.getMinutes(), serverDate.getSeconds());
  //       // console.log(typeof serverDate.getHours());
  //       if (serverDate.getHours() < 13) {
  //         const hours = String(13 - serverDate.getHours()).padStart(2, '0');
  //         const minutes = String(39 - serverDate.getMinutes()).padStart(2, '0');
  //         const seconds = String(59 - serverDate.getSeconds()).padStart(2, '0');
  //         setRealTime(`${hours}:${minutes}:${seconds}`);
  //       } else if (serverDate.getHours() === 17 && serverDate.getMinutes() === 21 && serverDate.getSeconds() === 0) {
  //         startQuiz();
  //       } else {
  //         const hours = String(28 - serverDate.getHours()).padStart(2, '0');
  //         const minutes = String(59 - serverDate.getMinutes()).padStart(2, '0');
  //         const seconds = String(59 - serverDate.getSeconds()).padStart(2, '0');
  //         setRealTime(`${hours}:${minutes}:${seconds}`);
  //       }
  //     });
  //     // const date = new Date();
  //   };
  //   const startTimer = () => {
  //     setInterval(() => serverTime(), 1000);
  //   };

  //   startTimer();
  // });

  // 퀴즈 풀이시간 카운트 다운s
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
      clockPlay();
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      stop();
      console.log('타이머가 종료되었습니다.');
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  // 다음 문제로
  const nextQuestion = () => {
    return [setNumber(number + 1), setTimeLeft(MINUTES_IN_MS + 10 * 1000)];
  };

  // 퀴즈 정답 확인
  const checkAnswer = async (e: any) => {
    const answer = e.currentTarget.value;
    // Check answer against correct answer
    const correct = questions[number].answer === answer;
    if (!gameOver) {
      // User's answer
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      console.log('score', score);
      console.log('index', index);

      let timerInterval: any;
      await Swal.fire({
        icon: 'question',
        title: '결과가 곧 공개됩니다!',
        // html: '결과 공개까지 {<b></b>} 밀리초 남았습니다.',
        timer: timeLeft,
        // 시간 타이머 바
        timerProgressBar: true,
        // 외부클릭시 모달창 꺼짐 방지
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer()?.querySelector('b');
          console.log('b', b);
          // if문 주석처리하면 돌아감. 하지만 작동 안하면 안 넘어가짐
          // if (typeof b === 'undefined') {
          //   timerInterval = setInterval(() => {
          //     b.textContent = Swal.getTimerLeft();
          //   }, 100);
          // }
        },
        willClose: () => {
          // clearInterval(timerInterval);
        },
      });

      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].content,
        answer,
        correct,
        correctAnswer: questions[number].answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }

    // setTimeLeft(0);
    await setIndex(index + 1);
    if (correct && number < TOTAL_QUESTIONS - 1) {
      await nextQuestion();
    }
    console.log('Highscore', score);
    console.log('imindex', index);
  };

  // clearTimeout(nextQuestion);

  console.log('question', number + 1);
  console.log(second);

  // 끝내기 모달
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  // 메인으로 보내기
  const goHome = () => {
    stop();
    navigate('/');
  };

  const ticket = 1;

  const getTicket = async () => {
    await API.put(`/api/v1/user/reward?uid=${token}&ticket=${ticket}`);
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
          <quizStyle.TimerArea className="timer">{realTime}</quizStyle.TimerArea>
          <quizStyle.PeopleArea>{userNum}명 참여중</quizStyle.PeopleArea>
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
    if (score !== number + 1) {
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
            <quizStyle.TimerArea className="nextQ fail">
              <div className="top">탈락하셨습니다😂</div>
              <div>괜찮아요, 다음에는 더 잘 할 수 있어요.</div>
            </quizStyle.TimerArea>
            <quizStyle.PeopleArea
              className="nextQ fail"
              onClick={() => {
                goHome();
                disConnect();
              }}
            >
              메인으로 돌아가기
            </quizStyle.PeopleArea>
          </quizStyle.StartArea>
        </quizStyle.FullArea>
      );
    }
    if (score === number + 1 && index < TOTAL_QUESTIONS) {
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
            <quizStyle.TimerArea className="nextQ">정답입니다🎉</quizStyle.TimerArea>
            <quizStyle.PeopleArea className="nextQ" onClick={nextQuestion}>
              다음 문제로
            </quizStyle.PeopleArea>
          </quizStyle.StartArea>
        </quizStyle.FullArea>
      );
    }
  }
  if (index === TOTAL_QUESTIONS + 1) {
    // winOn();
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
        <quizStyle.StartArea className="win">
          <quizStyle.TimerArea className="nextQ fail">
            <div className="top">축하합니다!🎉</div>
            <div>모든 문제를 푼 당신에게 드리는 선물입니다!</div>
          </quizStyle.TimerArea>
          <quizStyle.PeopleArea
            className="nextQ success"
            onClick={() => {
              goHome();
              disConnect();
              getTicket();
            }}
          >
            {/* 이벤트 티켓 받기 */}
            <quizStyle.WinEventTicket src={EventTiket} />
          </quizStyle.PeopleArea>
        </quizStyle.StartArea>
      </quizStyle.FullArea>
    );
  }

  return null;
}

export default Quiz;
