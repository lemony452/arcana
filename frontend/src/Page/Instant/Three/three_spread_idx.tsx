import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../select_style';
import Three from './three_spread';
import ThreeStart from './three_spread_animation';
import ThreeNum from './three_spread_num';
import * as common from '../../Common/common_style';
import { DialogNPC, OptionBtn } from '../../../Common/common_styled';
import Dialog from '../../../Common/dialog';
import charDialog2 from '../../../Assets/characters/kitty.png';
import { InstantDetails } from '../../../Common/conversations';
import { saveIndexStore, useFortuneStore } from '../../../Store/User/fortune';

function ThreeSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const [nextBtn, setNextBtn] = useState(true);

  const onNext = () => {
    setNextBtn(false);
    setTimeout(() => {
      setNextBtn(true);
    }, 3000);
    return setIndex(index + 1);
  };
  console.log(index);
  const toHome = () => {
    navigate('/');
  };

  const { indexList } = saveIndexStore();
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${indexList[num - 1]}.png`;

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
          <OptionBtn onClick={onNext}>해석보기</OptionBtn>
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
            <common.DefaultCard>
              <img src={imgSrc(1)} alt="CardFront" />
            </common.DefaultCard>
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
        <DialogNPC src={charDialog2} />
        <Dialog content={text.page1} next={false}>
          {nextBtn && <OptionBtn onClick={onNext}>다음</OptionBtn>}
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
            <common.DefaultCard>
              <img src={imgSrc(2)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(3)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(4)} alt="CardFront" />
            </common.DefaultCard>
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
        <DialogNPC src={charDialog2} />
        <Dialog content={text.page3} next={false}>
          {nextBtn && <OptionBtn onClick={toHome}>메인으로</OptionBtn>}
        </Dialog>
      </>
    );
  }
  return null;
}

export default ThreeSpread;
