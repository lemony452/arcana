import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../../Assets/etc/profile.png';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import tockenIcon from '../../../Assets/etc/tokenIcon.png';
import editIcon from '../../../Assets/etc/editIcon.png';
import { UserContent, Nickname, TarotToken, EditNickName, EditInputBox } from '../mypage_style';
import { userInfoStore } from '../../../Store/User/info';

function UserInfo() {
  const { nickname, weeklyCount } = userInfoStore();
  const navigate = useNavigate();
  const MoveEditUser = () => {
    navigate('/editUserInfo');
  };

  // const TarotTokenCnt = api

  return (
    <UserContent>
      <img style={{ width: '10vw', height: '10vw' }} src={profile} alt="" />
      <Nickname>
        <div>{nickname}</div>
        <EditNickName onClick={MoveEditUser} src={editIcon} alt="" />
      </Nickname>
      <TarotToken>
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
          <img style={{ width: '30%', marginRight: '0.3em' }} src={tockenIcon} alt="" />
          <div>타로 토큰</div>
        </div>
        <div>{weeklyCount} 개</div>
      </TarotToken>
    </UserContent>
  );
}

export default UserInfo;
