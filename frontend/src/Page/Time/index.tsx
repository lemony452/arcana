import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpreadBtn } from '../Common/common_style';

function Time() {
  const navigate = useNavigate();
  const MoveMonth = () => {
    navigate('/time/month');
  };
  const MoveYear = () => {
    navigate('/time/year');
  };

  return (
    <>
      <div>let 질문을 받았다 가정하자</div>
      <SpreadBtn onClick={MoveMonth}>월간</SpreadBtn>
      <SpreadBtn onClick={MoveYear}>올해</SpreadBtn>
    </>
  );
}

export default Time;
