import styled from 'styled-components';

export const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  width: 30vw;
  height: calc(100vh / 1.5);
`;

export const Card = styled.div`
  padding: 3vw;
  margin-top: calc(((100vh / 1.5) - (13.85vw * 5 / 3) - 6vw) / 2 - 5vh);
`;

export const CardFront = styled.img`
  width: 13.85vw;
  aspect-ratio: 3 / 5;
  margin-inline: 2.075vw;
`;

export const CardTitle = styled.div`
  height: 5vh;
  text-align: center;
  font-size: 4.5vh;
  margin-inline: auto;
`;

export const Cardcontent = styled.div`
  max-width: 13.85vw;
  margin-inline: auto;
  font-size: 1em;
`;

export const Button = styled.button`
  align-self: center;
  cursor: pointer;
  > img {
    width: 32px;
    height: 32px;
  }
`;
