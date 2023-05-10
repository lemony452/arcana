import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TarotListContent, TarotToken, TitleBox } from '../mypage_style';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import nextBtn from '../../../Assets/etc/nextButton.png';

function TarotList() {
  const navigate = useNavigate();
  const openTarotList = () => {
    navigate('/detail');
  };

  return (
    <TarotListContent>
      <TarotToken>
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
          <img style={{ width: '4vw', marginRight: '0.3em' }} src={cardIcon} alt="" />
          <div>타로 운세 목록</div>
        </div>
        <button
          type="button"
          onClick={openTarotList}
          style={{ border: 0, backgroundColor: 'transparent', cursor: 'pointer' }}
        >
          <img style={{ width: '2.2vw', marginLeft: '0.5em' }} src={nextBtn} alt="" />
        </button>
      </TarotToken>
      <TitleBox>
        <div>사랑운</div>
        <div>23.01.01</div>
      </TitleBox>
      <TitleBox>
        <div>사랑운</div>
        <div>23.01.01</div>
      </TitleBox>
      <TitleBox>
        <div>사랑운</div>
        <div>23.01.01</div>
      </TitleBox>
    </TarotListContent>
  );
}

export default TarotList;
