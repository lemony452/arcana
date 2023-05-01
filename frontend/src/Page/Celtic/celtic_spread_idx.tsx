import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import * as layer from './celtic_spread_style';
import Celtic from './celtic_spread';
import { SpreadBtn, CardArea, DefaultCard, ChatArea, SpreadModal } from '../Common/common_style';

function CelticSpread() {
  // const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const onNext = (e: any) => {
    return setIndex(index + 1);
  };
  console.log(index);
  // const MoveCelticDetail = () => {
  //   navigate('/celtic/detail');
  // };

  if (index === 0) {
    return (
      <layer.MainBox>
        <Celtic />
        <SpreadBtn onClick={onNext}>해석보기</SpreadBtn>
      </layer.MainBox>
    );
  }
  if (index === 1) {
    return (
      <>
        <CardArea>
          <DefaultCard>1</DefaultCard>
          <DefaultCard>2</DefaultCard>
          <SpreadModal>
            <Celtic />
          </SpreadModal>
        </CardArea>
        <ChatArea>
          <SpreadBtn onClick={onNext}>다음</SpreadBtn>
        </ChatArea>
      </>
    );
  }
  if (index === 2) {
    return (
      <>
        <CardArea>
          <DefaultCard>3</DefaultCard>
          <DefaultCard>4</DefaultCard>
          <SpreadModal>
            <Celtic />
          </SpreadModal>
        </CardArea>
        <ChatArea>
          <SpreadBtn onClick={onNext}>다음</SpreadBtn>
        </ChatArea>
      </>
    );
  }
  if (index === 3) {
    return (
      <>
        <CardArea>
          <DefaultCard>5</DefaultCard>
          <DefaultCard>6</DefaultCard>
          <SpreadModal>
            <Celtic />
          </SpreadModal>
        </CardArea>
        <ChatArea>
          <SpreadBtn onClick={onNext}>다음</SpreadBtn>
        </ChatArea>
      </>
    );
  }
  if (index === 4) {
    return (
      <>
        <CardArea>
          <DefaultCard>7</DefaultCard>
          <DefaultCard>8</DefaultCard>
          <DefaultCard>9</DefaultCard>
          <SpreadModal>
            <Celtic />
          </SpreadModal>
        </CardArea>
        <ChatArea>
          <SpreadBtn onClick={onNext}>다음</SpreadBtn>
        </ChatArea>
      </>
    );
  }
  if (index === 5) {
    return (
      <>
        <CardArea>
          <DefaultCard>10</DefaultCard>
          <SpreadModal>
            <Celtic />
          </SpreadModal>
        </CardArea>
        <ChatArea>
          <SpreadBtn>럭키!</SpreadBtn>
        </ChatArea>
      </>
    );
  }
  return null;
}

export default CelticSpread;
