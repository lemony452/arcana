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

function Time() {
  const [celticText, SetcelticText] = useState(TimeConversations.t1);
  const [next, SetNext] = useState(false);
  // const [option, SetOption] = useState('');
  const inputValueRef = useRef<HTMLInputElement>(null);
  const { setTarotNameList, setOption, setInputValue, addFortune, setTarotList } = useFortuneStore();
  const navigate = useNavigate();

  // celtic 옵션 선택 함수
  const OptionClick = (fortune: keyof typeof TimeConversations.t2): void => {
    let ans;
    // time gpt api request 보내기
    const getAns = async (t: string, o: string, c: string[]) => {
      if (o === '신년운세') {
        ans = await TimeGPT(t, o, c[0]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[1]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[2]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[3]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[4]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[5]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[6]);
        addFortune(ans);
      } else {
        ans = await TimeGPT(t, o, c[0]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[1]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[2]);
        addFortune(ans);
        ans = await TimeGPT(t, o, c[3]);
        addFortune(ans);
      }
    };

    SetcelticText(TimeConversations.t2[fortune]);
    console.log(TimeConversations.t2[fortune]);
    let tarots;
    let cards: string[];
    let option;
    if (fortune === 'year') {
      // 신년운세
      // 1~12월 12장 + 종합결과 1장 총 13장 뽑기
      tarots = getTarot(13);
      cards = ['1, 2', '3, 4', '5, 6', '7, 8', '9, 10', '11, 12', '13'];
      option = '신년운세';
      // 신년운세 페이지로 이동
      navigate('/time/year');
    } else {
      // 월별운세
      // 1~5, 6~10, 11~15, 16~20, 21~25, 25~ 6장 + 종합결과 1장 총 7장 뽑기
      tarots = getTarot(7);
      cards = ['1, 2', '3, 4', '5, 6', '7'];
      option = '월별운세';
      // 월별운세 페이지로 이동
      navigate('/time/month');
    }
    console.log(tarots);
    setTarotList(tarots);
    // 카드이름 목록 리스트
    const TarotList = getTarotNames(tarots);
    setTarotNameList(TarotList);
    console.log(TarotList);

    // getAns(TarotList, option, cards);
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
