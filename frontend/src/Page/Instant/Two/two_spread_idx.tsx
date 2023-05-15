import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../select_style';
import Two from './two_spread';
import TwoStart from './two_spread_animation';
import TwoNum from './two_spread_num';
import * as common from '../../Common/common_style';
import { DialogNPC, OptionBtn } from '../../../Common/common_styled';
import Dialog from '../../../Common/dialog';
import charDialog0 from '../../../Assets/characters/charDialog0.png';
import { InstantDetails } from '../../../Common/conversations';
import { saveIndexStore, useFortuneStore } from '../../../Store/User/fortune';

function TwoSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const [nextBtn, setNextBtn] = useState(true);

  const onNext = () => {
    setNextBtn(false);
    setTimeout(() => {
      setNextBtn(true);
    }, 4000);
    return setIndex(index + 1);
  };
  const toHome = () => {
    navigate('/');
  };
  console.log(index);
  const { indexList } = saveIndexStore();
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${indexList[num - 1]}.png`;

  const text = InstantDetails(3);
  console.log(text);

  // 0일때 카드 고르기를 할지 논의 필요
  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock>
          <TwoStart />
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
              <Two />
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
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
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal>
              <Two />
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={toHome}>홈으로</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page2} next={false}>
          {nextBtn && <OptionBtn onClick={toHome}>메인으로</OptionBtn>}
        </Dialog>
      </>
    );
  }
  return null;
}

export default TwoSpread;
