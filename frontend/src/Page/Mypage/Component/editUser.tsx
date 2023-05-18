import React, { useState, useRef } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { userInfoStore } from '../../../Store/User/info';
import {
  Nickname,
  EditNickName,
  EditInputBox,
  SideContent,
  Side,
  DetailContent,
  DetailTitle,
  MoveBtn,
  DetailFortune,
  EditUserContent,
  EditUser,
  MoveBtnImg,
  ListIcon,
  EditUserTitle,
  ProfileImg,
  LogoSmallImg,
} from '../mypage_style';
import editIcon from '../../../Assets/etc/editIcon.png';
import homeBtnImg from '../../../Assets/etc/homBtn.png';
import userIcon from '../../../Assets/etc/user.png';
import googleSmall from '../../../Assets/etc/googleSmall.png';
import kakaoSmall from '../../../Assets/etc/kakaoSmall.png';
import dracoProfile from '../../../Assets/characters/dracoProfile.png';
import toastProfile from '../../../Assets/characters/toastProfile.png';
import kittyProfile from '../../../Assets/characters/kittyProfile.png';
import { API } from '../../../API';
import UserInfo from './UserInfo';
import { useCardStore } from '../../../Store/Main/main';

function EditUserInfo() {
  const [edit, setEdit] = useState(false);
  const editRef = useRef<HTMLInputElement>(null);
  const { nickname, setNickname, user, setIsLogin, setIsSide, profileChar } = userInfoStore();
  const { setCardOrder } = useCardStore();
  const editNickname = () => {
    setEdit(true);
  };

  const navigate = useNavigate();
  const MoveMain = () => {
    setCardOrder('celtic');
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
    navigate('/');
  };

  let imgSrc;
  if (profileChar === 0) {
    imgSrc = kittyProfile;
  } else if (profileChar === 1) {
    imgSrc = toastProfile;
  } else {
    imgSrc = dracoProfile;
  }

  return (
    <div style={{ position: 'relative' }}>
      <Side className="open detail edit">
        <div style={{ position: 'absolute', left: 'calc(25vw - 4.5em)', top: 0 }}>
          <MoveBtn type="button" onClick={MoveMain}>
            <MoveBtnImg className="home" src={homeBtnImg} alt="" />
          </MoveBtn>
        </div>
        <SideContent>
          <UserInfo />
        </SideContent>
      </Side>
      <DetailContent>
        {/* <DetailCover src={LoveCoverImg} /> */}
        <DetailTitle className="edit">
          <ListIcon
            className="edit"
            style={{ width: '1em', marginLeft: '0.3em', marginRight: '0.3em', marginBottom: '0.3em' }}
            src={userIcon}
            alt=""
          />
          <div>내 정보</div>
          <div className="sub" style={{ marginLeft: '15px', marginBottom: '0.3em' }}>
            MY PAGE
          </div>
        </DetailTitle>
        <DetailFortune className="edit">
          <EditUser>
            <EditUserTitle>프로필</EditUserTitle>
            <EditUserContent>
              <ProfileImg className="edit">
                <img style={{ width: '100%' }} src={imgSrc} alt="" />
              </ProfileImg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <EditUserContent className="email">{user.email}</EditUserContent>
                {!edit ? (
                  <EditUserContent className="nickname">
                    <EditNickName onClick={editNickname} src={editIcon} alt="" />
                    {nickname}
                  </EditUserContent>
                ) : (
                  <EditUserContent>
                    <form onSubmit={saveNickName}>
                      <EditInputBox type="text" ref={editRef} placeholder="닉네임을 수정해주세요" />
                    </form>
                  </EditUserContent>
                )}
              </div>
            </EditUserContent>
          </EditUser>
          <EditUser className="email">
            <EditUserTitle className="email">계정 연동</EditUserTitle>
            <EditUserContent className="emails">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {user.providerId === 'Google' ? (
                  <LogoSmallImg src={googleSmall} alt="" />
                ) : (
                  <LogoSmallImg src={kakaoSmall} alt="" />
                )}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <EditUserContent className="emails email">{user.email}</EditUserContent>
                </div>
              </div>
              <MoveBtn className="edit" type="button" onClick={removeUser}>
                회원탈퇴
              </MoveBtn>
            </EditUserContent>
          </EditUser>
        </DetailFortune>
      </DetailContent>
    </div>
  );
}

export default EditUserInfo;
