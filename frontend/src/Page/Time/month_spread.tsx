import React from 'react';
import * as layer from './time_style';

function MonthSpread() {
  return (
    <layer.TimeBox>
      <layer.TimePartOne>
        <layer.MonthCard>7</layer.MonthCard>
      </layer.TimePartOne>
      <layer.TimePartTwo>
        <layer.MonthCard>1</layer.MonthCard>
        <layer.MonthCard>2</layer.MonthCard>
        <layer.MonthCard>3</layer.MonthCard>
      </layer.TimePartTwo>
      <layer.TimePartThree>
        <layer.MonthCard>4</layer.MonthCard>
        <layer.MonthCard>5</layer.MonthCard>
        <layer.MonthCard>6</layer.MonthCard>
      </layer.TimePartThree>
    </layer.TimeBox>
  );
}

export default MonthSpread;
