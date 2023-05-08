import styled from 'styled-components';

export const Side = styled.div`
  width: calc(100vw / 3);
  height: 100vh;
  background: linear-gradient(180deg, #ffffff 0.01%, #f1e9e4 100%);
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.71);
  left: -55%;
  top: 0;
  position: fixed;
  z-index: 2;
  transition: 0.5s ease;
  &.open {
    left: 0;
    transition: 0.5s ease;
  }
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContent = styled.div`
  display: flex;
  width: calc(100vw / 3);
  height: calc(100vh / 3);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 13vh;
`;

export const Nickname = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 4vh;
`;

export const TarotToken = styled.div`
  display: flex;
  font-size: 1.4em;
  font-weight: bold;
  width: calc(100vw / 4);
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const TarotListContent = styled.div`
  display: flex;
  width: calc(100vw / 3);
  height: calc(100vh / 2);
  /* justify-content: center; */
  /* justify-content: flex-end; */
  align-items: center;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  display: flex;
  width: calc(100vw / 4);
  height: 6.5vh;
  height: calc();
  background: #ebeaee;
  border: 1.5px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  font-size: 1.4em;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.7em 0 0.7em;
  margin: 0.5em 0 0.5em 0;
`;
