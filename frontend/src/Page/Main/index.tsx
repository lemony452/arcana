import React from 'react';
import { TitleBox, Title, SubTitle, StyledCircle, CardBox } from './main_style';
import Card from './components/card';
import Character from './components/character';
import { useCardStore } from '../../Store/Main/main';

function Main() {
  const { cardIdx } = useCardStore();
  let color = 'pink';
  if (cardIdx === 1) {
    color = 'blue';
  } else if (cardIdx === 2) {
    color = 'green';
  }
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
