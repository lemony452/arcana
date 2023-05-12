import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import TarotList from './Component/TarotList';
import UserInfo from './Component/UserInfo';
import { Side, SideContent, LogoutBtn } from './mypage_style';
import { userInfoStore } from '../../Store/User/info';

function SideBar() {
  const outside = useRef<any>();
  const { setUser, setIsLogin, isSide, setIsSide } = userInfoStore();
  const navigate = useNavigate();

  const toggleSide = () => {
    // setIsOpen(false);
    setIsSide(false);
  };

  const handleClose = (event: any) => {
    if (!outside.current.contains(event.target)) {
      toggleSide();
    }
  };

  const logout = () => {
    signOut(auth);
    setIsLogin(false);
    setIsSide(false);
    console.log('로그아웃');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  });

  return (
    <Side ref={outside} className={isSide ? 'open' : ''}>
      <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
      <SideContent>
        <UserInfo />
        <br />
        <TarotList />
      </SideContent>
    </Side>
  );
}

export default SideBar;
