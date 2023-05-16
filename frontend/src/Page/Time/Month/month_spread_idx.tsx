import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../time_style';
import Month from './month_spread';
import MonthStart from './month_spread_animation';
import * as common from '../../Common/common_style';
import Dialog from '../../../Common/dialog';
import charDialog1 from '../../../Assets/characters/charDialog1.png';
import { DialogNPC, OptionBtn } from '../../../Common/common_styled';
import { MonthDetails } from '../../../Common/conversations';
import { useLuckyStore } from '../../../Store/User/lucky';
import { getLuckyCard } from '../../../Common/tarotSelect';
import { API } from '../../../API';
import { saveIndexStore } from '../../../Store/User/fortune';

function MonthSpread() {
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
  console.log(index);
  const { indexList } = saveIndexStore();
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${indexList[num - 1]}.png`;

  const [modalOpen, setModalOpen] = useState(false); // modal
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  const { lucky, setLuckyMent, setLucky } = useLuckyStore();
  const MoveLucky = async () => {
    // 럭키카드 api
    await API.get(`/api/v1/tarot/lucky/`).then((res: any) => {
      console.log(res);
      // setLuckyNum(res.data.card.idx);
      // setLuckyName(res.data.card.name);
      console.log('lucky api 결과 : ', res.data);
      setLucky({
        card: res.data.card,
        ment: res.data.luckyment,
      });
      setLuckyMent(res.data.luckyment);
    });
    await navigate('/lucky', { state: 'time' });
  };

  const text = MonthDetails();
  // console.log(text);

  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock>
          <MonthStart />
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
            <common.DefaultCard>
              <img src={imgSrc(2)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog1} />
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
              <img src={imgSrc(3)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(4)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog1} />
        <Dialog content={text.page2} next={false}>
          {nextBtn && <OptionBtn onClick={onNext}>다음</OptionBtn>}
        </Dialog>
      </>
    );
  }
  if (index === 3) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>
              <img src={imgSrc(5)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(6)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog1} />
        <Dialog content={text.page3} next={false}>
          {nextBtn && <OptionBtn onClick={onNext}>다음</OptionBtn>}
        </Dialog>
      </>
    );
  }
  if (index === 4) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>
              <img src={imgSrc(7)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={MoveLucky}>럭키!</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog1} />
        <Dialog content={text.page4} next={false}>
          {nextBtn && <OptionBtn onClick={MoveLucky}>럭키!</OptionBtn>}
        </Dialog>
      </>
    );
  }
  return null;
}

export default MonthSpread;
