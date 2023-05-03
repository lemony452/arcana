import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpreadBtn } from '../Common/common_style';

function Select() {
  const navigate = useNavigate();
  const MoveTwo = () => {
    navigate('/select/two');
  };
  const MoveThree = () => {
    navigate('/select/three');
  };

  return (
    <>
      <div>let 질문을 받았다 가정하자</div>
      <SpreadBtn onClick={MoveTwo}>2가지 고민</SpreadBtn>
      <SpreadBtn onClick={MoveThree}>3가지 고민</SpreadBtn>
    </>
  );
}

export default Select;
