import React from 'react';
import * as layer from './time_style';
import Month from './month_spread';
import Year from './year_spread';

function TimeSpread() {
  return (
    <layer.MainBox>
      <Year />
    </layer.MainBox>
  );
}

export default TimeSpread;
