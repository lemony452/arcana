import React from 'react';
import { useFortuneStore } from '../Store/User/fortune';
import { useLuckyStore } from '../Store/User/lucky';

export const CelticConversations = {
  c1: '나는 사랑운, 재물운, 취업운을 주로 잘봐!\n어떤걸로 선택할지 나에게 알려줘!',
  c2: {
    사랑운: '사랑운을 선택했구나\n좋아, 내가 사랑의 큐피드가 되어 타로 운세를 봐줄게!\n자세한 고민을 나에게 말해줘!',
    성공운: '성공운을 선택했구나 좋아, 자세한 고민을 나에게 말해줘!',
    재물운: '재물운을 선택했구나 좋아, 자세한 고민을 나에게 말해줘!',
  },
  c3: '네 고민 잘 들었어! 너에게 어떤 운명의 카드가 나올까 너무 궁금한걸? 카드를 뽑을때까지 기다려줘 :)',
};

export const TimeConversations = {
  t1: '반갑네, 신년운세랑 월별운세 궁금해서 왔구려. \n어떤 운세를 보고싶은가?',
  t2: {
    year: '신년운세를 바로 시작해보겠네',
    month: '월별운세를 바로 시작해보겠네',
  },
};

export const InstantConversations = {
  i1: '선택의 갈림길에 놓인 당신 무엇이든 물어보세요',
  i2: {
    two: '양자택일은 카드 2장이 선택지가 됩니다\n질문을 생각하고 왼쪽 오른쪽 카드가 어떤 의미인지 생각해주세요',
    three: '삼자택일은 카드 3장이 선택지가 됩니다\n질문을 생각하고 왼쪽 중앙 오른쪽 카드가 어떤 의미인지 생각해주세요',
  },
};

export const CelticDetails = () => {
  const { tarotList, fortune } = useFortuneStore();
  console.log(tarotList);

  const CeticDetail = {
    page1: `어떤 카드인지 설명해줄게!\n1번 카드 ${tarotList[0].card.name}의 의미는 ${fortune[0]}\n2번 카드 ${tarotList[1].card.name}의 의미는 ${fortune[1]}`,
    page2: `3번 카드는 ${tarotList[2].card.name}의 의미는 ${fortune[2]}\n4번 카드는 ${tarotList[3].card.name}의 의미는 ${fortune[3]}`,
    page3: `5번 카드는 ${tarotList[4].card.name}의 의미는 ${fortune[4]}\n6번 카드는 ${tarotList[5].card.name}의 의미는 ${fortune[5]}`,
    page4: `7번 카드는 ${tarotList[6].card.name}의 의미는 ${fortune[6]}\n8번 카드는 ${tarotList[7].card.name}의 의미는 ${fortune[7]}`,
    page5: `9번 카드는 ${tarotList[8].card.name}의 의미는 ${fortune[8]}\n10번 카드는 ${tarotList[9].card.name}의 의미는 ${fortune[9]}`,
    page6: `럭키 카드는 ${tarotList[9].card.name}이 나왔어!!`,
  };

  return CeticDetail;
};

export const YearDetails = () => {
  const { tarotList, summary } = useFortuneStore();
  const { lucky, luckyMent } = useLuckyStore();
  // console.log(tarotList);

  const YearDetail = {
    page1: `월별로 카드를 해석해주겠네\n1월 ${tarotList[0].card.name}의 의미는 ${tarotList[0].ment}\n2월 ${tarotList[1].card.name}의 의미는 ${tarotList[1].ment}\n3월 ${tarotList[2].card.name}의 의미는 ${tarotList[2].ment}`,
    page2: `4월 ${tarotList[3].card.name}의 의미는 ${tarotList[3].ment}\n5월 ${tarotList[4].card.name}의 의미는 ${tarotList[4].ment}\n6월 ${tarotList[5].card.name}의 의미는 ${tarotList[5].ment}`,
    page3: `7월 ${tarotList[6].card.name}의 의미는 ${tarotList[6].ment}\n8월 ${tarotList[7].card.name}의 의미는 ${tarotList[7].ment}\n9월 ${tarotList[8].card.name}의 의미는 ${tarotList[8].ment}`,
    page4: `10월 ${tarotList[9].card.name}의 의미는 ${tarotList[9].ment}\n11월 ${tarotList[10].card.name}의 의미는 ${tarotList[10].ment}\n12월 ${tarotList[11].card.name}의 의미는 ${tarotList[11].ment}`,
    page5: `올 한 해 운세를 요약하자면 ${summary}`,
    page6: `럭키 카드는 ${lucky}이 나왔어!!`,
  };

  return YearDetail;
};

export const MonthDetails = () => {
  const { tarotList, summary } = useFortuneStore();
  const { lucky, luckyMent } = useLuckyStore();
  // console.log(tarotList);

  const MonthDetail = {
    page1: `이번 달 운세를 해석해주겠네\n1~5일 ${tarotList[0].card.name}의 의미는 ${tarotList[0].ment}\n6~10일 ${tarotList[1].card.name}의 의미는 ${tarotList[1].ment}\n11~15일 ${tarotList[2].card.name}의 의미는 ${tarotList[2].ment}`,
    page2: `16~20일 ${tarotList[3].card.name}의 의미는 ${tarotList[3].ment}\n21~25일 ${tarotList[4].card.name}의 의미는 ${tarotList[4].ment}\n25일~ ${tarotList[5].card.name}의 의미는 ${tarotList[5].ment}`,
    page3: `이번 달 운세를 요약하자면 ${summary}`,
    page4: `럭키 카드는 ${lucky}이 나왔어!!`,
  };

  return MonthDetail;
};

export const InstantDetails = (option: number) => {
  const { tarotList, question } = useFortuneStore();
  console.log(tarotList);

  const InstantDetail = {
    page1: `카드 해석을 해드리겠습니다!\n질문자 카드 ${tarotList[0].card.name}는 ${tarotList[0].ment} 라는 의미의 카드입니다`,
    page2: `왼쪽 카드 ${tarotList[1].card.name}는 ${tarotList[1].ment}\n오른쪽 카드 ${tarotList[2].card.name}는 ${tarotList[2].ment}`,
    page3: `왼쪽 카드 ${tarotList[1].card.name}는 ${tarotList[1].ment}\n중앙 카드 ${tarotList[2].card.name}는 ${
      tarotList[2].ment
    }\n오른쪽 카드 ${tarotList[option - 1].card.name}는 ${tarotList[option - 1].ment}`,
  };

  return InstantDetail;
};
