import styled from 'styled-components';

export const MainBox = styled.div`
  /* background-color: blue; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const SelectBox = styled.div`
  /* background-color: red; */
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aspect-ratio: 1 / 1;
`;

export const SelectPartOne = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SelectPartTwo = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: violet; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SelectCard = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  height: 90%;
  aspect-ratio: 3 / 5;
  > img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 1px 1px 3px gray;
  }
`;
