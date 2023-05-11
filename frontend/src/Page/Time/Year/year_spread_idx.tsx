import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../time_style';
import Year from './year_spread';
import YearStart from './year_spread_animation';
import * as common from '../../Common/common_style';
import Dialog from '../../../Common/dialog';
import charDialog0 from '../../../Assets/characters/charDialog0.png';
import { DialogNPC, OptionBtn } from '../../../Common/common_styled';
import { YearDetails } from '../../../Common/conversations';
import { useLuckyStore } from '../../../Store/User/lucky';
import { getLuckyCard } from '../../../Common/tarotSelect';
import { API } from '../../../API';
import { useFortuneStore } from '../../../Store/User/fortune';

function YearSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const onNext = () => {
    return setIndex(index + 1);
  };
  console.log(index);
  const { fortune } = useFortuneStore();
  console.log(fortune);
  const [modalOpen, setModalOpen] = useState(false); // modal
  const showModal = () => {
    setModalOpen(!modalOpen);
  };
  const { setLuckyNum, setLuckyName, setLuckyMent } = useLuckyStore();
  const MoveLucky = async () => {
    // 럭키카드 api
    await API.get(`/api/v1/tarot/lucky/`).then((res: any) => {
      console.log(res);
      setLuckyNum(res.data.card.idx);
      setLuckyName(res.data.card.name);
      setLuckyMent(res.data.luckyment);
    });
    await navigate('/lucky');
  };

  const text = YearDetails();
  console.log(text);

  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock>
          <YearStart />
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
            <common.DefaultCard>1</common.DefaultCard>
            <common.DefaultCard>2</common.DefaultCard>
            <common.DefaultCard>3</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Year />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Year />
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
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page1} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
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
            <common.DefaultCard>4</common.DefaultCard>
            <common.DefaultCard>5</common.DefaultCard>
            <common.DefaultCard>6</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Year />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Year />
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
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page2} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
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
            <common.DefaultCard>7</common.DefaultCard>
            <common.DefaultCard>8</common.DefaultCard>
            <common.DefaultCard>9</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Year />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Year />
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
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page3} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
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
            <common.DefaultCard>10</common.DefaultCard>
            <common.DefaultCard>11</common.DefaultCard>
            <common.DefaultCard>12</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Year />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Year />
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
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page4} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
        </Dialog>
      </>
    );
  }
  if (index === 5) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>13</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Year />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Year />
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
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page5} next={false}>
          <OptionBtn onClick={MoveLucky}>럭키!</OptionBtn>
        </Dialog>
      </>
    );
  }
  return null;
}

export default YearSpread;
