import React from 'react';
import { TitleBox, Title, SubTitle, StyledCircle, CardBox } from './main_style';
import Card from './components/card';
import Character from './components/character';
import { useCardStore, useHoverStore } from '../../Store/Main/main';

function Main() {
  const { cardOrder } = useCardStore();
  const { hover } = useHoverStore();
  let color = 'pink';
  if (cardOrder === 'time') {
    color = 'blue';
  } else if (cardOrder === 'instant') {
    color = 'green';
  }
  console.log(cardOrder);
  console.log(hover);
  return (
    <div style={{ position: 'relative' }}>
      <TitleBox>
        <Title>ARCANA</Title>
        <SubTitle>동물 친구들의 타로 서비스 아르카나</SubTitle>
      </TitleBox>
      <StyledCircle color={color} />
      <Character />
      <CardBox>
        <Card />
      </CardBox>
    </div>
  );
}

export default Main;
