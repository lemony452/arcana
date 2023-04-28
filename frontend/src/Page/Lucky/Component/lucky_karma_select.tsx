import React, { useEffect, useState } from 'react';
import * as luckySelect from './lucky_karma_select_style';
import CardB from '../../../Assets/cards/cardb.svg';

interface LuckyKarmaSelectType {
  selectCard: number; // 고른 카드 인덱스
  setSelectCard: React.Dispatch<React.SetStateAction<number>>;
  checkSelectState: boolean;
  setCheckSelectState: React.Dispatch<React.SetStateAction<boolean>>;
  cardList: {
    index: number;
    front: string;
    content: string;
    result: string;
  }[];
}

function LuckyKarmaSelect({
  selectCard,
  setSelectCard,
  cardList,
  checkSelectState,
  setCheckSelectState,
}: LuckyKarmaSelectType) {
  const [cardState, setCardState] = useState([1, 1, 1]); // 카드를 고를시 나머지 2장은 화면에서 슬라이드 아웃
  const [cardAniSelect, setCardAniSelect] = useState(-1); // 화면 바깥 클릭시 선택한 카드를 제외한 나머지 카드 슬라이드 인
  const [cardAniState, setCardAniState] = useState([1, 1, 1]);
  const [cardSelectAniState, setCardSelectAniState] = useState(false); // 카드 뒤질을때 부드러운 애니메이션용

  useEffect(() => {
    setTimeout(() => {
      setCardState([2, 2, 2]);
      setCardAniState([2, 2, 2]);
    }, 1000);
  }, []);

  console.log(checkSelectState);

  const cardClickHandler = (index: number) => {
    // 카드 리스트 인덱스따라서 카드를 선택함
    if (cardAniState[index] === 2) {
      if (index === 0) {
        setCardAniState([2, 0, 0]);
      } else if (index === 1) {
        setCardAniState([0, 2, 0]);
      } else {
        setCardAniState([0, 0, 2]);
      }

      // 지연시간을 주어서 카드 슬라이드시 끊키는 현상 제거
      setTimeout(() => {
        setSelectCard(index);
        setCardAniSelect(index);
        if (index === 0) {
          setCardState([2, 0, 0]);
        } else if (index === 1) {
          setCardState([0, 2, 0]);
        } else {
          setCardState([0, 0, 2]);
        }
        // 카드 인덱스로 컨텐츠 출력
      }, 800);
    }
  };

  const bodyClickHandler = () => {
    // 선택카드를 뒤집기 전까진 카드를 다시 선택가능
    if (checkSelectState !== true) {
      if (cardAniState[0] !== 2 || cardAniState[1] !== 2 || cardAniState[2] !== 2) {
        if (selectCard === 0) {
          setCardState([2, 1, 1]);
          setCardAniState([2, 1, 1]);
        } else if (selectCard === 1) {
          setCardState([1, 2, 1]);
          setCardAniState([1, 2, 1]);
        } else if (selectCard === 2) {
          setCardState([1, 1, 2]);
          setCardAniState([1, 1, 2]);
        }
        setSelectCard(-1);
        setTimeout(() => {
          setCardAniSelect(-1);
          setCardState([2, 2, 2]);
          setCardAniState([2, 2, 2]);
        }, 1000);
      }
    }
  };

  // 선택카드 오픈함수
  const selectCardOpenHandler = () => {
    setCardSelectAniState(true);
    setTimeout(() => {
      setCheckSelectState(true);
    }, 350);
  };

  const cardInOut = (index: number) => {
    if (cardState[index] === 1) {
      return (
        <luckySelect.CardBackIn
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
          src={CardB}
          alt="CardB"
          cardAniState={cardAniState[index]}
          onClick={(e) => {
            e.stopPropagation();
            cardClickHandler(index);
          }}
        />
      );
    }
    return (
      <luckySelect.CardBackOut
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
        src={CardB}
        alt="CardB"
        cardAniState={cardAniState[index]}
        onClick={(e) => {
          e.stopPropagation();
          cardClickHandler(index);
        }}
      />
    );
  };

  const showCard = (
    <luckySelect.CardBody>
      {cardList.map((card) => (
        <luckySelect.Card>{cardState[card.index] ? cardInOut(card.index) : <luckySelect.NullCard />}</luckySelect.Card>
      ))}
    </luckySelect.CardBody>
  );

  const openCard = (index: number) => {
    if (checkSelectState) {
      return (
        <luckySelect.SelectCardFront
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
          src={cardList[index].front}
          alt="CardB"
          cardSelectAniState={cardSelectAniState}
          // 클릭시 카드 오픈
          onClick={(e) => {
            e.stopPropagation();
            selectCardOpenHandler();
          }}
        />
      );
    }
    return (
      <luckySelect.SelectCardBack
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
        src={CardB}
        alt="CardB"
        cardSelectAniState={cardSelectAniState}
        cardAniSelect={cardAniSelect}
        // 클릭시 카드 오픈
        onClick={(e) => {
          e.stopPropagation();
          selectCardOpenHandler();
        }}
      />
    );
  };

  const threeCard =
    // 선택한 카드 최종 질문
    selectCard !== -1 ? (
      <luckySelect.CardBody>
        {cardList.map((card) => (
          <luckySelect.Card>{cardState[card.index] ? openCard(card.index) : <luckySelect.NullCard />}</luckySelect.Card>
        ))}
      </luckySelect.CardBody>
    ) : (
      showCard
    );

  return (
    <luckySelect.Body onClick={bodyClickHandler}>
      {threeCard}
      {/* <luckySelect.CardBody>
        {cardList.map((card) => (
          <luckySelect.Card>
            {cardState[card.index] ? (
              <luckySelect.CardFront
                src={card.front}
                alt="CardF"
                cardAniState={cardAniState[card.index]}
                onClick={() => {
                  cardClickHandler(card.index);
                }}
              />
            ) : (
              <luckySelect.CardBack
                src={CardB}
                alt="CardB"
                cardAniState={cardAniState[card.index]}
                onClick={() => {
                  cardClickHandler(card.index);
                }}
              />
            )}
          </luckySelect.Card>
        ))}
      </luckySelect.CardBody> */}
    </luckySelect.Body>
  );
}

export default LuckyKarmaSelect;
