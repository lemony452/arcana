import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import TarotList from './Component/TarotList';
import UserInfo from './Component/UserInfo';
import { Side, SideContent, LogoutBtn, MoveBtn, MoveBtnImg } from './mypage_style';
import { userInfoStore } from '../../Store/User/info';
import next from '../../Assets/etc/nextButton(reverse).png';

function SideBar() {
  const outside = useRef<any>();
  const { isSide, setIsSide } = userInfoStore();
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isSide]);

  return (
    <Side ref={outside} className={isSide ? 'open' : ''}>
      <div style={{ position: 'absolute', left: 'calc(25vw - 7em)' }}>
        <MoveBtn type="button" onClick={toggleSide} className="close">
          <MoveBtnImg className="close" src={next} alt="" />
          닫기
        </MoveBtn>
      </div>
      <SideContent>
        <UserInfo />
      </SideContent>
    </Side>
  );
}

export default SideBar;
