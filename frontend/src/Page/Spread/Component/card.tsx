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
    <CardStyle.SelectedBody
      onClick={handleCardClick}
      initial={{ rotate: 1 * index - 39 }}
      animate={{ rotate: 0 }}
      transition={{ delay: 0.7, duration: 1 }}
      style={{ originX: 0.5, originY: 5 }}
    >
      <CardStyle.SelectedCardBody style={{ transform: selected ? 'translateY(-50px)' : 'none' }}>
        <CardStyle.SelectedBack style={{ opacity: selectedCardList.includes(card) ? '1' : '0' }}>
          <img src={CardBack} alt="Cardback" />
        </CardStyle.SelectedBack>
      </CardStyle.SelectedCardBody>
    </CardStyle.SelectedBody>
  ) : (
    <CardStyle.SelectedBody
      onClick={handleCardClick}
      initial={{ rotate: -39 }}
      animate={{ rotate: 1 * index - 39 }}
      transition={{ duration: (2 / 78) * index }}
      style={{ originX: 0.5, originY: 5 }}
    >
      <CardStyle.SelectedCardBody style={{ transform: selected ? 'translateY(-50px)' : 'none' }}>
        <CardStyle.SelectedBack>
          <img src={CardBack} alt="Cardback" />
        </CardStyle.SelectedBack>
      </CardStyle.SelectedCardBody>
    </CardStyle.SelectedBody>
  );

  return <div>{cardSpread}</div>;
}

interface FilppedCardType {
  card: number;
  size: string;
}

export function FilppedCard({ card, size }: FilppedCardType) {
  const [flipped, setFlipped] = useState(false);
  const handleCardClick = () => {
    setFlipped(true);
  };
  return (
    <CardStyle.FilppedBody onClick={handleCardClick} size={size}>
      <CardStyle.FilppedCardBody style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}>
        <CardStyle.FilppedBack size={size}>
          <img src={CardBack} alt="Cardback" />
        </CardStyle.FilppedBack>
        <CardStyle.FilppedFront size={size}>{card}</CardStyle.FilppedFront>
      </CardStyle.FilppedCardBody>
    </CardStyle.FilppedBody>
  );
}
