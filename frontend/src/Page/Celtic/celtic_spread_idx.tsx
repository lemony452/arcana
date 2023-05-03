import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from './celtic_spread_style';
import Celtic from './celtic_spread';
import * as common from '../Common/common_style';
import Dialog from '../../Common/dialog';
import { useFortuneStore } from '../../Store/User/fortune';
import { CelticDetails } from '../../Common/conversations';
// import { DialogBox, DialogNPC, DialogName, DialogContent } from '../../Common/common_styled';

function CelticSpread() {
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
  const MoveLucky = () => {
    navigate('/lucky');
  };

  const { fortune, tarotNumList } = useFortuneStore();
  console.log(tarotNumList);

  const text = CelticDetails();
  console.log(text);

  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock />
        <Celtic />
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
              <Celtic />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic />
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
              <Celtic />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <Dialog content={text.page2} next={false}>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </Dialog>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
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
              <Celtic />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <Dialog content={text.page3} next={false}>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </Dialog>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
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
            <common.DefaultCard>8</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Celtic />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <Dialog content={text.page4} next={false}>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </Dialog>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
      </>
    );
  }
  if (index === 5) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>9</common.DefaultCard>
            <common.DefaultCard>10</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Celtic />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <Dialog content={text.page5} next={false}>
          <common.SpreadBtn onClick={MoveLucky}>럭키!</common.SpreadBtn>
        </Dialog>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
      </>
    );
  }
  return null;
}

export default CelticSpread;
