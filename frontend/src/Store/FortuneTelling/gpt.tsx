import React from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';
import { useFortuneStore } from '../User/fortune';
// import dotenv from 'dotenv';

// dotenv.config();
const openaiApiKey = process.env.OPENAI_KEY;
const configuration = new Configuration({
  apiKey: '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',
});

export const openai = new OpenAIApi(configuration);

// celtic-cross 방식 운세
export const CelticGPT = async (tarotNameList: string, option: string, inputValue: string, position: string) => {
  const prompt = `넌 타로카드 전문가야.\n[카드목록][${tarotNameList}] 카드가 있어.\n[방식] celtic-cross.\n${option}과 관련된 점을 보고싶어. ${position}번째 카드의 결과만 응답해줘.\n[질문] ${inputValue}\n카드 설명은 반드시 1 문장으로 해줘. 그리고 말투는 반드시 구어체로 하고 ~거야 라고 해줘.\n응답에 카드 이름이 들어갈 필요없어. 응답은 반드시 [응답]의 형태처럼 '|' 기호로 구분해줘.\n[응답] {카드설명} | {카드설명}`;
  console.log('tarotNameList : ', tarotNameList); // 카드 이름 나열 데이터
  console.log('option : ', option); // 상세 옵션
  console.log('inputValue : ', inputValue); // 고민입력
  console.log('prompt : ', prompt); // gpt 에게 api 로 전송할 request 값
  let ans;
  const openAiKey = openaiApiKey;
  // const openAiKey = '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';
  try {
    const response = await axios.post(
      // api 요청 url
      'https://api.openai.com/v1/completions',
      // parameters
      {
        model: 'davinci:ft-personal-2023-05-01-08-05-42',
        // prompt 예시
        // '[카드목록][Three of Cups, The Sun(Reverse), Two of Pentacles, The High Priestess, King of Swords(Reverse), Nine of Wands, Seven of Cups(Reverse), The Empress, The Tower(Reverse), Wheel of Fortune] 카드가 있다. [방식] celtic-cross. 사랑과 관련된 점을 보고싶다. 1, 2번째 카드의 결과만 응답한다. [질문] 중요한 시험을 앞두고 있습니다. 잘 볼 수 있을까요?',
        prompt: `${prompt}`,
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
      console.log('운세풀이 결과 : ', ans);
      // api token 사용 수 확인
      const usageToken = response.data.usage.total_tokens;
      console.log('prompt + completion 토큰 총 사용량 : ', usageToken);
    }
  } catch (err) {
    // ans = err;
    console.log('prompting err : ', err);
  }
  // 출력 형식 변경 필요,,
  // [응답형식] 기술을 개발하면서 새로운 기술을 가지고 성공을 이루게 될거야'
  //  | 현재 수학 공부를 열심히 하고 있지만 발전의 열을 놓치거나 실패하면서 성공을 이루지 못할거야. 지금의 성공을 위해 다시 시작하는 것이 좋을 거야.
  return ans;
};

// gpt 출력 처리하기
const slicingText = (text: string) => {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\\{\\}\\[\]\\\\/]/gim;
  const temp = text.split('[응답]');
  let [card1Fortune, card2Fortune] = temp[1].split('|');
  // let temp2;
  // let card1Fortune;
  // let card2Fortune;
  // if (text.search(/[|]/g) === -1) {
  //   [, temp2, card2Fortune] = text.split(':');
  //   [card1Fortune] = temp2.split('.');
  // } else {
  //   temp = text.split(' | ');
  //   card1Fortune = temp[0].split(': ')[1].replace(reg, '');
  //   card2Fortune = temp[1].split(': ')[1].replace(reg, '');
  // }
  card1Fortune = card1Fortune.trim();
  card2Fortune = card2Fortune.trim();
  return [card1Fortune, card2Fortune];
};

// 요청 형식
// "넌 타로카드 전문가야.\n[카드목록][Nine of Wands(Reverse), Four of Pentacles(Reverse), Page of Cups(Reverse), Five of Swords(Reverse), Five of Pentacles(Reverse), Five of Cups, The World, Queen of Pentacles, Four of Cups, The Hanged Man(Reverse)] 카드가 있어.\n[방식] celtic-cross.\n학업과 관련된 점을 보고 싶어. 9, 10번째 카드의 결과만 응답해줘.\n[질문] 내일 시험인데 잘 볼 수 있을까?\n카드 설명은 반드시 1 문장으로 해줘. 그리고 말투는 반드시 구어체로 하고 ~거야 라고 해줘.\n응답에 카드 이름이 들어갈 필요없어. 응답은 반드시 [응답]의 형태처럼 '|' 기호로 구분해줘.\n[응답] {카드설명} | {카드설명}"
let slicingAns: string[];
export const createCompletion = async (tarotNameList: string, option: string, inputValue: string, position: string) => {
  const prompt = `넌 타로카드 전문가야.\n[카드목록][${tarotNameList}] 카드가 있어.\n[방식] celtic-cross.\n${option}과 관련된 점을 보고싶어. ${position}번째 카드의 결과만 응답해줘.\n[질문] ${inputValue}\n카드 설명은 반드시 1 문장으로 해줘. 그리고 말투는 반드시 구어체로 하고 ~거야 라고 해줘.\n응답에 카드 이름이 들어갈 필요없어. 응답은 반드시 [응답]의 형태처럼 '|' 기호로 구분해줘.\n[응답] {카드설명} | {카드설명}`;
  console.log(prompt);
  let ans;
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.5,
    });
    if (response.data) {
      ans = response.data.choices[0].message!.content;
      console.log(ans);
      slicingAns = slicingText(ans);
    }
  } catch (err) {
    console.log('err: ', err);
  }
  return slicingAns;
};

// 신년운세&월별운세
// export const TimeGPT = async (tarotNameList: string, option: string, position: string) => {
//   const prompt = `[카드목록][${tarotNameList}] 카드가 있다. [방식] ??? ${option}와 관련된 점을 보고싶다. ${position}번째 카드의 결과만 응답한다.`;
//   console.log('tarotNameList : ', tarotNameList); // 카드 이름 나열 데이터
//   console.log('option : ', option); // 상세 옵션
//   console.log('prompt : ', prompt); // gpt 에게 api 로 전송할 request 값
//   let ans;
//   const openAiKey = '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';
//   try {
//     const response = await axios.post(
//       // api 요청 url
//       'https://api.openai.com/v1/completions',
//       // parameters
//       {
//         model: 'davinci:ft-personal-2023-05-01-08-05-42',
//         prompt: `${prompt}`,
//         // prompt 예시
//         // '[카드목록][Three of Cups, The Sun(Reverse), Two of Pentacles, The High Priestess, King of Swords(Reverse), Nine of Wands, Seven of Cups(Reverse), The Empress, The Tower(Reverse), Wheel of Fortune] 카드가 있다. [방식] celtic-cross. 사랑과 관련된 점을 보고싶다. 1, 2번째 카드의 결과만 응답한다. [질문] 중요한 시험을 앞두고 있습니다. 잘 볼 수 있을까요?',
//         max_tokens: 300,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${openAiKey}`,
//         },
//       },
//     );

//     if (response.data) {
//       // api 응답 참고
//       ans = response.data.choices[0].text;
//       // ans = response.data.choices[0].message.content;
//       console.log('운세풀이 결과 : ', ans);
//       // api token 사용 수 확인
//       const usageToken = response.data.usage.total_tokens;
//       console.log('prompt + completion 토큰 총 사용량 : ', usageToken);
//     }
//   } catch (err) {
//     // ans = err;
//     console.log('prompting err : ', err);
//   }
//   // 출력 형식 변경 필요,,
//   return ans;
// };
