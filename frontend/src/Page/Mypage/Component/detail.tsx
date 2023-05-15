import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Side,
  DetailContent,
  TarotToken,
  TarotListContent,
  TitleBox,
  DetailCover,
  DetailTitle,
  DetailDate,
  DetailQuestion,
  DetailFortune,
  ReplayLucky,
  ReplayTarots,
  MoveBtn,
  MoveBtnImg,
  ListContent,
  ListIcon,
} from '../mypage_style';
// import TarotList from './TarotList';
import { userInfoStore } from '../../../Store/User/info';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import homeBtnImg from '../../../Assets/etc/homBtn.png';
import LoveCoverImg from '../../../Assets/etc/cover1.png';
import Tarots from '../../../Assets/etc/tarots.png';
import Lucky from '../../../Assets/etc/lucky.png';
import Pagination from './pagination';
import MonthSpread from '../../Time/Month/month_spread';
import CelticSpread from '../../Celtic/celtic_spread';
import * as common from '../../Common/common_style';
import { OptionBtn } from '../../../Common/common_styled';

function TarotListDetail() {
  const navigate = useNavigate();
  const MoveMain = () => {
    navigate('/');
  };
  const { nickname, tarotLog } = userInfoStore();
  const [temp, setTemp] = useState(tarotLog);
  const reverseTemp = tarotLog.reverse();

  const handleChange = (event: any) => {
    console.log(event.target.value);
    if (event.target.value === '과거순') {
      setTemp(reverseTemp);
    } else {
      setTemp(tarotLog);
    }
  };
  const [replay, setReplay] = useState('');
  const [detailQuestion, setQuestion] = useState(temp[0].question);
  const [detailOption, setOption] = useState(temp[0].options);
  const [detailDate, setDate] = useState(`${temp[0].datetime[0]}.${temp[0].datetime[1]}.${temp[0].datetime[2]}`);
  const [cardRes, setCardRes] = useState(temp[0].cardsResponse);
  // const res = temp.length % 5 ? Math.floor(temp.length / 5) + 1 : Math.floor(temp.length / 5);
  const limit = 5;
  const totalPage = Math.ceil(temp.length / limit);
  const [pageNum, setPageNum] = useState(1);
  const offset = (pageNum - 1) * limit;
  const SliceTemp = temp.slice(offset, limit + offset);
  const arr = Array(5)
    .fill(1)
    .map((x, y) => x + y);

  const cardlistIdx = [cardRes[1].cardIdx];
  const luckycardIdx = cardRes[0].cardIdx;
  const cardList = SliceTemp.map((value: any, idx: number) => {
    const ShowDetail = () => {
      setDate(`${value.datetime[0]}.${value.datetime[1]}.${value.datetime[2]}`);
      setOption(value.options);
      setQuestion(value.question);
      setCardRes(value.cardsResponse);
      if (value.options === '신년운세' || value.options === '월별운세') {
        setReplay('time');
      } else {
        setReplay('celtic');
      }
    };
    for (let i = 2; i < cardRes.length; i += 1) {
      cardlistIdx[i - 1] = cardRes[i].cardIdx;
    }
    return (
      <TitleBox key={arr[idx]} onClick={ShowDetail}>
        <div>{value.options}</div>
        <div>{`${value.datetime[0]}.${value.datetime[1]}.${value.datetime[2]}`}</div>
      </TitleBox>
    );
  });

  // const ReplayTarotCard = (option: string) => {
  //   console.log(cardRes);
  //   for (let i = 2; i < cardRes.length; i += 1) {
  //     cardlistIdx[i - 1] = cardRes[i].cardIdx;
  //   }
  //   console.log(cardlistIdx);
  //   if (option === '신년운세' || option === '월별운세') {
  //     setReplay('time');
  //   } else {
  //     setReplay('celtic');
  //   }
  // };

  const [modalOpen, setModalOpen] = useState(false); // modal
  const [luckyModalOpen, setLuckyModalOpen] = useState(false); // modal
  const showModal = () => {
    setModalOpen(!modalOpen);
    console.log(cardlistIdx);
  };

  const showLuckyCard = () => {
    setLuckyModalOpen(!luckyModalOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Side className="open detail">
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <MoveBtn type="button" onClick={MoveMain}>
            <MoveBtnImg className="home" src={homeBtnImg} alt="" />
          </MoveBtn>
        </div>
        <TarotListContent className="detail">
          <TarotToken className="detail">
            {/* <ListContent>
            </ListContent> */}
            <ListIcon src={cardIcon} alt="" />
            <div>타로 운세 기록</div>
          </TarotToken>
          <select onChange={handleChange}>
            <option>최신순</option>
            <option>과거순</option>
          </select>
          {cardList}
          <Pagination totalPage={totalPage} pageNum={pageNum} setPage={setPageNum} />
        </TarotListContent>
      </Side>
      <DetailContent>
        <DetailCover src={LoveCoverImg} />
        <DetailTitle>
          {nickname}의 {detailOption}
        </DetailTitle>
        <DetailDate>{detailDate}</DetailDate>
        <DetailQuestion>{detailQuestion ? `❝ ${detailQuestion} ❞` : null}</DetailQuestion>
        <DetailFortune>
          {cardRes.map((value: any, idx: number) => (
            <>
              <div>{value.ment}</div>
              <br />
            </>
          ))}
        </DetailFortune>
        {/* {replay === 'time' ? <MonthSpread spreadList={cardlistIdx!} /> : null} */}
        {replay === 'time' && modalOpen ? (
          <common.ModalBackdrop onClick={showModal}>
            <common.ModalView className="replay" onClick={(e) => e.stopPropagation()}>
              <MonthSpread spreadList={cardlistIdx!} />
              <OptionBtn onClick={showModal}>닫기</OptionBtn>
            </common.ModalView>
          </common.ModalBackdrop>
        ) : null}
        {replay === 'celtic' && modalOpen ? (
          <common.ModalBackdrop onClick={showModal}>
            <common.ModalView className="replay" onClick={(e) => e.stopPropagation()}>
              <CelticSpread spreadList={cardlistIdx!} />
              <OptionBtn onClick={showModal}>닫기</OptionBtn>
            </common.ModalView>
          </common.ModalBackdrop>
        ) : null}
        {luckyModalOpen ? (
          <common.ModalBackdrop onClick={showLuckyCard}>
            <common.ModalView className="replay" onClick={(e) => e.stopPropagation()}>
              <img src={`https://k8d107.p.ssafy.io/api/v1/images/${luckycardIdx}.png`} alt="" />
              <OptionBtn onClick={showLuckyCard}>닫기</OptionBtn>
            </common.ModalView>
          </common.ModalBackdrop>
        ) : null}
        <ReplayTarots>
          <img src={Tarots} alt="" style={{ width: '20%' }} />
          <button type="button" onClick={showModal}>
            타로카드 다시보기
          </button>
        </ReplayTarots>
        <ReplayLucky>
          <img src={Lucky} alt="" style={{ width: '20%' }} />
          <button type="button" onClick={showLuckyCard}>
            럭키카드 다시보기
          </button>
        </ReplayLucky>
      </DetailContent>
    </div>
  );
}

export default TarotListDetail;
