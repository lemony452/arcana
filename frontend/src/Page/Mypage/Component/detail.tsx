import React, { useState } from 'react';
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
} from '../mypage_style';
import TarotList from './TarotList';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import homeBtnImg from '../../../Assets/etc/homBtn.png';
import LoveCoverImg from '../../../Assets/etc/cover1.png';
import Tarots from '../../../Assets/etc/tarots.png';
import Lucky from '../../../Assets/etc/lucky.png';

function TarotListDetail() {
  const navigate = useNavigate();
  const MoveMain = () => {
    navigate('/');
  };
  const [detailQuestion, setQuestion] = useState('내 올해 연애운 봐줘');
  const [detailOption, setOption] = useState('사랑운💘');
  const [detailDate, setDate] = useState('23.05.01');

  const temp = [
    {
      option: '사랑운',
      date: '23.05.10',
      question: '내 올해 연애운 봐줘',
    },
    {
      option: '재물운',
      date: '23.04.01',
      question: '이번에 산 주식이 오를까?',
    },
    {
      option: '월별운세',
      date: '23.03.02',
      question: '',
    },
    {
      option: '취업운',
      date: '23.02.01',
      question: '이번 면접에 합격할 수 있을까?',
    },
    {
      option: '신년운세',
      date: '23.01.01',
      question: '',
    },
  ];
  const res = temp.length % 5 ? Math.floor(temp.length / 5) + 1 : Math.floor(temp.length / 5);
  const [pageNum, setPageNum] = useState(res);
  const cardList = temp.map((t, idx) => {
    const ShowDetail = () => {
      setDate(t.date);
      setOption(t.option);
      setQuestion(t.question);
    };
    return (
      <TitleBox onClick={ShowDetail}>
        <div>{t.option}</div>
        <div>{t.date}</div>
      </TitleBox>
    );
  });
  // setPageNum(res);

  return (
    <div style={{ position: 'relative' }}>
      <Side className="open detail">
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={MoveMain}
            style={{ border: 0, backgroundColor: 'transparent', cursor: 'pointer' }}
          >
            <img src={homeBtnImg} alt="" style={{ width: '2.5em' }} />
          </button>
        </div>
        <TarotListContent className="detail">
          <TarotToken className="detail">
            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
              <img style={{ width: '5vw', marginRight: '0.5em' }} src={cardIcon} alt="" />
              <div>타로 운세 목록</div>
            </div>
          </TarotToken>
          <div>option</div>
          {cardList}
          <div>{pageNum}</div>
        </TarotListContent>
      </Side>
      <DetailContent>
        <DetailCover src={LoveCoverImg} />
        <DetailTitle>샛노란 병아리 님의 {detailOption}</DetailTitle>
        <DetailDate>{detailDate}</DetailDate>
        <DetailQuestion>{detailQuestion ? `❝ ${detailQuestion} ❞` : null}</DetailQuestion>
        <DetailFortune>
          너를 지지해줄 사람들이 많다는 것을 의미해 너 자신의 마음을 잘 이해하고 받아들이는 것이 중요해 신중하게
          고민하고 균형 있게 선택하는 것이 좋아 너의 감정에 귀 기울이면, 너는 사랑에 대한 더욱 깊은 이해와 인연을 만들어
          갈 수 있을 거야 극복하기 위해서 먼저 너 자신의 감정에 집중하고, 이를 이해하려 노력해야 해 목표를 달성하고
          성공을 이루기 위해 마지막으로 남은 노력을 기울이는 것이 중요해 네가 분명한 목표를 세우고 미래에 대한 계획을
          세워야 한다는 것을 상기시키는 카드야 창조적인 아이디어와 새로운 가능성들이 너를 둘러싸고 있음을 보여줘 너
          자신을 보호하며 안정된 삶을 되찾기 위해 노력해야 해 좋은 운을 누리고, 기회와 행운이 너의 삶에 찾아올 거야
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
