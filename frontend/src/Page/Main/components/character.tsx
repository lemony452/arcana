import React from 'react';
import { StyledChar, CharBox } from '../main_style';
import kitty from '../../../Assets/characters/kitty.png';
import toast from '../../../Assets/characters/toast.png';
import draco from '../../../Assets/characters/draco.png';
import { useCardStore, useHoverStore } from '../../../Store/Main/main';

function Character() {
  const { cardOrder } = useCardStore();
  const { hover } = useHoverStore();

  return (
    <CharBox>
      {cardOrder === 'celtic' ? <StyledChar id="kitty" className={hover ? 'hover' : ''} src={draco} /> : null}
      {cardOrder === 'time' ? <StyledChar id="toast" className={hover ? 'hover' : ''} src={toast} /> : null}
      {cardOrder === 'instant' ? <StyledChar id="draco" className={hover ? 'kittyHover' : ''} src={kitty} /> : null}
    </CharBox>
  );
}

export default Character;
