import React from 'react';
import * as layer from '../select_style';
import { saveIndexStore } from '../../../Store/User/fortune';

function TwoSpread() {
  const { indexList } = saveIndexStore();
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${indexList[num - 1]}.png`;
  return (
    <layer.SelectBox>
      <layer.SelectPartOne>
        <layer.SelectCard>
          <img src={imgSrc(2)} alt="CardFront" />
        </layer.SelectCard>
        <layer.SelectCard>
          <img src={imgSrc(3)} alt="CardFront" />
        </layer.SelectCard>
      </layer.SelectPartOne>
      <layer.SelectPartTwo>
        <layer.SelectCard>
          <img src={imgSrc(1)} alt="CardFront" />
        </layer.SelectCard>
      </layer.SelectPartTwo>
    </layer.SelectBox>
  );
}

export default TwoSpread;
