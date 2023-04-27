import React from 'react';
import { TitleBox, Title, SubTitle, StyledCircle, CardBox } from './main_style';
import Card from './components/card';

function Main() {
  return (
    <div style={{ position: 'relative' }}>
      <TitleBox>
        <Title>ARCANA</Title>
        <SubTitle>동물 친구들의 타로 서비스 아르카나</SubTitle>
      </TitleBox>
      <StyledCircle color="pink" />
      <CardBox>
        <Card />
      </CardBox>
    </div>
  );
}

export default Main;
