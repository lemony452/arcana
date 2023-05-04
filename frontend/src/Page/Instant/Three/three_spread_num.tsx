import React from 'react';
import * as layer from '../select_style';

function TwoSpread() {
  return (
    <layer.SelectBox>
      <layer.SelectPartOne>
        <layer.SelectCard>2</layer.SelectCard>
        <layer.SelectCard>3</layer.SelectCard>
        <layer.SelectCard>4</layer.SelectCard>
      </layer.SelectPartOne>
      <layer.SelectPartTwo>
        <layer.SelectCard>1</layer.SelectCard>
      </layer.SelectPartTwo>
    </layer.SelectBox>
  );
}

export default TwoSpread;
