import React from 'react';
import * as luckResult from './lucky_karma_result_style';
import Draco from '../../../Assets/characters/draco.png';
import Toast from '../../../Assets/characters/toast.png';
import Back1 from '../../../Assets/etc/luckybackground1.svg';
import Back2 from '../../../Assets/etc/luckybackground2.svg';

interface LuckyKarmaResultType {
  selectCard: number;
  cardList: {
    index: number;
    front: string;
    num: number;
    title: string;
    contentCeltic: string;
    contentTime: string;
    result: string;
  }[];
  npc: number;
}

function LuckyKarmaResult({ selectCard, cardList, npc }: LuckyKarmaResultType) {
  const srcImg = npc === 0 ? Draco : Toast;
  const srcBack = npc === 0 ? Back1 : Back2;
  const color = npc === 0 ? '#cba1ff' : '#ff945e';

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
        <luckResult.Card
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          back={srcBack}
          color={color}
        >
          <div>
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
              <luckResult.MarkImg src={srcImg} alt="Main" />
              <luckResult.MarkContent>
                <luckResult.MarkContentTitle>ARCANA</luckResult.MarkContentTitle>
                <luckResult.MarkContentSubTitle>당신의 마음을 듣고 읽어주는 타로 프렌즈</luckResult.MarkContentSubTitle>
              </luckResult.MarkContent>
            </luckResult.MarkBox>
          </div>
        </luckResult.Card>
      </luckResult.CardBody>
    </luckResult.Body>
  );
}

export default LuckyKarmaResult;
