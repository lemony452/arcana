import React, { useEffect, useState } from 'react';
import { NpcBox, NpcCharacter } from './common_styled';
import Draco from '../Assets/characters/draco.png';
import Toast from '../Assets/characters/toast.png';
import Kitty from '../Assets/characters/kitty.png';

interface NpcType {
  num: number;
}

function Npc({ num }: NpcType) {
  const [character, setCharacter] = useState(<img src="" alt="" />);

  useEffect(() => {
    if (num === 0) {
      setCharacter(<img src={Draco} alt="" />);
    } else if (num === 1) {
      setCharacter(<img src={Toast} alt="" />);
    } else {
      setCharacter(<img src={Kitty} alt="" />);
    }
  }, []);

  return (
    <NpcBox
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 2, opacity: 1 }}
      transition={{ duration: 6 }}
      exit={{ scale: 1, opacity: 1 }}
    >
      <NpcCharacter>{character}</NpcCharacter>
    </NpcBox>
  );
}

export default Npc;
