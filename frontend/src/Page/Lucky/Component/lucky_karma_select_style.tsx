import styled, { keyframes } from 'styled-components';

export const Body = styled.div`
  background-color: #faf7f7;
  height: 100vh;
`;

export const CardBody = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  height: 67%;
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
  padding: 30px;
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

export const Dialog = styled.div`
  background: linear-gradient(to left, #ffc1c1, white);
  height: 33%;
`;

export const Name = styled.div`
  margin-left: 300px;
  width: 120px;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`;

export const Content = styled.div`
  margin-left: 300px;
  font-size: 24px;
  width: 400px;
`;

export const Gom = styled.div`
  > img {
    height: 50vh;
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
`;
