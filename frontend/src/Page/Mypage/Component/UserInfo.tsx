import React, { useState, useRef } from 'react';
import profile from '../../../Assets/etc/profile.png';
import cardIcon from '../../../Assets/etc/cardIcon.png';
import tockenIcon from '../../../Assets/etc/tokenIcon.png';
import editIcon from '../../../Assets/etc/editIcon.png';
import { UserContent, Nickname, TarotToken, EditNickName, EditInputBox } from '../mypage_style';
import { userInfoStore } from '../../../Store/User/info';

function UserInfo() {
  const [edit, setEdit] = useState(false);
  const editRef = useRef<HTMLInputElement>(null);
  const { nickname, setNickname } = userInfoStore();
  const editNickname = () => {
    setEdit(true);
  };

  const saveNickName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = editRef.current?.value;
    setNickname(name!);
    setEdit(false);
  };

  // const TarotTokenCnt = api

  return (
    <UserContent>
      <img style={{ width: '10vw', height: '10vw' }} src={profile} alt="" />
      <Nickname>
        {!edit ? (
          <>
            <div>{nickname}</div>
            <EditNickName onClick={editNickname} src={editIcon} alt="" />
          </>
        ) : (
          <form onSubmit={saveNickName}>
            <EditInputBox type="text" ref={editRef} placeholder="닉네임을 수정해주세요" />
          </form>
        )}
      </Nickname>
      <TarotToken>
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
          <img style={{ width: '30%', marginRight: '0.3em' }} src={tockenIcon} alt="" />
          <div>타로 토큰</div>
        </div>
        <div>3 개</div>
      </TarotToken>
    </UserContent>
  );
}

export default UserInfo;
