import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as spreadCard from './spread_card_style';
import { SelectedCard } from './Component/card';
import Dialog from '../../Common/dialog';
import { OptionBtn } from '../../Common/common_styled';

function SpreadCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cardList, setCardList] = useState<number[]>([]);
  const [needCardNum, setNeedCardNum] = useState<number>(0);
  const [selectedCardList, setSelectedCardList] = useState<number[]>([]);
  const [confirmedCard, setConfirmedCard] = useState<boolean>(false);
  const [spreadContent, setSpreadContent] = useState<string>('');

  let color;
  if (location.state === 'celtic') {
    color = '#cba1ff';
  } else if (location.state === 'year') {
    color = '#ff945e';
  } else if (location.state === 'month') {
    color = '#ff945e';
  } else {
    color = '#ff74b6';
  }

  // 필요한 카드 갯수
  useEffect(() => {
    if (location.state === 'celtic') {
      setNeedCardNum(10);
      setSpreadContent('카드를 10장 선택해');
    }
    if (location.state === 'year') {
      setNeedCardNum(12);
      setSpreadContent('카드를 12장 선택해보게');
    }
    if (location.state === 'month') {
      setNeedCardNum(6);
      setSpreadContent('카드를 6장 선택해보게');
    }
    if (location.state === 'three') {
      setNeedCardNum(4);
      setSpreadContent('카드를 4장 선택해주세요');
    }
    if (location.state === 'two') {
      setNeedCardNum(3);
      setSpreadContent('카드를 3장 선택해주세요');
    }
  }, []);

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

  const confirmedHandler = () => {
    if (selectedCardList.length === needCardNum) {
      setConfirmedCard(true);
      setTimeout(() => {
        if (location.state === 'celtic') {
          navigate('/celtic/spread');
        }
        if (location.state === 'year') {
          navigate('/time/year');
        }
        if (location.state === 'month') {
          navigate('/time/month');
        }
        if (location.state === 'three') {
          navigate('/instant/three');
        }
        if (location.state === 'two') {
          navigate('/instant/two');
        }
      }, 3000);
    }
  };

  const variants = {
    start: { opacity: [0, 1], transition: { duration: 0.5 } },
    move: { opacity: [1], y: [0, 40, -500], transition: { delay: 2, duration: 0.7, ease: 'easeIn' } },
  };

  return (
    <spreadCard.Body>
      {/* <spreadCard.NumBody>
        <spreadCard.Num>
          선택 {selectedCardList.length} / {needCardNum}
        </spreadCard.Num>
        <spreadCard.Button onClick={confirmedHandler}>클릭</spreadCard.Button>
      </spreadCard.NumBody> */}
      <spreadCard.CardBody animate={confirmedCard ? 'move' : 'start'} variants={variants}>
        {cardList.map((card, index) => (
          <SelectedCard
            index={index}
            card={card}
            key={card}
            selectedCardList={selectedCardList}
            setSelectedCardList={setSelectedCardList}
            confirmedCard={confirmedCard}
            needCardNum={needCardNum}
          />
        ))}
      </spreadCard.CardBody>
      <spreadCard.NumBody color={color}>
        <spreadCard.Num
          key={selectedCardList.length}
          initial={{ rotateY: -180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedCardList.length}
        </spreadCard.Num>
      </spreadCard.NumBody>
      <Dialog content={spreadContent} next={false}>
        {!confirmedCard && selectedCardList.length === needCardNum && (
          <OptionBtn onClick={confirmedHandler}>선택 완료</OptionBtn>
        )}
      </Dialog>
    </spreadCard.Body>
  );
}

export default SpreadCard;
