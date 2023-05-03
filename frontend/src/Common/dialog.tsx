import React, { useState, useEffect } from 'react';
import { useFortuneStore } from '../Store/User/fortune';
import { DialogBox, DialogContentStyle, OptionGroup, DialogName, InputBox, CelticDetail } from './common_styled';

interface CaseProps {
  children: React.ReactNode;
  content: string;
  next: boolean;
}

function Dialog({ children, content, next }: CaseProps) {
  const { spread, tarotNumList } = useFortuneStore();
  let color;
  let charName;
  if (spread === 'celtic') {
    color = '#FFC1C1';
    charName = '농담곰';
  } else if (spread === 'time') {
    color = 'blue';
    charName = '토롱이';
  } else {
    color = 'green';
    charName = '용한용';
  }

  return (
    <DialogBox color={color}>
      <div>
        <DialogName>{charName}</DialogName>
        {/* {detail !== 0 ? (
          <CelticDetail>
            {detail === 1 ? content : null}
            <br />
            {detail}번 카드는 {tarotNumList[detail - 1].name} , {detail + 1}번 카드는 {tarotNumList[detail].name} 가
            나왔네!
          </CelticDetail>
        ) : (
          <DialogContentStyle>{content}</DialogContentStyle>
        )} */}
        <DialogContentStyle>{content}</DialogContentStyle>
      </div>
      {next ? <InputBox>{children}</InputBox> : <OptionGroup>{children}</OptionGroup>}
    </DialogBox>
  );
}

export default Dialog;
