import React from 'react';
// import axios from 'axios';
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import KakaoIcon from '../../../Assets/etc/icon-kakao.png';
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
  // const accessToken =
  //   'IGQVJVaG56V0FpdXNoaVFrcG5YcGp3ZAHEySUo4ZAkhIeTN2NjBtNUdRWEh1dl8tVTBIUHJiRmQ3MmFTNVZAWcVJFLW43eGc4Y3dWLWhESGFMU0FJRUNpSjF6b2kzU2RPd09GSzUzQVZAQTnFsX1c4S2RXRQZDZD';
  // const mediaUrl = 'https://api.instagram.com/v1/media/';

  // const postLinkToInstagram = async () => {
  //   try {
  //     const response = await axios.post(mediaUrl, {
  //       access_token: accessToken,
  //       caption: 'Check out my homepage!',
  //       url: 'http://localhost:3000',
  //     });
  //     console.log('Link posted successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error posting link:', error);
  //   }
  // };

  const sendKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '내 럭키카드는 결과는?', // 공유 타이틀
        description: cardList[selectCard].result, // 공유 내용
        imageUrl:
          'https://png.pngtree.com/png-vector/20210326/ourmid/pngtree-sing-moon-tarot-symbol-png-image_3139433.jpg', // 공유 이미지
        link: {
          webUrl: 'http://localhost:3000', // 공유 링크
        },
      },
      buttons: [
        {
          title: '내 운세 점치러 가기', // 공유 초대 링크 타이틀
          link: {
            webUrl: 'http://localhost:3000', // 공유 초대 링크
          },
        },
      ],
    });
  };

  return (
    <luckResult.Body>
      <luckResult.CardBody>
        <luckResult.Card>
          <luckResult.CardFront style={{ marginInline: '10px' }} src={cardList[selectCard].front} alt="CardF" />
          <p>{cardList[selectCard].result}</p>
          <FacebookShareButton style={{ marginInline: '10px' }} url={window.location.href}>
            <FacebookIcon size={32} round borderRadius={24} />
          </FacebookShareButton>
          <TwitterShareButton
            style={{ marginInline: '10px' }}
            title={cardList[selectCard].result}
            url="http://localhost:3000"
          >
            <TwitterIcon size={32} round borderRadius={24} />
          </TwitterShareButton>
          <TelegramShareButton
            style={{ marginInline: '10px' }}
            title={cardList[selectCard].result}
            url="http://localhost:3000"
          >
            <TelegramIcon size={32} round borderRadius={24} />
          </TelegramShareButton>
          <luckResult.Button onClick={sendKakao} style={{ marginInline: '10px' }}>
            <img src={KakaoIcon} alt="kakaoicon" />
          </luckResult.Button>
        </luckResult.Card>
      </luckResult.CardBody>
    </luckResult.Body>
  );
}

export default LuckyKarmaResult;
