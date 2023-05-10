import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../select_style';
import Three from './three_spread';
import ThreeStart from './three_spread_animation';
import ThreeNum from './three_spread_num';
import * as common from '../../Common/common_style';
import { DialogNPC } from '../../../Common/common_styled';
import Dialog from '../../../Common/dialog';
import charDialog0 from '../../../Assets/characters/charDialog0.png';
import { InstantDetails } from '../../../Common/conversations';
import { useFortuneStore } from '../../../Store/User/fortune';

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

  const text = InstantDetails(4);
  console.log(text);

  // 0일때 카드 고르기를 할지 논의 필요
  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock>
          <ThreeStart />
        </common.SideBlock>
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
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page1} next={false}>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </Dialog>
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
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={toHome}>홈으로</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page3} next={false}>
          <common.SpreadBtn onClick={toHome}>메인으로</common.SpreadBtn>
        </Dialog>
      </>
    );
  }
  return null;
}

export default ThreeSpread;
