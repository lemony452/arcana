import React from 'react';
import * as layer from '../time_style';

function MonthSpread({ spreadList }: { spreadList: number[] }) {
  const imgSrc = (num: number) => `https://k8d107.p.ssafy.io/api/v1/images/${spreadList[num - 1]}.png`;
  return (
    <layer.TimeBox>
      <layer.TimePartOne>
        <layer.MonthCard>
          <img src={imgSrc(1)} alt="CardFront" />
        </layer.MonthCard>
        <layer.MonthCard>
          <img src={imgSrc(2)} alt="CardFront" />
        </layer.MonthCard>
        <layer.MonthCard>
          <img src={imgSrc(3)} alt="CardFront" />
        </layer.MonthCard>
      </layer.TimePartOne>
      <layer.TimePartTwo>
        <layer.MonthCard>
          <img src={imgSrc(4)} alt="CardFront" />
        </layer.MonthCard>
        <layer.MonthCard>
          <img src={imgSrc(5)} alt="CardFront" />
        </layer.MonthCard>
        <layer.MonthCard>
          <img src={imgSrc(6)} alt="CardFront" />
        </layer.MonthCard>
      </layer.TimePartTwo>
    </layer.TimeBox>
  );
}

export default MonthSpread;
