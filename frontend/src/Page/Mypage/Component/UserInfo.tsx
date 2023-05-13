import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import profile from '../../../Assets/etc/profile.png';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import tockenIcon from '../../../Assets/etc/tokenIcon.png';
import editIcon from '../../../Assets/etc/editIcon.png';
import logoutIcon from '../../../Assets/etc/logout.png';
import userIcon from '../../../Assets/etc/user.png';
import ticketIcon from '../../../Assets/etc/ticket.png';
import {
  UserContent,
  Nickname,
  TarotToken,
  EditNickName,
  ListContent,
  ListIcon,
  MoveBtn,
  MoveBtnImg,
} from '../mypage_style';
import { userInfoStore } from '../../../Store/User/info';
import nextBtn from '../../../Assets/etc/nextButton.png';

function UserInfo() {
  const { nickname, weeklyCount, setIsLogin, setIsSide, user, ticket } = userInfoStore();
  const navigate = useNavigate();

  const MoveEditUser = () => {
    navigate('/editUserInfo');
  };

  const openTarotList = () => {
    navigate('/detail');
  };

  const logout = () => {
    // logout 시 구글인지 카카오인지 구분해주기
    if (user.providerId === 'Google') {
      signOut(auth);
    }
    setIsLogin(false);
    setIsSide(false);
    console.log('로그아웃');
  };

  // const TarotTokenCnt = api

  return (
    <UserContent>
      <img style={{ width: '10vw' }} src={profile} alt="" />
      <Nickname>
        <div>{nickname} 님</div>
      </Nickname>
      <TarotToken>
        <ListContent>
          <ListIcon src={tockenIcon} alt="" />
          <div>주간 이용권</div>
        </ListContent>
        <div style={{ width: '50%' }}>{weeklyCount} / 5</div>
      </TarotToken>
      <TarotToken>
        <ListContent>
          <ListIcon src={ticketIcon} alt="" />
          <div>이벤트 참여 횟수</div>
        </ListContent>
        <div style={{ width: '50%' }}>{ticket} 회</div>
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
