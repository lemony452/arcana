import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTarot, getTarotNames } from '../../Common/tarotSelect';
import { OptionBtn, InputText, SubmitBtn, DialogNPC } from '../../Common/common_styled';
import { CelticConversations } from '../../Common/conversations';
import Dialog from '../../Common/dialog';
import Npc from '../../Common/npc';
import { CelticGPT } from '../../Store/FortuneTelling/gpt';
import { useFortuneStore } from '../../Store/User/fortune';
import charDialog0 from '../../Assets/characters/charDialog0.png';

function Celtic() {
  const [celticText, SetcelticText] = useState(CelticConversations.c1);
  const [next, SetNext] = useState(false);
  const [option, SetOption] = useState('');
  const inputValueRef = useRef<HTMLInputElement>(null);
  const { setTarotNameList, setOption, setInputValue, addFortune, setTarotList } = useFortuneStore();
  const navigate = useNavigate();

  // 특수 문자 처리
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\\{\\}\\[\]\\\\/ ]/gim;

  // celtic 옵션 선택 함수
  const OptionClick = (fortune: keyof typeof CelticConversations.c2): void => {
    SetcelticText(CelticConversations.c2[fortune]);
    console.log(CelticConversations.c2[fortune]);
    // 타로카드 10장 + 럭키카드 1장 뽑기
    const tarots = getTarot(10);
    console.log(tarots);
    setTarotList(tarots);
    // 10장의 카드이름 목록 리스트
    const TarotList = getTarotNames(tarots);
    setTarotNameList(TarotList);
    console.log(TarotList);
    // 고민 입력 플로우로 진행
    SetOption(fortune);
    SetNext(!next);
  };
  const saveInput = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 선택한 옵션을 prompt로 전달해주기
    let optionPrompt;
    if (option === 'love') {
      optionPrompt = '사랑운';
    } else if (option === 'success') {
      optionPrompt = '성공운';
    } else {
      optionPrompt = '재물운';
    }
    setOption(optionPrompt);
    // 입력받은 고민을 prompt로 전달해주기
    const inputValue = inputValueRef.current?.value;
    if (inputValue!.replace(reg, '').length > 1) {
      setInputValue(inputValue!);
      console.log(inputValue);
      // const prompt = `[카드목록][${tarotList}] 카드가 있다. [방식] celtic-cross. ${opt}과 관련된 점을 보고싶다. ${position}번째 카드의 결과만 응답한다. [질문] ${inputValue}`;
      // celtic 2장씩 총 10장의 운세 풀이 요청
      const cards = ['1, 2', '3, 4', '5, 6', '7, 8', '9, 10'];
      const getAns = async (t: string, o: string, i: string) => {
        // 타로 운세 풀이를 스토어에 저장
        // 비동기함수로 순서대로 fortune 변수에 값을 추가함
        let ans = await CelticGPT(t, o, i, cards[0]);
        addFortune(ans);
        ans = await CelticGPT(t, o, i, cards[1]);
        addFortune(ans);
        ans = await CelticGPT(t, o, i, cards[2]);
        addFortune(ans);
        ans = await CelticGPT(t, o, i, cards[3]);
        addFortune(ans);
        ans = await CelticGPT(t, o, i, cards[4]);
        addFortune(ans);
      };
      // getAns(tarotList, optionPrompt, inputValue!);
      // gpt api 호출하고 spread 페이지로 바로 이동됨
      navigate('/spread', { state: 'celtic' });
    } else {
      SetcelticText('나한테 장난치지 말구!! 고민을 다시 입력해줘!');
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Npc num={0} />
      {/* <DialogNPC src={charDialog0} /> */}
      <Dialog content={celticText} next={next}>
        {next ? (
          <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={saveInput}>
            <InputText ref={inputValueRef} type="text" placeholder="고민을 입력해주세요" />
            <SubmitBtn />
          </form>
        ) : (
          <>
            <OptionBtn onClick={() => OptionClick('love')}>사랑운 💖</OptionBtn>
            <OptionBtn onClick={() => OptionClick('success')}>성공운이 궁금해! 👨‍💼</OptionBtn>
            <OptionBtn onClick={() => OptionClick('money')}>재물운 봐줄래? 💸</OptionBtn>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default Celtic;
