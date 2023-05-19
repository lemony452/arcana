import React from 'react';
import * as luckResult from '../../Lucky/Component/lucky_karma_result_style';
import Draco from '../../../Assets/characters/draco.png';
import Toast from '../../../Assets/characters/toast.png';
import Back1 from '../../../Assets/etc/luckybackground1.svg';
import Back2 from '../../../Assets/etc/luckybackground2.svg';

interface LuckyCardType {
  npc: string;
  cardIdx: number;
  cardMent: string;
}

function LuckyCard({ npc, cardIdx, cardMent }: LuckyCardType) {
  const srcImg = npc === 'celtic' ? Draco : Toast;
  const srcBack = npc === 'celtic' ? Back1 : Back2;
  const color = npc === 'celtic' ? '#cba1ff' : '#ff945e';

  return (
    <luckResult.Body className="modal">
      <luckResult.CardBody>
        <luckResult.CardFront
          initial={{ x: '-13vw', y: '1vh' }}
          src={`https://k8d107.p.ssafy.io/api/v1/images/${cardIdx}.png`}
          alt="CardF"
        />
        <luckResult.Card back={srcBack} color={color}>
          <div>
            <luckResult.Cardcontent>{cardMent}</luckResult.Cardcontent>
            <luckResult.MarkBox>
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

export default LuckyCard;
