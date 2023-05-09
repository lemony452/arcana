import React, { useState, useEffect } from 'react';
import * as CardStyle from './card_style';
import CardBack from '../../../Assets/cards/cardb.svg';
// import CardFront from '../../../Assets/cards/F0.svg';

interface CardType {
  index: number;
  card: number;
  selectedCard: number[];
  setSelectedCard: React.Dispatch<React.SetStateAction<number[]>>;
  confirmedCard: boolean;
}

function Card({ index, card, selectedCard, setSelectedCard, confirmedCard }: CardType) {
  const [flipped, setFlipped] = useState(false);
  const handleCardClick = () => {
    if (!selectedCard.includes(card) && !confirmedCard) {
      if (selectedCard.length < 10) {
        setFlipped(true);
        setSelectedCard((array) => [...array, card]);
      }
    } else {
      setFlipped(false);
      setSelectedCard(selectedCard.filter((num) => num !== card));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (confirmedCard) {
        setFlipped(false);
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
      <CardStyle.CardBody style={{ transform: flipped ? 'translateY(-50px)' : 'none' }} index={index}>
        <CardStyle.Front style={{ opacity: selectedCard.includes(card) ? '1' : '0' }}>
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
      <CardStyle.CardBody style={{ transform: flipped ? 'translateY(-50px)' : 'none' }} index={index}>
        <CardStyle.Front>
          <img src={CardBack} alt="Cardback" />
        </CardStyle.Front>
        <CardStyle.Back>{card}</CardStyle.Back>
      </CardStyle.CardBody>
    </CardStyle.Body>
  );

  return <div>{cardSpread}</div>;
}

export default Card;
