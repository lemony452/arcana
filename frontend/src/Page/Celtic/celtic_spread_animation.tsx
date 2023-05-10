import React from 'react';
import * as layer from './celtic_spread_animation_style';
import { FilppedCard } from '../Spread/Component/card';

function CelticSpread() {
  return (
    <layer.CelticBox
      initial={{ y: -500 }}
      animate={{ y: [-500, 40, 0] }}
      exit={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <layer.CelticCard animate={{ x: '37vw', y: '29vh' }} transition={{ duration: 1, delay: 1.5 }}>
        <FilppedCard card={1} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '40.35vw', y: '40.5vh' }} transition={{ duration: 1, delay: 1.625 }}>
        <FilppedCard card={2} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '38.75vw' }} transition={{ duration: 1, delay: 1.75 }}>
        <FilppedCard card={3} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '38.75vw', y: '69.5vh' }} transition={{ duration: 1, delay: 1.875 }}>
        <FilppedCard card={4} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '25.45vw', y: '34.8vh' }} transition={{ duration: 1, delay: 2 }}>
        <FilppedCard card={5} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '52.05vw', y: '34.8vh' }} transition={{ duration: 1, delay: 2.125 }}>
        <FilppedCard card={6} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '63.6vw', y: '69.5vh' }} transition={{ duration: 1, delay: 2.25 }}>
        <FilppedCard card={7} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '63.6vw', y: '46.3vh' }} transition={{ duration: 1, delay: 2.375 }}>
        <FilppedCard card={8} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '63.6vw', y: '23.17vh' }} transition={{ duration: 1, delay: 2.5 }}>
        <FilppedCard card={9} />
      </layer.CelticCard>
      <layer.CelticCard animate={{ x: '63.6vw' }} transition={{ duration: 1, delay: 2.625 }}>
        <FilppedCard card={10} />
      </layer.CelticCard>
    </layer.CelticBox>
  );
}

export default CelticSpread;
