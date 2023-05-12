import React, { useState, useEffect } from 'react';
import * as CardStyle from './card_style';
import CardBack from '../../../Assets/cards/cardb.svg';
import { saveIndexStore } from '../../../Store/User/fortune';
// import CardFront from '../../../Assets/cards/F0.svg';

interface SelectedCardType {
  index: number;
  card: number;
  selectedCardList: number[];
  setSelectedCardList: React.Dispatch<React.SetStateAction<number[]>>;
  confirmedCard: boolean;
  needCardNum: number;
}

export function SelectedCard({
  index,
  card,
  selectedCardList,
  setSelectedCardList,
  confirmedCard,
  needCardNum,
}: SelectedCardType) {
  const [selected, setSelected] = useState(false);
  const handleCardClick = () => {
    if (!selectedCardList.includes(card) && !confirmedCard) {
      if (selectedCardList.length < needCardNum) {
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
      transition={{ delay: 0.7, duration: 0.7, ease: 'easeInOut' }}
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
      transition={{ delay: 0.5, duration: (1.5 / 78) * index }}
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
  setTime: number;
}

export function FilppedCard({ card, size, setTime }: FilppedCardType) {
  const [flipped, setFlipped] = useState(false);
  const { indexList } = saveIndexStore();

  const imgSrc = `https://k8d107.p.ssafy.io/api/v1/images/${indexList[card - 1]}.png`;

  useEffect(() => {
    setTimeout(() => {
      setFlipped(true);
    }, setTime);
  }, []);

  return (
    <CardStyle.FilppedBody size={size}>
      <CardStyle.FilppedCardBody style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}>
        <CardStyle.FilppedBack size={size}>
          <img src={CardBack} alt="CardBack" />
        </CardStyle.FilppedBack>
        <CardStyle.FilppedFront size={size}>
          <img src={imgSrc} alt="CardFront" />
        </CardStyle.FilppedFront>
      </CardStyle.FilppedCardBody>
    </CardStyle.FilppedBody>
  );
}
