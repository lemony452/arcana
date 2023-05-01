import React from 'react';
import axios from 'axios';
import { create } from 'zustand';
// import { Configuration, OpenAIApi } from 'openai';

interface FortuneState {
  fortune: string;
  setFortune: (fortune: string) => void;
}

export const useFortuneStore = create<FortuneState>((set) => ({
  fortune: '',
  setFortune: (ans) => {
    set(() => ({ fortune: ans }));
  },
}));

export const createCompletion = async (prompt: string) => {
  let ans;
  const openAiKey = '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';
  try {
    const response = await axios.post(
      // api 요청 url
      'https://api.openai.com/v1/completions',
      // parameters
      {
        model: 'davinci:ft-personal-2023-04-28-02-17-42',
        prompt: `${prompt}`,
        // prompt 예시
        // '[카드목록][Three of Cups, The Sun(Reverse), Two of Pentacles, The High Priestess, King of Swords(Reverse), Nine of Wands, Seven of Cups(Reverse), The Empress, The Tower(Reverse), Wheel of Fortune] 카드가 있다. [방식] celtic-cross. 사랑과 관련된 점을 보고싶다. 1, 2번째 카드의 결과만 응답한다. [질문] 중요한 시험을 앞두고 있습니다. 잘 볼 수 있을까요?',
        max_tokens: 300,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openAiKey}`,
        },
      },
    );

    if (response.data) {
      // api 응답 참고
      ans = response.data.choices[0].text;
      // ans = response.data.choices[0].message.content;
      console.log('운세풀이 결과 : ', ans);
      // api token 사용 수 확인
      const usageToken = response.data.usage.total_tokens;
      console.log('prompt + completion 토큰 총 사용량 : ', usageToken);
    }
  } catch (err) {
    // ans = err;
    console.log('prompting err : ', err);
  }
  return ans;
};
