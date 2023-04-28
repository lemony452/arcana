import React from 'react';
import * as luckResult from './lucky_karma_result_style';

interface LuckyKarmaResultType {
  selectCard: number;
  cardList: {
    index: number;
    front: string;
    content: string;
    result: string;
  }[];
}

function LuckyKarmaResult({ selectCard, cardList }: LuckyKarmaResultType) {
  return (
    <luckResult.Body>
      <luckResult.CardBody>
        <luckResult.Card>
          <luckResult.CardFront src={cardList[selectCard].front} alt="CardF" />
          <p>{cardList[selectCard].result}</p>
        </luckResult.Card>
      </luckResult.CardBody>
    </luckResult.Body>
  );
}

export default LuckyKarmaResult;
