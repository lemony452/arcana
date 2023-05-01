import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from './celtic_spread_style';
import Celtic from './celtic_spread';
import { SpreadBtn } from '../Common/common_style';

function CelticSpread() {
  const navigate = useNavigate();
  const MoveCelticDetail = () => {
    navigate('/celtic/detail');
  };

  return (
    <layer.MainBox>
      <Celtic />
      <SpreadBtn onClick={MoveCelticDetail}>해석보기</SpreadBtn>
    </layer.MainBox>
  );
}

export default CelticSpread;
