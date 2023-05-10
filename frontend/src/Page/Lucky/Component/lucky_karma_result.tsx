import React from 'react';
import * as luckResult from './lucky_karma_result_style';
import Gom from '../../../Assets/characters/charDialog0.png';

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
      <luckResult.CardBody id="capture">
        <luckResult.CardFront
          initial={{ scale: 1.1 }}
          animate={{ scale: [1.1, 1], transform: 'translateX(-13vw) translateY(1vh)' }}
          exit={{ scale: 1.0 }}
          transition={{ duration: 1.2 }}
          src={cardList[selectCard].front}
          alt="CardF"
        />
        <luckResult.Card initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }}>
          <div>
            {/* <luckResult.CardTitle
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [-10, 0] }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {cardList[selectCard].num}.{cardList[selectCard].title}
          </luckResult.CardTitle> */}
            <luckResult.Cardcontent
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [10, 0] }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {cardList[selectCard].result}
            </luckResult.Cardcontent>
            <luckResult.MarkBox
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [10, 0] }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <luckResult.MarkImg src={Gom} alt="Main" />
              <luckResult.MarkContent>
                <luckResult.MarkContentTitle>ARCANA</luckResult.MarkContentTitle>
                <luckResult.MarkContentSubTitle>동물 친구들의 타로 서비스 아르카나</luckResult.MarkContentSubTitle>
              </luckResult.MarkContent>
            </luckResult.MarkBox>
          </div>
        </luckResult.Card>
      </luckResult.CardBody>
    </luckResult.Body>
  );
}

export default LuckyKarmaResult;
