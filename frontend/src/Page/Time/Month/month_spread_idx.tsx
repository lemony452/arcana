import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../time_style';
import Month from './month_spread';
import MonthStart from './month_spread_animation';
import * as common from '../../Common/common_style';
import Dialog from '../../../Common/dialog';
import charDialog1 from '../../../Assets/characters/toast.gif';
import { DialogNPC, OptionBtn } from '../../../Common/common_styled';
import { MonthDetails } from '../../../Common/conversations';
import { useLuckyStore } from '../../../Store/User/lucky';
import { API } from '../../../API';
import { saveIndexStore } from '../../../Store/User/fortune';
import next from '../../../Assets/etc/nextButton.png';

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

  const { indexList } = saveIndexStore();
  const imgSrc = (num: number) => `https://arcana.aeoragy.com/api/v1/images/${indexList[num - 1]}.png`;

  const [modalOpen, setModalOpen] = useState(false); // modal
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  const { setLuckyMent, setLucky } = useLuckyStore();
  const MoveLucky = async () => {
    // 럭키카드 api
    await API.get(`/api/v1/tarot/lucky/`).then((res: any) => {
      console.log(res);
      // setLuckyNum(res.data.card.idx);
      // setLuckyName(res.data.card.name);
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
            <common.SpreadModal>
              <OptionBtn onClick={showModal}>카드</OptionBtn>
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month spreadList={indexList} />
                    <OptionBtn className="modal" onClick={showModal}>
                      닫기
                    </OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <DialogNPC src={charDialog1} />
        <Dialog content={text.page1} next={false}>
          {nextBtn && (
            <OptionBtn onClick={onNext}>
              다음
              <img src={next} alt="next" />
            </OptionBtn>
          )}{' '}
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
            <common.SpreadModal>
              <OptionBtn onClick={showModal}>카드</OptionBtn>
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month spreadList={indexList} />
                    <OptionBtn className="modal" onClick={showModal}>
                      닫기
                    </OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <DialogNPC src={charDialog1} />
        <Dialog content={text.page2} next={false}>
          {nextBtn && (
            <OptionBtn onClick={onNext}>
              다음
              <img src={next} alt="next" />
            </OptionBtn>
          )}{' '}
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
            <common.SpreadModal>
              <OptionBtn onClick={showModal}>카드</OptionBtn>
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month spreadList={indexList} />
                    <OptionBtn className="modal" onClick={showModal}>
                      닫기
                    </OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        <DialogNPC src={charDialog1} />
        <Dialog content={text.page3} next={false}>
          {nextBtn && (
            <OptionBtn onClick={onNext}>
              다음
              <img src={next} alt="next" />
            </OptionBtn>
          )}{' '}
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
            <Month spreadList={indexList} />
          </common.CardBox>
          <common.SideBlock />
        </common.CardArea>
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
