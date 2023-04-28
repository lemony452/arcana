import React from 'react';
import { StyledChar, CharBox } from '../main_style';
import Char0 from '../../../Assets/characters/char0.png';
import { useCardStore } from '../../../Store/Main/main';

function Character() {
  // const { cardIdx } = useCardStore();

  return (
    <CharBox>
      <StyledChar src={Char0} />
    </CharBox>
    // <StyledChar src={Char0} />
  );
}

export default Character;
