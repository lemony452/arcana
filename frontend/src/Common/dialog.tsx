import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useFortuneStore } from '../Store/User/fortune';
import { DialogBox, DialogContentStyle, OptionGroup, DialogName, InputBox, DialogContent } from './common_styled';

interface CaseProps {
  children: React.ReactNode;
  content: string;
  next: boolean;
}

function Dialog({ children, content, next }: CaseProps) {
  const { spread, tarotList } = useFortuneStore();
  let color;
  let charName;
  if (spread === 'celtic') {
    color = '#cba1ff';
    charName = '드라코';
  } else if (spread === 'time') {
    color = '#ff945e';
    charName = '토스트';
  } else {
    color = '#ff74b6';
    charName = '슈뢰딩거';
  }

  return (
    <DialogBox>
      <DialogName color={color}>{charName}</DialogName>
      <DialogContent color={color}>
        <DialogContentStyle color={color}>
          <Typewriter
            options={{
              strings: content, // 타이핑 효과를 줄 컨텐츠
              autoStart: true, // 자동시작
              delay: 33, // 각 타이핑 간의 간격 => 타이핑 속도
              cursor: '',
            }}
          />
        </DialogContentStyle>
        {next ? <InputBox>{children}</InputBox> : <OptionGroup>{children}</OptionGroup>}
      </DialogContent>
    </DialogBox>
  );
}

export default Dialog;
