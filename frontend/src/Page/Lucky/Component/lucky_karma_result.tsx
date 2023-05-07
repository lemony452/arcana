import React from 'react';
import * as luckResult from './lucky_karma_result_style';

interface LuckyKarmaResultType {
  selectCard: number;
  cardList: {
    index: number;
    front: string;
    num: string;
    title: string;
    content: string;
    result: string;
  }[];
}

function LuckyKarmaResult({ selectCard, cardList }: LuckyKarmaResultType) {
  return (
    <luckResult.Body>
      <luckResult.CardBody
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        id="capture"
      >
        <luckResult.Card>
          <luckResult.CardTitle
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [-10, 0] }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {cardList[selectCard].num}.{cardList[selectCard].title}
          </luckResult.CardTitle>
          <luckResult.CardFront
            initial={{ scale: 1.5 }}
            animate={{ scale: [1.5, 1] }}
            exit={{ scale: 1.0 }}
            transition={{ duration: 1.2 }}
            src={cardList[selectCard].front}
            alt="CardF"
          />
          <luckResult.Cardcontent
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [10, 0] }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {cardList[selectCard].result}
          </luckResult.Cardcontent>
        </luckResult.Card>
      </luckResult.CardBody>
    </luckResult.Body>
  );
}

export default LuckyKarmaResult;
