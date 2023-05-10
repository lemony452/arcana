import React from 'react';
import profile from '../../../Assets/etc/profile.png';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import tockenIcon from '../../../Assets/etc/tokenIcon.png';
import editIcon from '../../../Assets/etc/editIcon.png';
import { UserContent, Nickname, TarotToken } from '../mypage_style';

function UserInfo() {
  const EditNickname = () => {
    console.log('닉네임 수정 함수');
  };

  // const TarotTokenCnt = api

  return (
    <UserContent>
      <img style={{ width: '10vw', height: '10vw' }} src={profile} alt="" />
      <Nickname>
        <div>샛노란 병아리 님</div>
        <img style={{ width: '2vw', marginLeft: '1vw' }} src={editIcon} alt="" />
      </Nickname>
      <TarotToken>
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
          <img style={{ width: '4vw', marginRight: '0.3em' }} src={tockenIcon} alt="" />
          <div>타로 토큰</div>
        </div>
        <div>3 개</div>
      </TarotToken>
    </UserContent>
  );
}

export default UserInfo;
