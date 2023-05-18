import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DialogNPC,
  InputText,
  OptionBtn,
  SubmitBtn,
  OtherBackground1,
  OtherBackground2,
} from '../../Common/common_styled';
import Dialog from '../../Common/dialog';
import charDialog2 from '../../Assets/characters/kitty.gif';
import Npc from '../../Common/npc';
import { SpreadBtn } from '../Common/common_style';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import { saveIndexStore, useFortuneStore } from '../../Store/User/fortune';
import { InstantConversations } from '../../Common/conversations';
import { API } from '../../API';
import submitBtn from '../../Assets/etc/submitBtn.png';
import BackgroundImg1 from '../../Assets/etc/otherb1.png';
import BackgroundImg2 from '../../Assets/etc/otherb2.png';

function Instant() {
  const [instantText, SetInstantText] = useState(InstantConversations.i1);
  const [next, SetNext] = useState(false);
  const [option, SetOption] = useState('');
  const inputValueRef = useRef<HTMLInputElement>(null);
  const { setOption, setCelticFortune } = useFortuneStore();
  const navigate = useNavigate();
  const { setIndexList } = saveIndexStore(); // 카드 인덱스

  const OptionClick = (fortune: keyof typeof InstantConversations.i2) => {
    SetInstantText(InstantConversations.i2[fortune]);
    // 고민 입력 플로우로 진행
    SetOption(fortune);
    SetNext(!next);
  };

  let IndexList: number[];

  const saveInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const InstantAPI = async (optionParams: number) => {
      const ans = await API.get(`/api/v1/tarot/instant/${optionParams}`);
      console.log(ans); // 배열에 담겨옴. 인덱스 0번이 question 나머지는 advice
      IndexList = ans.data.map((tarot: any) => {
        const indexData = tarot.card.idx;
        return indexData;
      });
      setIndexList(IndexList);
      await setCelticFortune(ans.data);
      navigate('/spread', { state: `${option}` });
    };
    if (option === 'two') {
      InstantAPI(3);
    } else {
      InstantAPI(4);
    }
    setOption(option);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <OtherBackground1>
        <img src={BackgroundImg1} alt="" />
      </OtherBackground1>
      <OtherBackground2>
        <img src={BackgroundImg2} alt="" />
      </OtherBackground2>
      <DialogNPC src={charDialog2} />
      {/* <DialogNPC src={charDialog0} /> */}
      <Dialog content={instantText} next={next}>
        {next ? (
          <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={saveInput}>
            <InputText ref={inputValueRef} type="text" placeholder="고민을 입력해주세요" />
            <SubmitBtn>
              <img src={submitBtn} alt="btn" />
            </SubmitBtn>
          </form>
        ) : (
          <>
            <OptionBtn onClick={() => OptionClick('two')}>양자택일 💖</OptionBtn>
            <OptionBtn onClick={() => OptionClick('three')}>삼자택일 💖</OptionBtn>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default Instant;
