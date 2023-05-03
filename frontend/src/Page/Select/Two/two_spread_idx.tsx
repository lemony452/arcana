import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../select_style';
import Year from './two_spread';
import * as common from '../../Common/common_style';

function YearSpread() {
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

  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock />
        <Year />
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
            <common.DefaultCard>3</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Year />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Year />
                    <common.ExitBtn onClick={showModal}>X</common.ExitBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea>
      </>
    );
  }
  return null;
}

export default YearSpread;
