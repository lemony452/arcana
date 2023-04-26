import React from 'react';
import * as lucky from './luckyKarma_style';
import CardB from '../../Assets/cards/cardb.svg';
import CardF from '../../Assets/cards/cardf.svg';
import Gom from '../../Assets/cards/gom.svg';

function LuckyPage() {
  const cardList = [1, 2, 3];
  return (
    <lucky.Body>
      <lucky.CardBody>
        {cardList.map(() => {
          return (
            <lucky.Card>
              <img src={CardB} alt="CardB" />
            </lucky.Card>
          );
        })}
      </lucky.CardBody>
      <lucky.Dialog>
        <lucky.Name>농담곰</lucky.Name>
        <lucky.Content>
          <hr />
          너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 특별한 행운을 가져다 줄걸?
        </lucky.Content>
      </lucky.Dialog>
      <lucky.Gom>
        <img src={Gom} alt="Gom" />
      </lucky.Gom>
    </lucky.Body>
  );
}

export default LuckyPage;
