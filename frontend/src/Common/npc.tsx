import React, { useEffect, useState } from 'react';
import { NpcBox, NpcCharacter } from './common_styled';
import Gom from '../Assets/characters/charDialog0.png';
import Tou from '../Assets/characters/charDialog1.png';
import Yong from '../Assets/characters/charDialog2.png';

interface NpcType {
  num: number;
}

function Npc({ num }: NpcType) {
  const [character, setCharacter] = useState(<img src="" alt="" />);

  useEffect(() => {
    if (num === 0) {
      setCharacter(<img src={Gom} alt="" />);
    } else if (num === 1) {
      setCharacter(<img src={Tou} alt="" />);
    } else {
      setCharacter(<img src={Yong} alt="" />);
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
