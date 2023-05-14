import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTarot, getTarotNames } from '../../Common/tarotSelect';
import { OptionBtn, InputText, SubmitBtn, DialogNPC } from '../../Common/common_styled';
import { TimeConversations } from '../../Common/conversations';
import Dialog from '../../Common/dialog';
import Npc from '../../Common/npc';
// import { TimeGPT } from '../../Store/FortuneTelling/gpt';
import { useFortuneStore, CardState, saveIndexStore } from '../../Store/User/fortune';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import { SpreadBtn } from '../Common/common_style';
import { API } from '../../API';

function Time() {
  const [celticText, SetcelticText] = useState(TimeConversations.t1);
  const [next, SetNext] = useState(false);
  // const [option, SetOption] = useState('');
  const inputValueRef = useRef<HTMLInputElement>(null);
  const { setOption, setTarotList, setSummary, setQuestion } = useFortuneStore();
  const navigate = useNavigate();
  const { setIndexList } = saveIndexStore(); // 카드 인덱스

  // time 옵션 선택 함수
  // let TarotList: CardState[];
  let timements = '';
  let IndexList: number[];
  const OptionClick = async (f: keyof typeof TimeConversations.t2) => {
    // time api request 보내기
    let cardNum: number;
    if (f === '신년운세') {
      cardNum = 12;
    } else {
      cardNum = 6;
    }
    await API.get(`/api/v1/tarot/time/${cardNum}`).then((res) => {
      console.log(res);
      const resData = res.data;
      for (let i = 0; i < cardNum; i += 1) {
        delete res.data[i].idx;
        timements += res.data[i].ment;
      }
      console.log(resData);
      IndexList = resData.map((tarot: any) => {
        const indexData = tarot.card.idx;
        return indexData;
      });
      setIndexList(IndexList);
      setTarotList(resData);
      console.log(timements);
      // addFortune(timements);
    });

    // await API.post(`/api/v2/summary`, {
    //   text: fortune,
    // }).then((res: any) => {
    //   console.log(res);
    //   setSummary(res);
    // });
    // await setTarotList(ans.data);
    // await navigate(`/time/${f}`);
    // await navigate(`/time/${f}`);
    SetcelticText(TimeConversations.t2[f]);
    setOption(f);
    setQuestion(''); // 기간운세는 질문X
    navigate('/spread', { state: `${f}` });

    API.post(`/api/v2/summary`, {
      text: timements,
    }).then((res: any) => {
      console.log(res.data.summary);
      setSummary(res.data.summary);
    });
    // await setTarotList(ans.data);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Npc num={1} />
      {/* <DialogNPC src={charDialog0} /> */}
      <Dialog content={celticText} next={next}>
        <>
          <OptionBtn onClick={() => OptionClick('신년운세')}>신년 운세 봐줘 🐰</OptionBtn>
          <OptionBtn onClick={() => OptionClick('월별운세')}>월별 운세 봐줘 👻</OptionBtn>
        </>
      </Dialog>
    </div>
  );
}

export default Time;
