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

export const TimeConversations = {
  t1: '안녕, 신년운세랑 월별운세 궁금해서 왔구나. 잘 찾아왔어!\n무슨 운세 볼거야?',
  t2: {
    year: '신년운세를 보고싶구나 그럼 바로 시작해볼까',
    month: '월별운세를 보고싶구나 그럼 바로 시작해볼까',
  },
};

export const InstantConversations = {
  i1: '선택의 갈림길에 놓인 너 뭐든지 물어봐!',
  i2: {
    two: '양자택일은 카드 2장이 너의 선택지야\n질문을 생각하고 왼쪽 오른쪽 카드가 어떤 의미인지 생각해줘',
    three: '삼자택일은 카드 3장이 너의 선택지야\n질문을 생각하고 왼쪽 중앙 오른쪽 카드가 어떤 의미인지 생각해줘',
  },
};

export const CelticDetails = () => {
  const { tarotList, fortune } = useFortuneStore();
  console.log(tarotList);

  const CeticDetail = {
    page1: `어떤 카드인지 설명해줄게!\n1번 카드 ${tarotList[0].name}의 의미는 ${fortune[0]}\n2번 카드 ${tarotList[1].name}의 의미는 ${fortune[1]}`,
    page2: `3번 카드는 ${tarotList[2].name}의 의미는 ${fortune[2]}\n4번 카드는 ${tarotList[3].name}의 의미는 ${fortune[3]}`,
    page3: `5번 카드는 ${tarotList[4].name}의 의미는 ${fortune[4]}\n6번 카드는 ${tarotList[5].name}의 의미는 ${fortune[5]}`,
    page4: `7번 카드는 ${tarotList[6].name}의 의미는 ${fortune[6]}\n8번 카드는 ${tarotList[7].name}의 의미는 ${fortune[7]}`,
    page5: `9번 카드는 ${tarotList[8].name}의 의미는 ${fortune[8]}\n10번 카드는 ${tarotList[9].name}의 의미는 ${fortune[9]}`,
    page6: `럭키 카드는 ${tarotList[9].name}이 나왔어!!`,
  };

  return CeticDetail;
};

export const YearDetails = () => {
  const { tarotList, fortune } = useFortuneStore();
  console.log(tarotList);

  const YearDetail = {
    page1: `어떤 카드인지 설명해줄게!\n1번 카드 ${tarotList[0].name}의 의미는 ${fortune[0]}\n2번 카드 ${tarotList[1].name}의 의미는 ${fortune[1]}\n3번 카드 ${tarotList[2].name}의 의미는 ${fortune[3]}`,
    page2: `4번 카드 ${tarotList[3].name}의 의미는 ${fortune[3]}\n5번 카드 ${tarotList[4].name}의 의미는 ${fortune[4]}\n6번 카드 ${tarotList[5].name}의 의미는 ${fortune[5]}`,
    page3: `7번 카드 ${tarotList[6].name}의 의미는 ${fortune[6]}\n8번 카드 ${tarotList[7].name}의 의미는 ${fortune[7]}\n9번 카드 ${tarotList[8].name}의 의미는 ${fortune[8]}`,
    page4: `10번 카드 ${tarotList[9].name}의 의미는 ${fortune[9]}\n11번 카드 ${tarotList[10].name}의 의미는 ${fortune[10]}\n12번 카드 ${tarotList[11].name}의 의미는 ${fortune[11]}`,
    page5: `13번 카드는 ${tarotList[12].name}의 의미는 ${fortune[12]}`,
    page6: `럭키 카드는 ${tarotList[12].name}이 나왔어!!`,
  };

  return YearDetail;
};

export const MonthDetails = () => {
  const { tarotList, fortune } = useFortuneStore();
  console.log(tarotList);

  const MonthDetail = {
    page1: `어떤 카드인지 설명해줄게!\n1번 카드 ${tarotList[0].name}의 의미는 ${fortune[0]}\n2번 카드 ${tarotList[1].name}의 의미는 ${fortune[1]}`,
    page2: `3번 카드는 ${tarotList[2].name}의 의미는 ${fortune[2]}\n4번 카드는 ${tarotList[3].name}의 의미는 ${fortune[3]}`,
    page3: `5번 카드는 ${tarotList[4].name}의 의미는 ${fortune[4]}\n6번 카드는 ${tarotList[5].name}의 의미는 ${fortune[5]}`,
    page4: `7번 카드는 ${tarotList[6].name}의 의미는 ${fortune[6]}`,
    page5: `럭키 카드는 ${tarotList[6].name}이 나왔어!!`,
  };

  return MonthDetail;
};
