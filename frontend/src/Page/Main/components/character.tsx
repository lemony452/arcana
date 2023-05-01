import React from 'react';
import { StyledChar, CharBox } from '../main_style';
import Char0 from '../../../Assets/characters/char0.png';
import Char1 from '../../../Assets/characters/char1.png';
import Char2 from '../../../Assets/characters/char2.png';
import { useCardStore, useHoverStore } from '../../../Store/Main/main';

function Character() {
  const { cardIdx } = useCardStore();
  console.log('idx', cardIdx);

  const { hover } = useHoverStore();
  console.log('hover', hover);

  return (
    <CharBox>
      {cardIdx === 0 ? <StyledChar className={hover ? 'hover' : ''} src={Char0} /> : null}
      {cardIdx === 1 ? <StyledChar className={hover ? 'hover' : ''} src={Char1} /> : null}
      {cardIdx === 2 ? <StyledChar className={hover ? 'hover' : ''} src={Char2} /> : null}
    </CharBox>
    // <StyledChar src={Char0} />
  );
}

export default Character;
