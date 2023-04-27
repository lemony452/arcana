import React from 'react';
import * as layer from './time_style';

function MonthSpread() {
  return (
    <layer.MainBox>
      <layer.TimeBox>
        <layer.TimePartOne>1</layer.TimePartOne>
        <layer.TimePartTwo>2</layer.TimePartTwo>
        <layer.TimePartThree>3</layer.TimePartThree>
      </layer.TimeBox>
    </layer.MainBox>
  );
}

export default MonthSpread;
