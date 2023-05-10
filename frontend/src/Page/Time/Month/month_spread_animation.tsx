import React from 'react';
import * as layer from './month_spread_animation_style';
import { FilppedCard } from '../../Spread/Component/card';

function YearSpread() {
  return (
    <layer.TimeBox
      initial={{ y: -500 }}
      animate={{ y: [-500, 40, 0] }}
      exit={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <layer.MonthCard animate={{ x: '26.77vw', y: '2.33vh' }} transition={{ duration: 1, delay: 1.5 }}>
        <FilppedCard card={1} size="24.3vh" setTime={3450} />
      </layer.MonthCard>
      <layer.MonthCard animate={{ x: '41.55vw', y: '2.33vh' }} transition={{ duration: 1, delay: 1.625 }}>
        <FilppedCard card={2} size="24.3vh" setTime={3450} />
      </layer.MonthCard>
      <layer.MonthCard animate={{ x: '56.33vw', y: '2.33vh' }} transition={{ duration: 1, delay: 1.75 }}>
        <FilppedCard card={3} size="24.3vh" setTime={3450} />
      </layer.MonthCard>
      <layer.MonthCard animate={{ x: '26.77vw', y: '47.3vh' }} transition={{ duration: 1, delay: 2 }}>
        <FilppedCard card={4} size="24.3vh" setTime={3450} />
      </layer.MonthCard>
      <layer.MonthCard animate={{ x: '41.55vw', y: '47.3vh' }} transition={{ duration: 1, delay: 2.125 }}>
        <FilppedCard card={5} size="24.3vh" setTime={3450} />
      </layer.MonthCard>
      <layer.MonthCard animate={{ x: '56.33vw', y: '47.3vh' }} transition={{ duration: 1, delay: 2.25 }}>
        <FilppedCard card={6} size="24.3vh" setTime={3450} />
      </layer.MonthCard>
    </layer.TimeBox>
  );
}

export default YearSpread;
