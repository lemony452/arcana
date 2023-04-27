import React, { useState } from 'react';
import * as luckyPage from './lucky_page_style';
import LuckyKarmaSelect from './Component/lucky_karma_select';
import LuckyKarmaResult from './Component/lucky_karma_result';
import CardF from '../../Assets/cards/cardf.svg';
import Gom from '../../Assets/cards/gom.svg';

function LuckyPage() {
  const [cardContent, setCardContent] = useState('카드를 골라주세요');
  const [resultPage, setResultPage] = useState(false);

  const cardList = [
    { index: 0, front: CardF, content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 특별한 행운을 가져다 줄걸?' },
    { index: 1, front: CardF, content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 새로운 시작을 가져다 줄걸?' },
    { index: 2, front: CardF, content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 놀라운 경험을 가져다 줄걸?' },
  ];

  return (
    <luckyPage.Body>
      {resultPage ? <LuckyKarmaResult /> : <LuckyKarmaSelect setCardContent={setCardContent} cardList={cardList} />}
      <luckyPage.Dialog>
        <luckyPage.Name>농담곰</luckyPage.Name>
        <luckyPage.Content>
          <hr />
          {cardContent}
        </luckyPage.Content>
        {resultPage ? <LuckyKarmaResult /> : <luckyPage.Btn>공유하기</luckyPage.Btn>}
      </luckyPage.Dialog>
      <luckyPage.Gom>
        <img src={Gom} alt="Gom" />
      </luckyPage.Gom>
    </luckyPage.Body>
  );
}

export default LuckyPage;
