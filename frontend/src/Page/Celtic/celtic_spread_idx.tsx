import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from './celtic_spread_style';
import Celtic from './celtic_spread';
import CelticStart from './celtic_spread_animation';
import * as common from '../Common/common_style';
import Dialog from '../../Common/dialog';
import { CelticDetails } from '../../Common/conversations';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import { DialogNPC, OptionBtn } from '../../Common/common_styled';
import { API } from '../../API';
import { getLuckyCard } from '../../Common/tarotSelect';
import { useLuckyStore } from '../../Store/User/lucky';
import { saveIndexStore } from '../../Store/User/fortune';

function CelticSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const onNext = () => {
    return setIndex(index + 1);
  };
  const { indexList } = saveIndexStore();
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${indexList[num - 1]}.png`;
  console.log(index);

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
    await navigate('/lucky');
  };

  const text = CelticDetails();
  console.log(text);

  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock>
          <CelticStart />
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
              <Celtic spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic spreadList={indexList} />
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
          {/* <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn> */}
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
            <common.DefaultCard>
              <img src={imgSrc(3)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(4)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Celtic spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page2} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
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
            <common.DefaultCard>
              <img src={imgSrc(5)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(6)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Celtic spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page3} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
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
            <common.DefaultCard>
              <img src={imgSrc(7)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(8)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Celtic spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page4} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
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
            <common.DefaultCard>
              <img src={imgSrc(9)} alt="CardFront" />
            </common.DefaultCard>
            <common.DefaultCard>
              <img src={imgSrc(10)} alt="CardFront" />
            </common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Celtic spreadList={indexList} />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Celtic spreadList={indexList} />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page5} next={false}>
          <OptionBtn onClick={MoveLucky}>럭키!</OptionBtn>
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
