import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as quizStyle from './quiz_style';
import * as common from '../Common/common_style';

function Quiz() {
  const navigate = useNavigate();

  // quiz 풀이시간 카운트 다운
  const MINUTES_IN_MS = 0;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');
  // const [timeOut, setTimeOut] = useState(false);

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

  // 문제 번호 증가 및 시간 초기화.
  const [index, setIndex] = useState(0);
  const onNext = () => {
    return [setIndex(index + 1), setTimeLeft(MINUTES_IN_MS + 10 * 1000)];
  };
  console.log('qustion', index);

  // 정답체크 state.
  const [check, setCheck] = useState();
  const onCheck = () => {
    return [setTimeLeft(0)];
  };

  // 문제 정답을 세는 state.
  const [correct, setCorrect] = useState(0);
  const getRight = () => {
    return setCorrect(correct + 1);
  };
  console.log('correct', correct);

  // 끝내기 모달
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  const goHome = () => {
    navigate('/');
  };

  if (index === 0) {
    return (
      <quizStyle.FullArea>
        <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>오늘도 완주를 향해 화이팅!</quizStyle.CharacterDialog>
          {/* 아래 onNext는 백엔드 서버에서 시간 받으면 자동으로 실행되게끔 구현해두어여함 */}
          <quizStyle.CharacterArea onClick={onNext}>일단 누르면 다음 문제로</quizStyle.CharacterArea>
        </quizStyle.LeftArea>
        <quizStyle.RightArea>
          <quizStyle.TimerArea>존야</quizStyle.TimerArea>
          <quizStyle.PeopleArea>인구수가 꽉 찼습니다.</quizStyle.PeopleArea>
        </quizStyle.RightArea>
      </quizStyle.FullArea>
    );
  }
  if (index === 1) {
    if (timeLeft !== 0) {
      return (
        <quizStyle.FullArea>
          <quizStyle.LeftCard>
            <quizStyle.CardArea />
          </quizStyle.LeftCard>
          <quizStyle.RightArea>
            <quizStyle.TimerDivide>{second}</quizStyle.TimerDivide>
            <quizStyle.TimerDivide>문제 만들기 너어어어어무우우우우 귀찮아요!</quizStyle.TimerDivide>
            <quizStyle.QuestBox>
              <quizStyle.QuestArea onClick={onCheck}>A</quizStyle.QuestArea>
              <quizStyle.QuestArea onClick={onCheck}>B</quizStyle.QuestArea>
              <quizStyle.QuestArea onClick={onCheck}>C</quizStyle.QuestArea>
              <quizStyle.QuestArea onClick={onCheck}>D</quizStyle.QuestArea>
            </quizStyle.QuestBox>
          </quizStyle.RightArea>
        </quizStyle.FullArea>
      );
    }
    return (
      <quizStyle.FullArea>
        <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>오늘도 완주를 향해 화이팅! {index}</quizStyle.CharacterDialog>
          <quizStyle.CharacterArea onClick={onNext}>일단 누르면 다음 문제로</quizStyle.CharacterArea>
        </quizStyle.LeftArea>
        <quizStyle.RightArea>
          <quizStyle.TimerArea>존야</quizStyle.TimerArea>
          <quizStyle.PeopleArea>인구수가 꽉 찼습니다.</quizStyle.PeopleArea>
        </quizStyle.RightArea>
      </quizStyle.FullArea>
    );
  }
  if (index === 2) {
    if (timeLeft !== 0) {
      return (
        <quizStyle.FullArea>
          <quizStyle.LeftCard>
            <quizStyle.CardArea />
          </quizStyle.LeftCard>
          <quizStyle.RightArea>
            <quizStyle.TimerDivide>{second}</quizStyle.TimerDivide>
            <quizStyle.TimerDivide>문제 만들기 너어어어어무우우우우 귀찮아요!</quizStyle.TimerDivide>
            <quizStyle.QuestBox>
              <quizStyle.QuestArea onClick={onCheck}>A</quizStyle.QuestArea>
              <quizStyle.QuestArea onClick={onCheck}>B</quizStyle.QuestArea>
              <quizStyle.QuestArea onClick={onCheck}>C</quizStyle.QuestArea>
              <quizStyle.QuestArea onClick={onCheck}>D</quizStyle.QuestArea>
            </quizStyle.QuestBox>
          </quizStyle.RightArea>
        </quizStyle.FullArea>
      );
    }
    return (
      <quizStyle.FullArea>
        <quizStyle.LeftArea>
          <quizStyle.CharacterDialog>오늘도 완주를 향해 화이팅! {index}</quizStyle.CharacterDialog>
          <quizStyle.CharacterArea onClick={showModal}>
            여기가 마지막 페이지
            {modalOpen ? (
              <common.ModalBackdrop>
                <common.QuizModal onClick={(e) => e.stopPropagation()}>
                  토큰 받았으면 집에가 얼른
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
          <quizStyle.TimerArea>존야</quizStyle.TimerArea>
          <quizStyle.PeopleArea>인구수가 꽉 찼습니다.</quizStyle.PeopleArea>
        </quizStyle.RightArea>
      </quizStyle.FullArea>
    );
  }

  return null;
}

export default Quiz;
