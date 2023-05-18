import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Body = styled.div`
  height: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  width: auto;
  height: 57vh;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

const CardSlideInAnimation = keyframes`
  0% {
    transform: translateY(-100vh) scale(0.8);
  }
  65% {
    transform: translateY(35px) scale(0.8);
  }
  90% {
    transform: translateY(-15px);
  }
  95% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const CardSlideOutAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(35px) scale(0.8);
  }
  100% {
    transform: translateY(-100vh) scale(0.8);
  }
`;

const CardSelectAnimationS = keyframes`
  0% {
    transform: rotateY(-90deg) scale(1.1);
  }
  100% {
    transform: rotateY(0deg) scale(1.1);
  }
`;

const CardSelectAnimationE = keyframes`
  0% {
    transform: rotateY(0deg) scale(1.1);
  }
  100% {
    transform: rotateY(-90deg) scale(1.1);;
  }
`;

export const Card = styled(motion.div)`
  padding: 3vw;
  > img {
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const CardBackIn = styled(motion.img)<{ cardanistate: number }>`
  width: 13.85vw;
  aspect-ratio: 3 / 5;
  cursor: pointer;
  // 매개변수를 받아서 카드를 뒤집는 상태를 조정
  animation-name: ${(props) => (props.cardanistate === 1 ? CardSlideInAnimation : null)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  > img {
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const CardBackNormal = styled(motion.img)<{ cardanistate: number }>`
  width: 13.85vw;
  aspect-ratio: 3 / 5;
  cursor: pointer;
  animation-name: ${(props) => (props.cardanistate === 0 ? CardSlideOutAnimation : null)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  > img {
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const CardBackOut = styled(motion.img)<{ cardanistate: number }>`
  width: 13.85vw;
  aspect-ratio: 3 / 5;
  cursor: pointer;
  // 매개변수를 받아서 카드를 뒤집는 상태를 조정
  animation-name: ${(props) => (props.cardanistate === 2 ? null : CardSlideOutAnimation)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  > img {
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const SelectCardBack = styled(motion.img)<{ $cardselectanistate: boolean }>`
  width: 13.85vw;
  aspect-ratio: 3 / 5;
  animation-name: ${(props) => (props.$cardselectanistate ? CardSelectAnimationE : null)};
  animation-duration: 1s;
  cursor: pointer;
  > img {
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const SelectCardFront = styled(motion.img)<{ $cardselectanistate: boolean }>`
  width: 13.85vw;
  aspect-ratio: 3 / 5;
  animation-name: ${(props) => (props.$cardselectanistate ? CardSelectAnimationS : null)};
  animation-duration: 0.8s;
  > img {
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;

export const NullCard = styled.div`
  width: 13.85vw;
  aspect-ratio: 3 / 5;
`;
