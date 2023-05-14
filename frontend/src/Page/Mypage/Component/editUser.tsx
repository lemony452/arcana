import React, { useState, useRef } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { userInfoStore } from '../../../Store/User/info';
import {
  UserContent,
  Nickname,
  TarotToken,
  EditNickName,
  EditInputBox,
  SideContent,
  Side,
  DetailContent,
  DetailCover,
  DetailTitle,
  MoveBtn,
  DetailFortune,
  EditUserContent,
  EditUser,
  MoveBtnImg,
} from '../mypage_style';
import LoveCoverImg from '../../../Assets/etc/cover1.png';
import editIcon from '../../../Assets/etc/editIcon.png';
import homeBtnImg from '../../../Assets/etc/homBtn.png';
import { API } from '../../../API';
import UserInfo from './UserInfo';

function EditUserInfo() {
  const [edit, setEdit] = useState(false);
  const editRef = useRef<HTMLInputElement>(null);
  const { nickname, setNickname, user, setIsLogin, setIsSide, ticket } = userInfoStore();
  const editNickname = () => {
    setEdit(true);
  };

  const navigate = useNavigate();
  const MoveMain = () => {
    navigate('/');
  };

  const saveNickName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = editRef.current?.value;
    // setNickname(name!);
    setEdit(false);
    API.put(`/api/v1/user/nickname`, {
      uid: user.uid,
      nickname: name,
    })
      .then((res) => {
        console.log(res);
        setNickname(res.data.nickname);
      })
      .catch((err) => console.log(err));
  };

  const removeUser = async () => {
    await API.delete(`/api/v1/user/delete`, {
      headers: {
        uid: user.uid,
      },
    });
    // logout 시 구글인지 카카오인지 구분해주기
    if (user.providerId === 'Google') {
      signOut(auth);
    }
    setIsLogin(false);
    setIsSide(false);
    console.log('로그아웃');
  };

  return (
    <div style={{ position: 'relative' }}>
      <Side className="open detail">
        <div style={{ position: 'absolute', left: 'calc(27vw - 4.5em)' }}>
          <MoveBtn type="button" onClick={MoveMain}>
            <MoveBtnImg className="home" src={homeBtnImg} alt="" />
          </MoveBtn>
        </div>
        <SideContent>
          <UserInfo />
        </SideContent>
      </Side>
      <DetailContent>
        <DetailCover src={LoveCoverImg} />
        <DetailTitle>내 정보 관리🙎‍♂️</DetailTitle>
        <DetailFortune>
          <EditUser>
            <Nickname className="edit">🆔 닉네임</Nickname>
            {!edit ? (
              <div style={{ width: '30vw', display: 'flex', justifyContent: 'space-between' }}>
                <EditUserContent>{nickname}</EditUserContent>
                <EditNickName onClick={editNickname} src={editIcon} alt="" />
              </div>
            ) : (
              <EditUserContent>
                <form onSubmit={saveNickName}>
                  <EditInputBox type="text" ref={editRef} placeholder="닉네임을 수정해주세요" />
                </form>
              </EditUserContent>
            )}
          </EditUser>
          <EditUser>
            <Nickname className="edit">📧 Email</Nickname>
            <EditUserContent>{user.email}</EditUserContent>
          </EditUser>
          <EditUser>
            <Nickname className="edit">🎟️ Quiz 이벤트 참여 여부</Nickname>
            <EditUserContent>참여{ticket}</EditUserContent>
          </EditUser>
          <MoveBtn className="edit" type="button" onClick={removeUser}>
            회원탈퇴
          </MoveBtn>
        </DetailFortune>
      </DetailContent>
    </div>
  );
}

export default EditUserInfo;
