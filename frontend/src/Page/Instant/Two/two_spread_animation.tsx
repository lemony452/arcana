import React from 'react';
import * as layer from './two_spread_animation_style';
import { FilppedCard } from '../../Spread/Component/card';

function YearSpread() {
  return (
    <layer.TimeBox
      initial={{ y: -500 }}
      animate={{ y: [-500, 0] }}
      exit={{ y: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
    >
      <layer.TwoCard
        animate={{ x: '33.4vw', y: '2.33vh' }}
        transition={{ duration: 1, delay: 1.5, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={2} size="24.3vh" setTime={2950} type="instant" />
      </layer.TwoCard>
      <layer.TwoCard
        animate={{ x: '49.72vw', y: '2.33vh' }}
        transition={{ duration: 1, delay: 1.625, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={3} size="24.3vh" setTime={2950} type="instant" />
      </layer.TwoCard>
      <layer.TwoCard
        animate={{ x: '41.55vw', y: '47.3vh' }}
        transition={{ duration: 1, delay: 1.75, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={1} size="24.3vh" setTime={2950} type="instant" />
      </layer.TwoCard>
    </layer.TimeBox>
  );
}

export default YearSpread;
