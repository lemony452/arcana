import React from 'react';
import { StyledChar, CharBox } from '../main_style';
import Char0 from '../../../Assets/characters/char0.png';
import Char1 from '../../../Assets/characters/char1.png';
import Char2 from '../../../Assets/characters/char2.png';
import { useCardStore, useHoverStore } from '../../../Store/Main/main';

function Character() {
  const { cardOrder } = useCardStore();
  const { hover } = useHoverStore();

  return (
    <CharBox>
      {cardOrder === 'celtic' ? <StyledChar className={hover ? 'hover' : ''} src={Char0} /> : null}
      {cardOrder === 'time' ? <StyledChar className={hover ? 'hover' : ''} src={Char1} /> : null}
      {cardOrder === 'instant' ? <StyledChar className={hover ? 'hover' : ''} src={Char2} /> : null}
    </CharBox>
  );
}

export default Character;
