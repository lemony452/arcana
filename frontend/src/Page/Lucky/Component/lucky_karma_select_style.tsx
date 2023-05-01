import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Body = styled.div`
  height: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  width: auto;
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
  padding: 50px;
`;

export const CardBackIn = styled(motion.img)<{ cardAniState: number }>`
  width: auto;
  max-height: 350px;
  cursor: pointer;
  // 매개변수를 받아서 카드를 뒤집는 상태를 조정
  animation-name: ${(props) => (props.cardAniState === 1 ? CardSlideInAnimation : null)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`;

export const CardBackNormal = styled(motion.img)<{ cardAniState: number }>`
  width: auto;
  max-height: 350px;
  cursor: pointer;
  animation-name: ${(props) => (props.cardAniState === 0 ? CardSlideOutAnimation : null)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`;

export const CardBackOut = styled(motion.img)<{ cardAniState: number }>`
  width: auto;
  max-height: 350px;
  cursor: pointer;
  // 매개변수를 받아서 카드를 뒤집는 상태를 조정
  animation-name: ${(props) => (props.cardAniState === 2 ? null : CardSlideOutAnimation)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`;

export const SelectCardBack = styled(motion.img)<{ cardSelectAniState: boolean; cardAniSelect: number }>`
  width: auto;
  max-height: 350px;
  animation-name: ${(props) => (props.cardSelectAniState ? CardSelectAnimationE : null)};
  animation-duration: 1s;
  cursor: pointer;
`;

export const SelectCardFront = styled(motion.img)<{ cardSelectAniState: boolean }>`
  width: auto;
  max-height: 350px;
  cursor: pointer;
  animation-name: ${(props) => (props.cardSelectAniState ? CardSelectAnimationS : null)};
  animation-duration: 0.8s;
`;

export const NullCard = styled.div`
  width: 212.44px;
  max-height: 350px;
`;
