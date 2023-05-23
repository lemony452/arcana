import styled from 'styled-components';

export const Side = styled.div`
  width: 25vw;
  height: 100vh;
  background: linear-gradient(169.59deg, #f4f4f4 0%, #eaeaea 95.02%);
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.5);
  left: -55%;
  top: 0;
  position: fixed;
  z-index: 2;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  &.open {
    left: 0;
    transition: 0.5s ease;
  }
  &.detail {
    width: 25vw;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.edit {
    justify-content: center;
  }
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileImg = styled.div`
  display: flex;
  width: 10vw;
  height: 10vw;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  &.edit {
    width: 10vw;
    height: 10vw;
    margin: 0 0.5em 0 1em;
  }
`;

export const Nickname = styled.div`
  display: flex;
  font-size: 1.8em;
  font-weight: 900;
  text-align: center;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 4vh;
`;

export const TarotToken = styled.div<{ click: boolean }>`
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
    margin-top: 2em;
    margin-bottom: 2em;
    justify-content: center;
  }
  cursor: ${(props) => (props.click ? 'pointer' : 'default')};
`;

export const ListContent = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const ListIcon = styled.img`
  width: 20%;
  margin-right: 0.7em;
  &.edit {
    margin-right: 0.1em;
  }
`;

export const MoveBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &.edit {
    width: 6em;
    height: 2em;
    font-size: 1.3em;
    background: #ff4141;
    border-radius: 0.5em;
    margin-right: 1em;
    color: white;
    font-weight: bold;
  }
  &.replay {
    width: 10em;
  }
  &.back {
    margin: 0.5em 0 0 0.5em;
    width: 37%;
  }
  &.close {
    display: flex;
    align-items: end;
    font-size: 1.8em;
    width: 7em;
    height: 2em;
    font-weight: bold;
  }
`;

export const MoveBtnImg = styled.img`
  width: 3vh;
  margin-left: 0.5em;
  &.home {
    width: 2.5em;
    margin: 1em;
  }
  &.replay {
    margin-left: 0;
    width: 100%;
  }
  &.back {
    margin-left: -2em;
    width: 100%;
  }
  &.close {
    margin-right: 4px;
    margin-bottom: 6px;
  }
`;

export const TarotListContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  &.detail {
    height: auto;
    width: 25vw;
  }
`;

export const TitleBox = styled.div<{ thisId: number; onDetail: number }>`
  display: flex;
  width: 75%;
  height: 2.5em;
  background: ${(props) => (props.thisId === props.onDetail ? '#A4A4A4' : '#f4f4f4')};
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
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 75vw;
  height: 100vh;
  left: 25vw;
  top: 0;
  bottom: 0;
  background: white;
`;

export const DetailCover = styled.img`
  width: 100%;
  height: 20vh;
`;

export const DetailTitle = styled.div`
  font-size: 3em;
  font-weight: bold;
  display: flex;
  text-align: center;
  align-items: flex-end;
  justify-content: space-between;
  width: 80%;
  height: 10%;
  margin-bottom: 1em;
  border-bottom: solid 2px #eaeaea;
  color: #3a3a3a;
  &.edit {
    width: 80%;
    justify-content: flex-start;
    align-items: end;
    margin-bottom: 0;
  }
  & > .sub {
    font-size: 0.6em;
  }
`;

export const DetailDate = styled.div`
  font-size: 0.8em;
  margin-left: 0.2em;
  font-weight: 500;
  top: calc(20vh - 2em);
  color: #3a3a3a;
`;

export const DetailBox = styled.div`
  display: flex;
  width: 80%;
  height: 65%;
  border: solid 2px #eaeaea;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5em;
  background: #eaeaea;
`;

export const DetailQuestion = styled.div`
  width: calc(100% - 1em);
  height: 10%;
  font-size: 1.7em;
  padding: 0.5em 0 0.3em 1em;
  border: 0;
  border-bottom: solid 2px #eaeaea;
  color: #3a3a3a;
  background: white;
  border-radius: 0.1em;
  text-align: left;
`;

export const DetailFortune = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.1em;
  width: 80%;
  height: 70%;
  color: #3a3a3a;
  text-align: left;
  &.edit {
    padding: 0em 2em 2em 2.5em;
    justify-content: center;
    padding: 0, 0, 0, 0;
  }
  &.detail {
    padding: 0 2em 0 2em;
    margin: 2em 0 2em 0;
    white-space: pre-wrap;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      height: 70%; /* 스크롤바의 길이 */
      background: black; /* 스크롤바의 색상 */
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
    }
  }
`;

export const ReplayTarots = styled.div`
  display: flex;
  align-items: center;
`;

export const ReplayLucky = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutBtn = styled.div`
  position: absolute;
  font-size: 2em;
  font-weight: bold;
`;

export const EditNickName = styled.img`
  width: 0.7em;
  margin-right: 0.3em;
  cursor: pointer;
`;

export const EditInputBox = styled.input`
  width: 100%;
`;

export const EditUser = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  border-radius: 5px;
  border: solid 2px #eaeaea;
  &.email {
    height: 25%;
    margin-top: 2em;
  }
`;

export const EditUserTitle = styled.div`
  width: calc(100% - 0.7em);
  height: 30%;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 0.7em;
  border-bottom: solid 2px #eaeaea;
  &.email {
    height: 87%;
  }
`;

export const EditUserContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #eaeaea;
  align-items: center;
  color: #3d3d3d;
  &.nickname {
    font-size: 1.8em;
    font-weight: bold;
  }
  &.email {
    font-size: 1.3em;
  }
  &.emails {
    background: white;
    justify-content: space-between;
  }
`;

export const PaginationContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;
`;

export const PaginationBtn = styled.button`
  border: 0;
  font-size: 1.2em;
  background: transparent;
  cursor: pointer;
`;

export const HelpIcon = styled.img`
  margin: auto;
  width: 1em;
  height: 1em;
`;

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: inline-block;
  margin-left: 7px;
  margin-top: 7px;
  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }

  .tooltip {
    white-space: pre-line;
    display: none;
    position: absolute;
    bottom: 0;
    left: -5px;
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

export const LogoSmallImg = styled.img`
  width: 3em;
  height: 3em;
  margin-left: 1.5em;
  margin-right: 1em;
`;

export const ChangeSelect = styled.select`
  background-color: #3a3a3a;
  color: white;
  font-size: 1.2em;
  width: 5em;
  height: 2em;
  border-radius: 8px;
  padding-left: 5px;
`;

export const ChangeOption = styled.option`
  font-size: 1em;
`;

export const ChangeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-right: 4vw;
`;

export const LuckyLetter = styled.div`
  position: absolute;
  top: -5vh;
  left: 50vh;
  > img {
    height: 95vh;
  }
  z-index: -1;
`;
