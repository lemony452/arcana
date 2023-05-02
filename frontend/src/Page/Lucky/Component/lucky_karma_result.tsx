import React from 'react';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaShareButton,
  HatenaIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LivejournalShareButton,
  LivejournalIcon,
  MailruShareButton,
  MailruIcon,
  OKShareButton,
  OKIcon,
  PinterestShareButton,
  PinterestIcon,
  PocketShareButton,
  PocketIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
} from 'react-share';

import * as luckResult from './lucky_karma_result_style';

interface LuckyKarmaResultType {
  selectCard: number;
  cardList: {
    index: number;
    front: string;
    content: string;
    result: string;
  }[];
}

function LuckyKarmaResult({ selectCard, cardList }: LuckyKarmaResultType) {
  return (
    <luckResult.Body>
      <luckResult.CardBody>
        <luckResult.Card>
          <luckResult.CardFront src={cardList[selectCard].front} alt="CardF" />
          <p>{cardList[selectCard].result}</p>
          <EmailIcon size={32} round />
          <FacebookIcon size={32} round />
          <TwitterIcon size={32} round />
          <LineIcon size={32} round />
        </luckResult.Card>
      </luckResult.CardBody>
    </luckResult.Body>
  );
}

export default LuckyKarmaResult;
