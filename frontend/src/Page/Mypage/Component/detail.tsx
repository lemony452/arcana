import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Side,
  DetailContent,
  TarotToken,
  TarotListContent,
  TitleBox,
  DetailTitle,
  DetailDate,
  DetailQuestion,
  DetailFortune,
  MoveBtn,
  MoveBtnImg,
  ListIcon,
  DetailBox,
  ChangeBox,
  ChangeSelect,
  ChangeOption,
} from '../mypage_style';
// import TarotList from './TarotList';
import { userInfoStore } from '../../../Store/User/info';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import homeBtnImg from '../../../Assets/etc/homBtn.png';
import backBtn from '../../../Assets/etc/backBtn.png';
import ReplayTarotBtn from '../../../Assets/etc/replayTarotBtn.png';
import ReplayLuckyBtn from '../../../Assets/etc/replayLuckyBtn.png';
import Pagination from './pagination';
import YearSpread from '../../Time/Year/year_spread';
import MonthSpread from '../../Time/Month/month_spread';
import CelticSpread from '../../Celtic/celtic_spread';
import * as common from '../../Common/common_style';
import { OptionBtn } from '../../../Common/common_styled';
import LuckyCard from './lucky_card';
import { useCardStore } from '../../../Store/Main/main';

function TarotListDetail() {
  const navigate = useNavigate();
  const { setCardOrder } = useCardStore();
  const MoveMain = () => {
    setCardOrder('celtic');
    navigate('/');
  };

  const MoveBack = () => {
    navigate(-1);
  };

  const { nickname, tarotLog } = userInfoStore();
  const [temp, setTemp] = useState(tarotLog);
  const reverseTemp = [...tarotLog].reverse(); // 원본 배열은 남겨두고 배열을 복사한 값을 뒤집는다.

  const handleChange = (event: any) => {
    // event.preventDefault();
    if (event.target.value === '과거순') {
      setTemp(reverseTemp);
    } else {
      setTemp(tarotLog);
    }
  };

  let initialOption = temp[0].options;
  if (initialOption === '사랑운') {
    initialOption = `💘${initialOption}`;
  } else if (initialOption === '재물운') {
    initialOption = `💸${initialOption}`;
  } else if (initialOption === '성공운') {
    initialOption = `👨‍💼‍‍${initialOption}`;
  } else if (initialOption === '신년운세') {
    initialOption = `🐰${initialOption}`;
  } else {
    initialOption = `✨${initialOption}`;
  }
  const [replay, setReplay] = useState('');
  const [detailQuestion, setQuestion] = useState(temp[0].question);
  const [onDetail, setOnDetail] = useState(0);
  const [detailOption, setOption] = useState(initialOption);
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
  useEffect(() => {
    for (let i = 2; i < cardRes.length; i += 1) {
      cardlistIdx[i - 1] = cardRes[i].cardIdx;
    }
    if (detailOption === '신년운세🐰') {
      setReplay('year');
    } else if (detailOption === '월별운세✨') {
      setReplay('month');
    } else {
      setReplay('celtic');
    }
  }, []);
  const cardList = SliceTemp.map((value: any, idx: number) => {
    let valueOption = value.options;
    if (valueOption === '사랑운') {
      valueOption = `💘${valueOption}`;
    } else if (valueOption === '재물운') {
      valueOption = `💸${valueOption}`;
    } else if (valueOption === '성공운') {
      valueOption = `👨‍💼‍‍${valueOption}`;
    } else if (valueOption === '신년운세') {
      valueOption = `🐰${valueOption}`;
    } else {
      valueOption = `✨${valueOption}`;
    }
    const ShowDetail = (detailIdx: number) => {
      setDate(`${value.datetime[0]}.${value.datetime[1]}.${value.datetime[2]}`);
      setOption(valueOption);
      setQuestion(value.question);
      setCardRes(value.cardsResponse);
      setOnDetail(detailIdx);
      if (valueOption === '신년운세🐰') {
        setReplay('year');
      } else if (valueOption === '✨월별운세') {
        setReplay('month');
      } else {
        setReplay('celtic');
      }
    };
    for (let i = 2; i < cardRes.length; i += 1) {
      cardlistIdx[i - 1] = cardRes[i].cardIdx;
    }
    return (
      <TitleBox
        key={arr[idx]}
        onClick={() => {
          ShowDetail(idx);
        }}
        thisId={idx}
        onDetail={onDetail}
      >
        <div>{valueOption}</div>
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
    console.log(replay);
  };
  const showLuckyCard = () => {
    setLuckyModalOpen(!luckyModalOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Side className="open detail">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <MoveBtn className="back" type="button" onClick={MoveBack}>
            <MoveBtnImg className="back" src={backBtn} alt="" />
          </MoveBtn>
          <MoveBtn type="button" onClick={MoveMain}>
            <MoveBtnImg className="home" src={homeBtnImg} alt="" />
          </MoveBtn>
        </div>
        <TarotListContent className="detail">
          <TarotToken className="detail" click={false}>
            {/* <ListContent>
            </ListContent> */}
            <ListIcon src={cardIcon} alt="" />
            <div>타로 운세 기록</div>
          </TarotToken>
          {/* e 변수 추가 */}
          <ChangeBox>
            <ChangeSelect onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}>
              <ChangeOption>최신순</ChangeOption>
              <ChangeOption>과거순</ChangeOption>
            </ChangeSelect>
          </ChangeBox>
          {cardList}
          <Pagination totalPage={totalPage} pageNum={pageNum} setPage={setPageNum} />
        </TarotListContent>
      </Side>
      <DetailContent>
        <DetailTitle>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
            {detailOption}
            <DetailDate>{detailDate}</DetailDate>
          </div>
          <div>
            <MoveBtn className="replay" type="button" onClick={showModal}>
              <MoveBtnImg className="replay" src={ReplayTarotBtn} alt="" />
            </MoveBtn>
            <MoveBtn className="replay" type="button" onClick={showLuckyCard}>
              <MoveBtnImg className="replay" src={ReplayLuckyBtn} alt="" />
            </MoveBtn>
          </div>
        </DetailTitle>
        <DetailBox>
          <DetailQuestion>▶ {detailQuestion ? `${detailQuestion}` : `당신의 운세 결과`}</DetailQuestion>
          <DetailFortune className="detail">
            {cardRes.map((value: any, idx: number) => (
              <div style={{ marginBottom: '0.3em' }}>{value.ment}</div>
            ))}
          </DetailFortune>
        </DetailBox>
        {/* {replay === 'time' ? <MonthSpread spreadList={cardlistIdx!} /> : null} */}
        {replay === 'month' && modalOpen ? (
          <common.ModalBackdrop onClick={showModal}>
            <common.ModalView className="replay" onClick={(e) => e.stopPropagation()}>
              <MonthSpread spreadList={cardlistIdx} />
              <OptionBtn onClick={showModal}>닫기</OptionBtn>
            </common.ModalView>
          </common.ModalBackdrop>
        ) : null}
        {replay === 'year' && modalOpen ? (
          <common.ModalBackdrop onClick={showModal}>
            <common.ModalView className="replay" onClick={(e) => e.stopPropagation()}>
              <YearSpread spreadList={cardlistIdx} />
              <OptionBtn onClick={showModal}>닫기</OptionBtn>
            </common.ModalView>
          </common.ModalBackdrop>
        ) : null}
        {replay === 'celtic' && modalOpen ? (
          <common.ModalBackdrop onClick={showModal}>
            <common.ModalView className="replay" onClick={(e) => e.stopPropagation()}>
              <CelticSpread spreadList={cardlistIdx} />
              <OptionBtn onClick={showModal}>닫기</OptionBtn>
            </common.ModalView>
          </common.ModalBackdrop>
        ) : null}
        {luckyModalOpen ? (
          <common.ModalBackdrop onClick={showLuckyCard}>
            <common.ModalView className="replay" onClick={(e) => e.stopPropagation()}>
              <LuckyCard npc={replay} cardIdx={cardRes[0].cardIdx} cardMent={cardRes[0].ment} />
              <OptionBtn onClick={showLuckyCard}>닫기</OptionBtn>
            </common.ModalView>
          </common.ModalBackdrop>
        ) : null}
      </DetailContent>
    </div>
  );
}

export default TarotListDetail;
