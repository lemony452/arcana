import React from 'react';
import { useFortuneStore } from '../../Store/User/fortune';
import * as layer from './celtic_spread_style';

function CelticSpread() {
  const { fortune, tarotList, option, inputValue } = useFortuneStore();
  console.log(fortune);
  console.log(tarotList);
  console.log(option);
  console.log(inputValue);
  return (
    <layer.CelticBox>
      <layer.CelticPartOne>
        <layer.CelticFive>5</layer.CelticFive>
      </layer.CelticPartOne>
      <layer.CelticPartTwo>
        <layer.CelticThree>3</layer.CelticThree>
        <layer.celticPartZero>
          <layer.CelticOne>1</layer.CelticOne>
          <layer.CelticTwo>2</layer.CelticTwo>
        </layer.celticPartZero>
        <layer.CelticFour>4</layer.CelticFour>
      </layer.CelticPartTwo>
      <layer.CelticPartThree>
        <layer.CelticFive>6</layer.CelticFive>
      </layer.CelticPartThree>
      <layer.CelticPartFour>
        <layer.CelticFive>7</layer.CelticFive>
        <layer.CelticFive>8</layer.CelticFive>
        <layer.CelticFive>9</layer.CelticFive>
        <layer.CelticFive>10</layer.CelticFive>
      </layer.CelticPartFour>
    </layer.CelticBox>
  );
}

export default CelticSpread;
