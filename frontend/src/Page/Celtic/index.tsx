import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpreadBtn } from '../Common/common_style';

function Celtic() {
  const navigate = useNavigate();
  const MoveCelticSpread = () => {
    navigate('/celtic/spread');
  };

  return (
    <>
      <div>let 질문을 받았다 가정하자</div>
      <SpreadBtn onClick={MoveCelticSpread}>다음</SpreadBtn>
    </>
  );
}

export default Celtic;
