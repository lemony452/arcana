import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../time_style';
import Month from './month_spread';
import * as common from '../../Common/common_style';
import Dialog from '../../../Common/dialog';
import charDialog0 from '../../../Assets/characters/charDialog0.png';
import { DialogNPC } from '../../../Common/common_styled';
import { MonthDetails } from '../../../Common/conversations';
import { useLuckyStore } from '../../../Store/User/lucky';
import { getLuckyCard } from '../../../Common/tarotSelect';
import { API } from '../../../API';

function MonthSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const onNext = () => {
    return setIndex(index + 1);
  };
  console.log(index);

  const [modalOpen, setModalOpen] = useState(false); // modal
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  const { setLuckyIdx, setLuckyMent } = useLuckyStore();
  const MoveLucky = async () => {
    // 럭키카드 api
    const luckyIdx = getLuckyCard();
    console.log('럭키카드 번호 : ', luckyIdx);
    setLuckyIdx(luckyIdx);
    // res : { "card_idx" : 0, "luckyment": ""}
    const res = await API.get(`/api/tarot/lucky/${luckyIdx}`, {
      params: luckyIdx,
    });
    console.log(res);
    // setLuckyMent(res); // 수정필요
    navigate('/lucky');
  };

  const text = MonthDetails();
  console.log(text);

  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock />
        <Month />
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
            <common.DefaultCard>2</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
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
            <common.DefaultCard>3</common.DefaultCard>
            <common.DefaultCard>4</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
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
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
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
            <common.DefaultCard>5</common.DefaultCard>
            <common.DefaultCard>6</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
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
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
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
            <common.DefaultCard>7</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
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
        <Dialog content={text.page4} next={false}>
          <common.SpreadBtn onClick={MoveLucky}>럭키!</common.SpreadBtn>
        </Dialog>
      </>
    );
  }
  return null;
}

export default MonthSpread;
