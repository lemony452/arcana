import React, { useEffect, useState } from 'react';
import * as luckySelect from './lucky_karma_select_style';
import CardB from '../../../Assets/cards/cardb.svg';
import CardF from '../../../Assets/cards/cardf.svg';
import Gom from '../../../Assets/cards/gom.svg';

function LuckyKarmaSelect() {
  const [cardState, setCardState] = useState([false, false, false]);
  const [cardContent, setCardContent] = useState('카드를 골라주세요');
  const [cardAniState, setCardAniState] = useState([false, false, false]);

  const cardList = [
    { index: 0, front: CardF, content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 특별한 행운을 가져다 줄걸?' },
    { index: 1, front: CardF, content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 새로운 시작을 가져다 줄걸?' },
    { index: 2, front: CardF, content: '너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 놀라운 경험을 가져다 줄걸?' },
  ];

  const cardClickHandler = (index: number) => {
    // 카드 리스트 인덱스따라서 카드를 뒤집음
    if (index === 0) {
      cardAniState[0] = !cardAniState[0];
      setCardAniState([cardAniState[0], false, false]);
    } else if (index === 1) {
      cardAniState[1] = !cardAniState[1];
      setCardAniState([false, cardAniState[1], false]);
    } else {
      cardAniState[2] = !cardAniState[2];
      setCardAniState([false, false, cardAniState[2]]);
    }

    // 지연시간을 주어서 카드 뒤집을때 끊키는 현상 제거
    setTimeout(() => {
      if (index === 0) {
        cardState[0] = !cardState[0];
        setCardState([cardState[0], false, false]);
      } else if (index === 1) {
        cardState[1] = !cardState[1];
        setCardState([false, cardState[1], false]);
      } else {
        cardState[2] = !cardState[2];
        setCardState([false, false, cardState[2]]);
      }
      // 카드 인덱스로 컨텐츠 출력
      if (cardState[0] === false && cardState[1] === false && cardState[2] === false) {
        setCardContent('카드를 골라주세요');
      } else {
        setCardContent(cardList[index].content);
      }
    }, 200);
  };

  return (
    <luckySelect.Body>
      <luckySelect.CardBody>
        {cardList.map((card) => (
          <luckySelect.Card
            onClick={() => {
              cardClickHandler(card.index);
            }}
          >
            {cardState[card.index] ? (
              <luckySelect.CardFront src={card.front} alt="CardF" cardAniState={cardAniState[card.index]} />
            ) : (
              <luckySelect.CardBack src={CardB} alt="CardB" cardAniState={cardAniState[card.index]} />
            )}
          </luckySelect.Card>
        ))}
      </luckySelect.CardBody>
      <luckySelect.Dialog>
        <luckySelect.Name>농담곰</luckySelect.Name>
        <luckySelect.Content>
          <hr />
          {cardContent}
        </luckySelect.Content>
      </luckySelect.Dialog>
      <luckySelect.Gom>
        <img src={Gom} alt="Gom" />
      </luckySelect.Gom>
    </luckySelect.Body>
  );
}

export default LuckyKarmaSelect;
