import React from 'react';
import * as layer from './celtic_spread_style';

function CelticSpread() {
  return (
    <layer.MainBox>
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
          <layer.CelticSix>6</layer.CelticSix>
        </layer.CelticPartThree>
        <layer.CelticPartFour>
          <layer.CelticSeven>7</layer.CelticSeven>
          <layer.CelticEight>8</layer.CelticEight>
          <layer.CelticNine>9</layer.CelticNine>
          <layer.CelticTen>10</layer.CelticTen>
        </layer.CelticPartFour>
      </layer.CelticBox>
    </layer.MainBox>
  );
}

export default CelticSpread;
