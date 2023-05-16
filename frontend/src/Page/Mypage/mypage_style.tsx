import styled from 'styled-components';

export const Side = styled.div`
  width: 27vw;
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
  &.detail {
    width: 27vw;
  }
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContent = styled.div`
  display: flex;
  width: 27vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15vh;
`;

export const ProfileImg = styled.div`
  display: flex;
  width: 10vw;
  height: 10vw;
  border-radius: 1em;
  background: #f3e368;
  justify-content: center;
  align-items: center;
  font-size: 3em;
`;

export const Nickname = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 4vh;
  &.edit {
    font-size: 2em;
  }
`;

export const TarotToken = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: bold;
  width: 80%;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin: 3vh 0 0 0;
  &.detail {
    font-size: 1.6em;
    margin-top: 10vh;
    margin-bottom: 10vh;
    justify-content: center;
  }
`;

export const ListContent = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const ListIcon = styled.img`
  width: 20%;
  margin-right: 0.7em;
`;

export const MoveBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &.edit {
    width: 6em;
    height: 2em;
    font-size: 1.5em;
    background: #f34f4f;
    border-radius: 1em;
    margin: 2em 0 0 1em;
  }
`;

export const MoveBtnImg = styled.img`
  width: 60%;
  margin-left: 0.5em;
  &.home {
    width: 2.5em;
    margin: 1em;
  }
`;

export const TarotListContent = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh / 2);
  /* font-size: ; */
  align-items: center;
  flex-direction: column;
  &.detail {
    height: auto;
    width: 27vw;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  width: 75%;
  height: 6.5vh;
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
  cursor: pointer;
`;

export const DetailContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 73vw;
  height: 100vh;
  right: 0;
`;

export const DetailCover = styled.img`
  width: 100%;
  height: 20vh;
`;

export const DetailTitle = styled.div`
  position: absolute;
  font-size: 2.5em;
  font-weight: bold;
  left: 1em;
  top: calc(20vh - 2em);
`;

export const DetailDate = styled.div`
  position: absolute;
  font-size: 1.5em;
  right: 1em;
  top: calc(20vh - 2em);
`;

export const DetailQuestion = styled.div`
  font-size: 1.5em;
  margin: 1em 0 1em 1em;
`;

export const DetailFortune = styled.div`
  font-size: 1em;
  width: 80%;
  height: 70vh;
  margin-left: 2em;
`;

export const ReplayTarots = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 1em;
  bottom: 4em;
`;

export const ReplayLucky = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 1em;
  bottom: 1em;
`;

export const LogoutBtn = styled.div`
  position: absolute;
  font-size: 2em;
  font-weight: bold;
`;

export const EditNickName = styled.img`
  width: 2em;
  margin-left: 0.5em;
  cursor: pointer;
`;

export const EditInputBox = styled.input`
  width: 100%;
`;

export const EditUser = styled.div`
  display: flex;
  /* font-size: 1.2em; */
  font-weight: bold;
  /* text-align: center; */
  /* align-items: center; */
  margin: 2vh 0 3vh 1vh;
  /* justify-content: space-between; */
  flex-direction: column;
`;

export const EditUserContent = styled.div`
  width: 30vw;
  border-bottom: 2px solid gray;
  /* text-decoration: solid underline gray 2px; */
  /* text-underline-position: under; */
  font-size: 1.5em;
`;

export const PaginationContent = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  /* top: 85vh; */
`;

export const PaginationBtn = styled.button`
  border: 0;
  border-right: 3px solid gray;
  border-left: 3px solid gray;
  font-size: 1.5em;
  cursor: pointer;
  /* margin-right: 0.5em; */
`;

export const HelpIcon = styled.img`
  width: 1em;
  height: 1em;
`;

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: inline-block;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }

  .tooltip {
    white-space: pre-line;
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #eef3fd;
    border: #7689fd solid 1px;
    border-radius: 5px;
    color: #505bf0;
    font-size: 12px;
    font-weight: 500;
    height: auto;
    letter-spacing: -0.25px;
    margin-top: 6.8px;
    padding: 5px 11px;
    width: max-content;
    z-index: 100;
    transform: translate(-44%, 110%);
  }

  // 말풍선 테두리와 꼬리를 위한 before, after
  .tooltip::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }

  .tooltip::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;
