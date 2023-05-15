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

  const cardList = SliceTemp.map((value: any, idx: number) => {
    const ShowDetail = () => {
      setDate(`${value.datetime[0]}.${value.datetime[1]}.${value.datetime[2]}`);
      setOption(value.options);
      setQuestion(value.question);
      setCardRes(value.cardsResponse);
    };
    return (
      <TitleBox key={arr[idx]} onClick={ShowDetail}>
        <div>{value.options}</div>
        <div>{`${value.datetime[0]}.${value.datetime[1]}.${value.datetime[2]}`}</div>
      </TitleBox>
    );
  });

  useEffect(() => {
    console.log('옵션변경');
  }, [SliceTemp]);

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
        <ReplayTarots>
          <img src={Tarots} alt="" style={{ width: '20%' }} />
          <div>타로카드 다시보기</div>
        </ReplayTarots>
        <ReplayLucky>
          <img src={Lucky} alt="" style={{ width: '20%' }} />
          <div>럭키카드 다시보기</div>
        </ReplayLucky>
      </DetailContent>
    </div>
  );
}

export default TarotListDetail;
