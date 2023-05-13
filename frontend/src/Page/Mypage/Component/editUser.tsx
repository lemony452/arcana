import React, { useState, useRef } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { userInfoStore } from '../../../Store/User/info';
import { UserContent, Nickname, TarotToken, EditNickName, EditInputBox } from '../mypage_style';
import editIcon from '../../../Assets/etc/editIcon.png';
import { API } from '../../../API';

function EditUserInfo() {
  const [edit, setEdit] = useState(false);
  const editRef = useRef<HTMLInputElement>(null);
  const { nickname, setNickname, user, setIsLogin, setIsSide } = userInfoStore();
  const editNickname = () => {
    setEdit(true);
  };

  const saveNickName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = editRef.current?.value;
    setNickname(name!);
    setEdit(false);
  };

  const removeUser = async () => {
    await API.delete(`/api/v1/user/delete`, {
      headers: {
        uid: user.uid,
      },
    });
    // logout 시 구글인지 카카오인지 구분해주기
    if (user.providerId === 'google.com') {
      signOut(auth);
    }
    setIsLogin(false);
    setIsSide(false);
    console.log('로그아웃');
  };

  return (
    <div>
      {!edit ? (
        <Nickname>
          <div>{nickname}</div>
          <EditNickName onClick={editNickname} src={editIcon} alt="" />
        </Nickname>
      ) : (
        <form onSubmit={saveNickName}>
          <EditInputBox type="text" ref={editRef} placeholder="닉네임을 수정해주세요" />
        </form>
      )}
      <div>{user.email}</div>
      <button type="button" onClick={removeUser}>
        회원탈퇴
      </button>
    </div>
  );
}

export default EditUserInfo;
