import React, { useState } from 'react';
import * as layer from './time_style';
import Month from './Month/month_spread';
import Year from './Year/year_spread';
import { ChatArea, CardArea, DefaultCard } from '../Common/common_style';

const Selecter = () => {
  const [content, setContent] = useState();

  const handleClickButton = (e: any) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    init: <layer.MainBox>1</layer.MainBox>,
    one: <layer.MainBox>2</layer.MainBox>,
    two: <layer.MainBox>3</layer.MainBox>,
    three: <layer.MainBox>4</layer.MainBox>,
    four: <layer.MainBox>5</layer.MainBox>,
  };

  console.log(content);
};

function TimeSpread() {
  return (
    <>
      <CardArea>
        <DefaultCard>1</DefaultCard>
        <DefaultCard>2</DefaultCard>
        <DefaultCard>3</DefaultCard>
      </CardArea>
      <ChatArea />
    </>
  );
}

export default TimeSpread;
