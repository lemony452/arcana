import React from 'react';
import * as layer from './time_style';

function YearSpread() {
  return (
    <layer.TimeBox>
      <layer.TimePartOne>
        <layer.YearCard>13</layer.YearCard>
      </layer.TimePartOne>
      <layer.TimePartTwo>
        <layer.YearCard>1</layer.YearCard>
        <layer.YearCard>2</layer.YearCard>
        <layer.YearCard>3</layer.YearCard>
        <layer.YearCard>4</layer.YearCard>
        <layer.YearCard>5</layer.YearCard>
        <layer.YearCard>6</layer.YearCard>
      </layer.TimePartTwo>
      <layer.TimePartThree>
        <layer.YearCard>7</layer.YearCard>
        <layer.YearCard>8</layer.YearCard>
        <layer.YearCard>9</layer.YearCard>
        <layer.YearCard>10</layer.YearCard>
        <layer.YearCard>11</layer.YearCard>
        <layer.YearCard>12</layer.YearCard>
      </layer.TimePartThree>
    </layer.TimeBox>
  );
}

export default YearSpread;
