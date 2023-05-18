import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import tockenIcon from '../../../Assets/etc/tokenIcon.png';
import logoutIcon from '../../../Assets/etc/logout.png';
import userIcon from '../../../Assets/etc/user.png';
import ticketIcon from '../../../Assets/etc/ticket.png';
import dracoProfile from '../../../Assets/characters/dracoProfile.png';
import toastProfile from '../../../Assets/characters/toastProfile.png';
import kittyProfile from '../../../Assets/characters/kittyProfile.png';
import {
  UserContent,
  Nickname,
  TarotToken,
  ListContent,
  ListIcon,
  MoveBtn,
  MoveBtnImg,
  ProfileImg,
  HelpIcon,
  Container,
} from '../mypage_style';
import { userInfoStore } from '../../../Store/User/info';
import nextBtn from '../../../Assets/etc/nextButton.png';
import helpBtn from '../../../Assets/etc/help.png';

function UserInfo() {
  const { profileChar, isTarotLog, nickname, weeklyCount, setIsLogin, setIsSide, user, ticket } = userInfoStore();
  const navigate = useNavigate();
  let imgSrc;
  if (profileChar === 0) {
    imgSrc = kittyProfile;
  } else if (profileChar === 1) {
    imgSrc = toastProfile;
  } else {
    imgSrc = dracoProfile;
  }
  const MoveEditUser = () => {
    navigate('/editUserInfo');
  };

  const openTarotList = () => {
    if (isTarotLog) {
      navigate('/detail');
    }
  };

  const logout = () => {
    // logout 시 구글인지 카카오인지 구분해주기
    if (user.providerId === 'Google') {
      signOut(auth);
    }
    setIsLogin(false);
    setIsSide(false);
    console.log('로그아웃');
    navigate('/');
  };

  const WeeklyMessage = `매주 월요일 9시에 이용권이 충전됩니다`;
  const TicketMessage = `매일 정각에 타로 퀴즈 이벤트 참여권이 충전됩니다`;

  return (
    <UserContent>
      <ProfileImg>
        <img style={{ width: '100%' }} src={imgSrc} alt="" />
      </ProfileImg>
      <Nickname>
        <div>{nickname} 님</div>
      </Nickname>
      <TarotToken>
        <ListContent>
          <ListIcon src={tockenIcon} alt="" />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            주간 티켓
            <Container>
              <HelpIcon src={helpBtn} />
              <div className="tooltip">{WeeklyMessage}</div>
            </Container>
          </div>
        </ListContent>
        <div style={{ width: '50%' }}>{weeklyCount} / 5</div>
      </TarotToken>
      <TarotToken>
        <ListContent>
          <ListIcon src={ticketIcon} alt="" />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            이벤트 티켓
            <Container>
              <HelpIcon src={helpBtn} />
              <div className="tooltip">{TicketMessage}</div>
            </Container>
          </div>
        </ListContent>
        <div style={{ width: '50%' }}>{ticket} / 2</div>
      </TarotToken>
      <TarotToken>
        <ListContent>
          <ListIcon src={userIcon} alt="" />
          <div>내 정보 관리</div>
        </ListContent>
        <MoveBtn onClick={MoveEditUser}>
          <MoveBtnImg src={nextBtn} alt="" />
        </MoveBtn>
      </TarotToken>
      <TarotToken>
        <ListContent>
          <ListIcon src={cardIcon} alt="" />
          <div>타로 운세 기록</div>
        </ListContent>
        <MoveBtn onClick={openTarotList}>
          <MoveBtnImg src={nextBtn} alt="" />
        </MoveBtn>
      </TarotToken>
      <TarotToken>
        <ListContent>
          <ListIcon src={logoutIcon} alt="" />
          <div>로그아웃</div>
        </ListContent>
        <MoveBtn onClick={logout}>
          <MoveBtnImg src={nextBtn} alt="" />
        </MoveBtn>
      </TarotToken>
    </UserContent>
  );
}

export default UserInfo;
