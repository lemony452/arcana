import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTarot, getTarotNames } from '../../Common/tarotSelect';
import { OptionBtn, InputText, SubmitBtn, DialogNPC } from '../../Common/common_styled';
import { TimeConversations } from '../../Common/conversations';
import Dialog from '../../Common/dialog';
import { TimeGPT } from '../../Store/FortuneTelling/gpt';
import { useFortuneStore } from '../../Store/User/fortune';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import { SpreadBtn } from '../Common/common_style';
import { API } from '../../API';

function Time() {
  const [celticText, SetcelticText] = useState(TimeConversations.t1);
  const [next, SetNext] = useState(false);
  // const [option, SetOption] = useState('');
  const inputValueRef = useRef<HTMLInputElement>(null);
  const { setTarotNameList, setOption, setInputValue, addFortune, setTarotList } = useFortuneStore();
  const navigate = useNavigate();

  // celtic 옵션 선택 함수
  const OptionClick = async (fortune: keyof typeof TimeConversations.t2) => {
    // time api request 보내기
    // const ans = await API.get(`/api/tarot/time/${fortune}`);
    // console.log(ans);
    SetcelticText(TimeConversations.t2[fortune]);
    console.log(TimeConversations.t2[fortune]);
    const tarots = getTarot(13);
    console.log(tarots);
    setTarotList(tarots);
    setOption(fortune);
    navigate(`/time/${fortune}`);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div>신년/월별운세 페이지입니다 여기에 카드 전체 스프레딩 하기</div>
      <DialogNPC src={charDialog0} />
      <Dialog content={celticText} next={next}>
        <>
          <OptionBtn onClick={() => OptionClick('year')}>신년 운세 봐줘 🐰</OptionBtn>
          <OptionBtn onClick={() => OptionClick('month')}>월별 운세 봐줘 👻</OptionBtn>
        </>
      </Dialog>
    </div>
  );
}

export default Time;
