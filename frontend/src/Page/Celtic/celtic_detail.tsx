import React from 'react';
import Celtic from './celtic_spread';
import { SpreadBtn, CardArea, DefaultCard, ChatArea } from '../Common/common_style';
import * as layer from './celtic_spread_style';

function CelticDetail() {
  return (
    <>
      <div>
        <Celtic />
      </div>

      <CardArea>
        <DefaultCard>1</DefaultCard>
        <DefaultCard>2</DefaultCard>
        <DefaultCard>3</DefaultCard>
      </CardArea>
      <ChatArea>
        <SpreadBtn>다음</SpreadBtn>
      </ChatArea>
    </>
  );
}

export default CelticDetail;
