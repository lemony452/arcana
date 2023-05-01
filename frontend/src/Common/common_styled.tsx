import React from 'react';
import styled from 'styled-components';
import submitBtn from '../Assets/etc/submitBtn.png';

export const DialogBox = styled.div<{ color: string }>`
  display: flex;
  width: 100vw;
  height: calc(100vh / 3);
  text-align: center;
  background: ${(props) => props.color};
`;

export const DialogContent = styled.div`
  text-align: center;
  font-size: 28px;
`;

export const OptionBtn = styled.button`
  background: #fffffe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 30px;
  padding: 10px 20px 10px 20px;
`;

export const InputText = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 26px;
  padding: 10px 10px 10px 10px;
  color: white;
  ::placeholder {
    color: white;
  }
`;

export const SubmitBtn = styled.img.attrs({
  src: `${submitBtn}`,
})`
  width: 45px;
  height: 45px;
`;
