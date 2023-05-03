import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../select_style';
import Two from './two_spread';
import TwoNum from './two_spread_num';
import * as common from '../../Common/common_style';

function TwoSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const onNext = () => {
    return setIndex(index + 1);
  };
  console.log(index);

  // 0일때 카드 고르기를 할지 논의 필요
  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock />
        <Two />
        <common.SideBlock>
          <common.NextBtn onClick={onNext}>해석보기</common.NextBtn>
        </common.SideBlock>
      </layer.MainBox>
    );
  }

  if (index === 1) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <Two />
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal>
              <TwoNum />
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <common.ChatArea>
          <common.SpreadBtn>다음</common.SpreadBtn>
        </common.ChatArea>
      </>
    );
  }
  return null;
}

export default TwoSpread;
