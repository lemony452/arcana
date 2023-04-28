import React, { useState } from 'react';
import * as layer from './time_style';
import Month from './month_spread';
import Year from './year_spread';
import { ChatArea, CardArea, DefaultCard } from '../Common/common_style';

const Selecter = () => {
  const [content, setContent] = useState();
};

const selectComponent = {
  init: (
    <layer.MainBox>
      <Month />
    </layer.MainBox>
  ),
  one: <Year />,
  two: <Year />,
  three: <Year />,
  four: <Year />,
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
