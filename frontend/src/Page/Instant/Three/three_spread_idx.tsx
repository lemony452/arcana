import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../select_style';
import Three from './three_spread';
import ThreeNum from './three_spread_num';
import * as common from '../../Common/common_style';

function ThreeSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const onNext = () => {
    return setIndex(index + 1);
  };
  console.log(index);
  const toHome = () => {
    navigate('/');
  };

  // 0일때 카드 고르기를 할지 논의 필요
  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock />
        <Three />
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
            <common.DefaultCard>1</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal>
              <Three />
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea>
      </>
    );
  }

  if (index === 2) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>2</common.DefaultCard>
            <common.DefaultCard>3</common.DefaultCard>
            <common.DefaultCard>4</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal>
              <Three />
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <common.ChatArea>
          <common.SpreadBtn onClick={toHome}>다음</common.SpreadBtn>
        </common.ChatArea>
      </>
    );
  }
  return null;
}

export default ThreeSpread;
