import React, { useState, useEffect } from 'react';
import * as CardStyle from './card_style';
import CardBack from '../../../Assets/cards/cardb.svg';
// import CardFront from '../../../Assets/cards/F0.svg';

interface SelectedCardType {
  index: number;
  card: number;
  selectedCardList: number[];
  setSelectedCardList: React.Dispatch<React.SetStateAction<number[]>>;
  confirmedCard: boolean;
}

export function SelectedCard({ index, card, selectedCardList, setSelectedCardList, confirmedCard }: SelectedCardType) {
  const [selected, setSelected] = useState(false);
  const handleCardClick = () => {
    if (!selectedCardList.includes(card) && !confirmedCard) {
      if (selectedCardList.length < 10) {
        setSelected(true);
        setSelectedCardList((array) => [...array, card]);
      }
    } else {
      setSelected(false);
      setSelectedCardList(selectedCardList.filter((num) => num !== card));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (confirmedCard) {
        setSelected(false);
      }
    }, 300);
  }, [confirmedCard]);

  const cardSpread = confirmedCard ? (
    <CardStyle.Body
      onClick={handleCardClick}
      initial={{ rotate: 1 * index - 39 }}
      animate={{ rotate: 0 }}
      transition={{ delay: 0.7, duration: 1 }}
      style={{ originX: 0.5, originY: 5 }}
    >
      <CardStyle.CardBody style={{ transform: selected ? 'translateY(-50px)' : 'none' }}>
        <CardStyle.Front style={{ opacity: selectedCardList.includes(card) ? '1' : '0' }}>
          <img src={CardBack} alt="Cardback" />
        </CardStyle.Front>
        <CardStyle.Back>{card}</CardStyle.Back>
      </CardStyle.CardBody>
    </CardStyle.Body>
  ) : (
    <CardStyle.Body
      onClick={handleCardClick}
      initial={{ rotate: -39 }}
      animate={{ rotate: 1 * index - 39 }}
      transition={{ duration: (2 / 78) * index }}
      style={{ originX: 0.5, originY: 5 }}
    >
      <CardStyle.CardBody style={{ transform: selected ? 'translateY(-50px)' : 'none' }}>
        <CardStyle.Front>
          <img src={CardBack} alt="Cardback" />
        </CardStyle.Front>
        <CardStyle.Back>{card}</CardStyle.Back>
      </CardStyle.CardBody>
    </CardStyle.Body>
  );

  return <div>{cardSpread}</div>;
}

interface FilppededCardType {
  card: number;
}

export function FilppedCard({ card }: FilppededCardType) {
  const [flipped, setFlipped] = useState(false);
  const handleCardClick = () => {
    setFlipped(true);
  };
  return (
    <CardStyle.Body onClick={handleCardClick}>
      <CardStyle.CardBody style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}>
        <CardStyle.Front>
          <img src={CardBack} alt="Cardback" />
        </CardStyle.Front>
        <CardStyle.Back>{card}</CardStyle.Back>
      </CardStyle.CardBody>
    </CardStyle.Body>
  );
}
