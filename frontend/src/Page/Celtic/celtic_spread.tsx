import React from 'react';
import * as layer from './celtic_spread_style';
import { saveIndexStore } from '../../Store/User/fortune';

function CelticSpread({ spreadList }: { spreadList: number[] }) {
  // const { indexList } = saveIndexStore();
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${spreadList[num - 1]}.png`;
  return (
    <layer.CelticBox>
      <layer.CelticPartOne>
        <layer.CelticFive>
          <img src={imgSrc(5)} alt="CardFront" />
        </layer.CelticFive>
      </layer.CelticPartOne>
      <layer.CelticPartTwo>
        <layer.CelticThree>
          <img src={imgSrc(3)} alt="CardFront" />
        </layer.CelticThree>
        <layer.celticPartZero>
          <layer.CelticOne>
            <img src={imgSrc(1)} alt="CardFront" />
          </layer.CelticOne>
          <layer.CelticTwo>
            <img src={imgSrc(2)} alt="CardFront" />
          </layer.CelticTwo>
        </layer.celticPartZero>
        <layer.CelticFour>
          <img src={imgSrc(4)} alt="CardFront" />
        </layer.CelticFour>
      </layer.CelticPartTwo>
      <layer.CelticPartThree>
        <layer.CelticFive>
          <img src={imgSrc(6)} alt="CardFront" />
        </layer.CelticFive>
      </layer.CelticPartThree>
      <layer.CelticPartFour>
        <layer.CelticFive>
          <img src={imgSrc(7)} alt="CardFront" />
        </layer.CelticFive>
        <layer.CelticFive>
          <img src={imgSrc(8)} alt="CardFront" />
        </layer.CelticFive>
        <layer.CelticFive>
          <img src={imgSrc(9)} alt="CardFront" />
        </layer.CelticFive>
        <layer.CelticFive>
          <img src={imgSrc(10)} alt="CardFront" />
        </layer.CelticFive>
      </layer.CelticPartFour>
    </layer.CelticBox>
  );
}

export default CelticSpread;
