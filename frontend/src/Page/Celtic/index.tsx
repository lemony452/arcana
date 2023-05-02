import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { OptionBtn, InputText, SubmitBtn } from '../../Common/common_styled';
import { CelticConversations } from '../../Common/conversations';
import Dialog from '../../Common/dialog';
import { createCompletion } from '../../Store/FortuneTelling/gpt';
import { SpreadBtn } from '../Common/common_style';

function Celtic() {
  const [celticText, SetcelticText] = useState(CelticConversations.c1);
  const [next, SetNext] = useState(false);
  const inputValueRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\\{\\}\\[\]\\\\/ ]/gim;
  // let CelticText = CelticConversations.c1;
  const OptionClick = (fortune: keyof typeof CelticConversations.c2): void => {
    SetcelticText(CelticConversations.c2[fortune]);
    console.log(CelticConversations.c2[fortune]);
    SetNext(!next);
  };
  const saveInput = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = inputValueRef.current?.value;
    if (inputValue!.replace(reg, '').length > 1) {
      console.log(inputValue);
      // inputValue = `[질문] ${inputValue}`;
      // console.log(inputValue);
      const prompt = `[카드목록][Three of Cups, The Sun(Reverse), Two of Pentacles, The High Priestess, King of Swords(Reverse), Nine of Wands, Seven of Cups(Reverse), The Empress, The Tower(Reverse), Wheel of Fortune] 카드가 있다. [방식] celtic-cross. 사랑과 관련된 점을 보고싶다. 1, 2번째 카드의 결과만 응답한다. [질문] ${inputValue}`;
      // const ans = await createCompletion(prompt);
      // 답변 양식 : [질문] 요즘 가족들과의 관계가 좀 안 좋아진 것 같아요. 어떻게 하면 좋을까요?", "completion":"지금의 상황에 대해 혼자 고민하는 것도 좋지만, 가족들에게 조언을 구하는 것도 좋겠어' | 때로는 가족들과의 거리가 생기는 것도 필요한 것을 기억해야 할 거야."}
      const ans = ['사랑을 유혹해 주는 일이 생기면 안올라 바라본다', '사랑이 아닌 다른 감정을 이어나가는 것 같아'];
      console.log('propmt 결과 : ', ans);
    } else {
      SetcelticText('나한테 장난치지 말구!! 고민을 다시 입력해줘!');
    }
  };
  const MoveCelticSpread = () => {
    navigate('/celtic/spread');
  };
  return (
    <>
      <div>celtic 페이지입니다</div>
      <SpreadBtn onClick={MoveCelticSpread}>다음</SpreadBtn>
      <Dialog text={celticText} idx={0}>
        {next ? (
          <form onSubmit={saveInput}>
            <InputText ref={inputValueRef} type="text" placeholder="고민을 입력해주세요" />
            <SubmitBtn />
          </form>
        ) : (
          <>
            <OptionBtn onClick={() => OptionClick('love')}>사랑운 💖</OptionBtn>
            <OptionBtn onClick={() => OptionClick('job')}>학업 / 취업운이 궁금해! 👨‍💼</OptionBtn>
            <OptionBtn onClick={() => OptionClick('money')}>난 부자가 되고싶은데 재물운 봐줄래? 💸</OptionBtn>
          </>
        )}
      </Dialog>
    </>
  );
}

export default Celtic;
