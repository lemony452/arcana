import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as spreadCard from './spread_card_style';
import Card from './Component/card';

function SpreadCard() {
  const navigate = useNavigate();
  const [cardList, setCardList] = useState<number[]>([]);
  const [selectedCard, setSelectedCard] = useState<number[]>([]);
  const [confirmedCard, setConfirmedCard] = useState<boolean>(false);
  // 카드 순서 랜덤 리스트
  useEffect(() => {
    const cardIndex = (start: number, end: number) => {
      const array = [];
      for (let i = start; i < end; i += 1) {
        array.push(i);
      }
      return array;
    };
    const shuffle = (array: number[]) => {
      return array.sort(() => Math.random() - 0.5);
    };
    setCardList(shuffle(cardIndex(0, 78)));
  }, []);
  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  const confirmedHandler = () => {
    if (selectedCard.length === 10) {
      setConfirmedCard(true);
      setTimeout(() => {
        navigate('/celtic/spread');
      }, 3000);
    }
  };

  const variants = {
    move: { y: [0, 40, -500] },
  };

  return (
    <spreadCard.Body>
      <spreadCard.NumBody>
        <spreadCard.Num>선택 {selectedCard.length} / 10</spreadCard.Num>
        <spreadCard.Button onClick={confirmedHandler}>클릭</spreadCard.Button>
      </spreadCard.NumBody>
      <spreadCard.CardBody
        animate={confirmedCard ? 'move' : 'none'}
        variants={variants}
        transition={{ delay: 2, duration: 1, ease: 'easeIn' }}
      >
        {cardList.map((card, index) => (
          <Card
            index={index}
            card={card}
            key={card}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            confirmedCard={confirmedCard}
          />
        ))}
      </spreadCard.CardBody>
    </spreadCard.Body>
  );
}

export default SpreadCard;
