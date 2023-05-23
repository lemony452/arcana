import React from 'react';
import * as layer from '../time_style';

function YearSpread({ spreadList }: { spreadList: number[] }) {
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${spreadList[num - 1]}.png`;
  return (
    <layer.TimeBox>
      <layer.TimePartOne>
        <layer.YearCard>
          <img src={imgSrc(1)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(2)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(3)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(4)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(5)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(6)} alt="CardFront" />
        </layer.YearCard>
      </layer.TimePartOne>
      <layer.TimePartTwo>
        <layer.YearCard>
          <img src={imgSrc(7)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(8)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(9)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(10)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(11)} alt="CardFront" />
        </layer.YearCard>
        <layer.YearCard>
          <img src={imgSrc(12)} alt="CardFront" />
        </layer.YearCard>
      </layer.TimePartTwo>
    </layer.TimeBox>
  );
}

export default YearSpread;
