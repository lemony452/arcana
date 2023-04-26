import React from 'react';
import * as luckySelect from './lucky_karma_select_style';
import CardB from '../../../Assets/cards/cardb.svg';
import CardF from '../../../Assets/cards/cardf.svg';
import Gom from '../../../Assets/cards/gom.svg';

function LuckyKarmaSelect() {
  const cardList = [1, 2, 3];
  return (
    <luckySelect.Body>
      <luckySelect.CardBody>
        {cardList.map(() => {
          return (
            <luckySelect.Card>
              <img src={CardB} alt="CardB" />
            </luckySelect.Card>
          );
        })}
      </luckySelect.CardBody>
      <luckySelect.Dialog>
        <luckySelect.Name>농담곰</luckySelect.Name>
        <luckySelect.Content>
          <hr />
          너의 행운 카드는 ㅇㅇㅇ 이야! 아마 너에게 특별한 행운을 가져다 줄걸?
        </luckySelect.Content>
      </luckySelect.Dialog>
      <luckySelect.Gom>
        <img src={Gom} alt="Gom" />
      </luckySelect.Gom>
    </luckySelect.Body>
  );
}

export default LuckyKarmaSelect;
