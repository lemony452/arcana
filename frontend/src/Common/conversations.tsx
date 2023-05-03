import React from 'react';
import { useFortuneStore } from '../Store/User/fortune';

export const CelticConversations = {
  c1: '나는 사랑운, 재물운, 취업운을 주로 잘봐!\n어떤걸로 선택할지 나에게 알려줘!',
  c2: {
    love: '사랑운을 선택했구나\n좋아, 내가 사랑의 큐피드가 되어 타로 운세를 봐줄게!\n자세한 고민을 나에게 말해줘!',
    success: '성공운을 선택했구나 좋아, 자세한 고민을 나에게 말해줘!',
    money: '재물운을 선택했구나 좋아, 자세한 고민을 나에게 말해줘!',
  },
  c3: '네 고민 잘 들었어! 너에게 어떤 운명의 카드가 나올까 너무 궁금한걸? 카드를 뽑을때까지 기다려줘 :)',
};

export const CelticDetails = () => {
  const { tarotNumList, fortune } = useFortuneStore();
  console.log(tarotNumList);

  const CeticDetail = {
    page1: `어떤 카드인지 설명해줄게!\n1번 카드 ${tarotNumList[0].name}의 의미는 ${fortune[0]}\n2번 카드 ${tarotNumList[1].name}의 의미는 ${fortune[1]}`,
    page2: `3번 카드는 ${tarotNumList[2].name}의 의미는 ${fortune[2]}\n4번 카드는 ${tarotNumList[3].name}의 의미는 ${fortune[3]}`,
    page3: `5번 카드는 ${tarotNumList[4].name}의 의미는 ${fortune[4]}\n6번 카드는 ${tarotNumList[5].name}의 의미는 ${fortune[5]}`,
    page4: `7번 카드는 ${tarotNumList[6].name}의 의미는 ${fortune[6]}\n8번 카드는 ${tarotNumList[7].name}의 의미는 ${fortune[7]}`,
    page5: `9번 카드는 ${tarotNumList[8].name}의 의미는 ${fortune[8]}\n10번 카드는 ${tarotNumList[9].name}의 의미는 ${fortune[9]}`,
    page6: `럭키 카드는 ${tarotNumList[10].name}이 나왔어!!`,
  };

  return CeticDetail;
};
