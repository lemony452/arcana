import React, { useEffect, useRef, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import TarotList from './Component/TarotList';
import UserInfo from './Component/UserInfo';
import { Side, SideContent, LogoutBtn } from './mypage_style';
import { userInfoStore } from '../../Store/User/info';

function SideBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  const { setUser, setIsLogin } = userInfoStore();

  const toggleSide = () => {
    setIsOpen(false);
  };

  const handleClose = (event: any) => {
    if (!outside.current.contains(event.target)) {
      toggleSide();
    }
  };

  const logout = () => {
    signOut(auth);
    setIsLogin(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  });

  return (
    <Side ref={outside} className={isOpen ? 'open' : ''}>
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
