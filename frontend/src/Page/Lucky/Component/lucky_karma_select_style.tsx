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

const CardAnimationS = keyframes`
  0% {
    transform: rotateY(-90deg)
  }
  100% {
    transform: rotateY(0deg)
  }
`;

const CardAnimationE = keyframes`
  0% {
    transform: rotateY(0deg)
  }
  100% {
    transform: rotateY(-90deg)
  }
`;

export const Card = styled.div`
  padding: 50px;
`;

export const CardBack = styled.img<{ cardAniState: boolean }>`
  width: auto;
  max-height: 350px;
  // 매개변수를 받아서 카드를 뒤집는 상태를 조정
  animation-name: ${(props) => (props.cardAniState ? CardAnimationE : CardAnimationS)};
  animation-duration: 0.3s;
`;

export const CardFront = styled.img<{ cardAniState: boolean }>`
  width: auto;
  max-height: 350px;
  animation-name: ${(props) => (props.cardAniState ? CardAnimationS : CardAnimationE)};
  animation-duration: 0.3s;
`;
