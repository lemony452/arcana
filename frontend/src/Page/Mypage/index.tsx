import React, { useEffect, useRef, useState } from 'react';
import TarotList from './Component/TarotList';
import UserInfo from './Component/UserInfo';
import { Side, SideContent } from './mypage_style';

function SideBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

  const toggleSide = () => {
    setIsOpen(false);
  };

  const handleClose = (event: any) => {
    if (!outside.current.contains(event.target)) {
      toggleSide();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  });

  return (
    <Side ref={outside} className={isOpen ? 'open' : ''}>
      <SideContent>
        <UserInfo />
        <br />
        <TarotList />
      </SideContent>
    </Side>
  );
}

export default SideBar;
