import React from 'react';
import { DialogBox, DialogContent } from './common_styled';

interface CaseProps {
  children: React.ReactNode;
  text: string;
  idx: number;
}

function Dialog({ children, text, idx }: CaseProps) {
  let color;
  if (idx === 0) {
    color = 'pink';
  } else if (idx === 1) {
    color = 'blue';
  } else {
    color = 'green';
  }
  return (
    <DialogBox color={color}>
      <DialogContent>{text}</DialogContent>
      <div>{children}</div>
    </DialogBox>
  );
}

export default Dialog;
