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
  const [cardState, setCardState] = useState([1, 1, 1]); // 0 화면에 안보임, 1 슬라이드, 2 비선택(작아짐), 3 화면에 보임
  const [cardAniState, setCardAniState] = useState([1, 1, 1]);
  const [cardSelectAniState, setCardSelectAniState] = useState(false); // 카드 뒤질을때 부드러운 애니메이션용

  useEffect(() => {
    setTimeout(() => {
      setCardState([3, 3, 3]);
      setCardAniState([3, 3, 3]);
    }, 1000);
  }, []);

  // 선택카드 확대
  const cardClickHandler = (index: number) => {
    // 카드 리스트 인덱스따라서 카드를 선택함
    if (cardAniState[index] === 2 || cardAniState[index] === 3) {
      setSelectCard(index);
      if (index === 0) {
        setCardAniState([3, 2, 2]);
        setCardState([3, 2, 2]);
      } else if (index === 1) {
        setCardAniState([2, 3, 2]);
        setCardState([2, 3, 2]);
      } else {
        setCardAniState([2, 2, 3]);
        setCardState([2, 2, 3]);
      }
    }
  };

  const bodyClickHandler = () => {
    // 선택카드를 뒤집기 전까진 카드를 다시 선택가능
    if (checkSelectState !== true) {
      setSelectCard(-1);
      setCardState([3, 3, 3]);
      setCardAniState([3, 3, 3]);
    }
  };

  // 선택카드 오픈함수
  const selectCardOpenHandler = (index: number) => {
    if (index === 0) {
      setCardAniState([3, 0, 0]);
    } else if (index === 1) {
      setCardAniState([0, 3, 0]);
    } else {
      setCardAniState([0, 0, 3]);
    }
    setCardSelectAniState(true);
    setTimeout(() => {
      if (index === 0) {
        setCardState([3, 0, 0]);
      } else if (index === 1) {
        setCardState([0, 3, 0]);
      } else {
        setCardState([0, 0, 3]);
      }
      // 카드 인덱스로 컨텐츠 출력
      setCheckSelectState(true);
    }, 800);
  };

  const cardInOut = (index: number) => {
    if (cardState[index] === 1) {
      return (
        // 초기 카드 3장 슬라이드 인
        <luckySelect.CardBackIn
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.4 }}
          initial={{ scale: 1 }}
          src={CardB}
          alt="CardB"
          cardanistate={cardAniState[index]}
          onClick={(e) => {
            e.stopPropagation();
            cardClickHandler(index);
          }}
        />
      );
    }
    if (cardState[index] === 2) {
      return (
        // 선택한 카드를 제외한 나머지 카드는 작아짐
        <luckySelect.CardBackNormal
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.4 }}
          initial={{ scale: 1 }}
          animate={{ scale: 0.75 }}
          exit={{ scale: 0.75 }}
          cardanistate={cardAniState[index]}
          src={CardB}
          alt="CardB"
          onClick={(e) => {
            e.stopPropagation();
            cardClickHandler(index);
          }}
        />
      );
    }
    return (
      <luckySelect.CardBackNormal
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.4 }}
        initial={{ scale: 1 }}
        src={CardB}
        alt="CardB"
        cardanistate={cardAniState[index]}
        onClick={(e) => {
          e.stopPropagation();
          cardClickHandler(index);
        }}
      />
    );
  };

  // 카드 선택전 3장을 뿌림
  const showCard = (
    <luckySelect.CardBody>
      {cardList.map((card) => (
        <luckySelect.Card key={card.index}>{cardInOut(card.index)}</luckySelect.Card>
      ))}
    </luckySelect.CardBody>
  );

  const openCard = (index: number) => {
    if (checkSelectState) {
      if (index === 0) {
        return (
          <luckySelect.SelectCardFront
            animate={{ transform: 'translateX(19.85vw)' }}
            transition={{ duration: 0.8 }}
            src={cardList[index].front}
            alt="CardB"
            $cardselectanistate={cardSelectAniState} // styled component에서 boolean 속성 경고 제거를 위한 '$'
          />
        );
      }
      if (index === 1) {
        return (
          <luckySelect.SelectCardFront
            initial={{ scale: 1.1 }}
            animate={{ scale: [1.1, 1.0] }}
            exit={{ scale: 1.0 }}
            transition={{ delay: 0.8 }}
            src={cardList[index].front}
            alt="CardB"
            $cardselectanistate={cardSelectAniState} // styled component에서 boolean 속성 경고 제거를 위한 '$'
          />
        );
      }
      return (
        <luckySelect.SelectCardFront
          animate={{ transform: 'translateX(-19.85vw)' }}
          transition={{ duration: 0.8 }}
          src={cardList[index].front}
          alt="CardB"
          $cardselectanistate={cardSelectAniState} // styled component에서 boolean 속성 경고 제거를 위한 '$'
        />
      );
    }
    if (cardState[index] === 2) {
      return (
        // 선택 확정시 나머지 카드는 슬라이드 아웃
        <luckySelect.CardBackNormal
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.4 }}
          initial={{ scale: 1 }}
          animate={{ scale: 0.75 }}
          exit={{ scale: 0.75 }}
          cardanistate={cardAniState[index]}
          src={CardB}
          alt="CardB"
          onClick={(e) => {
            e.stopPropagation();
            cardClickHandler(index);
          }}
        />
      );
    }
    return (
      <luckySelect.SelectCardBack
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.4 }}
        initial={{ scale: 1 }}
        src={CardB}
        alt="CardB"
        $cardselectanistate={cardSelectAniState}
        // 클릭시 카드 선택
        onClick={(e) => {
          e.stopPropagation();
          selectCardOpenHandler(index);
        }}
      />
    );
  };

  const threeCard =
    // 선택한 카드 최종 질문
    selectCard !== -1 ? (
      <luckySelect.CardBody>
        {cardList.map((card) => (
          <luckySelect.Card key={card.index}>
            {cardState[card.index] ? openCard(card.index) : <luckySelect.NullCard />}
          </luckySelect.Card>
        ))}
      </luckySelect.CardBody>
    ) : (
      showCard
    );

  return <luckySelect.Body onClick={bodyClickHandler}>{threeCard}</luckySelect.Body>;
}

export default LuckyKarmaSelect;
