import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleBox, Title, SubTitle, StyledCircle, CardBox, SideBtn } from './main_style';
import Card from './components/card';
import Character from './components/character';
import { useCardStore, useHoverStore } from '../../Store/Main/main';
import SideBtnImg from '../../Assets/etc/sideBtn.png';
import SideBar from '../Mypage';

function Main() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

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
      <SideBtn src={SideBtnImg} onClick={toggleSide} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <TitleBox>
        <Title>ARCANA</Title>
        <SubTitle>동물 친구들의 타로 서비스 아르카나</SubTitle>
      </TitleBox>
      <StyledCircle color={color} />
      <Character />
      <CardBox>
        <Card isOpen={isOpen} />
      </CardBox>
    </div>
  );
}

export default Main;
