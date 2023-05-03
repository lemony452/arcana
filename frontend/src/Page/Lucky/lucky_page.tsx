import React, { useState } from 'react';
import * as luckyPage from './lucky_page_style';
import LuckyKarmaSelect from './Component/lucky_karma_select';
import LuckyKarmaResult from './Component/lucky_karma_result';
import F0 from '../../Assets/cards/F0.svg';
import F9 from '../../Assets/cards/F9.svg';
import F14 from '../../Assets/cards/F14.svg';
import Gom from '../../Assets/cards/gom.svg';
import Dialog from '../../Common/dialog';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import { DialogNPC } from '../../Common/common_styled';

function LuckyPage() {
  const [selectCard, setSelectCard] = useState(-1); // 선택한 카드
  const [resultPage, setResultPage] = useState(false);
  const [checkSelectState, setCheckSelectState] = useState(false); // 마지막 선택 질문

  const cardList = [
    {
      index: 0,
      front: F0,
      content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 특별한 행운을 가져다 줄걸?',
      result: '고민거리를 향해 나가는 너에게 늘 행운이 함께하길 바라!',
    },
    {
      index: 1,
      front: F9,
      content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 새로운 시작을 가져다 줄걸?',
      result: '새로운 시작을 위한 첫걸음을 걸어봐!',
    },
    {
      index: 2,
      front: F14,
      content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 놀라운 경험을 가져다 줄걸?',
      result: '그 경험이 너에게 좋은 기회가 되기를!',
    },
  ];

  const resultPageHandler = () => {
    setResultPage(true);
  };

  const cardSelect = checkSelectState ? cardList[selectCard].content : '이 카드를 선택하시겟습니까?';
  const cardContent = selectCard === -1 ? '카드를 골라주세요' : cardSelect;

  return (
    <luckyPage.Body>
      <DialogNPC src={charDialog0} />
      {resultPage ? (
        <LuckyKarmaResult selectCard={selectCard} cardList={cardList} />
      ) : (
        <LuckyKarmaSelect
          selectCard={selectCard}
          setSelectCard={setSelectCard}
          cardList={cardList}
          checkSelectState={checkSelectState}
          setCheckSelectState={setCheckSelectState}
        />
      )}
      <Dialog content={cardContent} next={false}>
        {!resultPage && checkSelectState === true && (
          <luckyPage.Btn onClick={resultPageHandler}>공유하기</luckyPage.Btn>
        )}
      </Dialog>
      {/* <luckyPage.Dialog>
        <luckyPage.Name>농담곰</luckyPage.Name>
        <luckyPage.Content>
          <hr />
          {cardContent}
        </luckyPage.Content>
        {!resultPage && checkSelectState === true && (
          <luckyPage.Btn onClick={resultPageHandler}>공유하기</luckyPage.Btn>
        )}
      </luckyPage.Dialog>
      <luckyPage.Gom>
        <img src={Gom} alt="Gom" />
      </luckyPage.Gom> */}
    </luckyPage.Body>
  );
}

export default LuckyPage;
