import React, { useState } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import * as luckyPage from './lucky_page_style';
import LuckyKarmaSelect from './Component/lucky_karma_select';
import LuckyKarmaResult from './Component/lucky_karma_result';
import F0 from '../../Assets/cards/F0.svg';
import F9 from '../../Assets/cards/F9.svg';
import F14 from '../../Assets/cards/F14.svg';
import Dialog from '../../Common/dialog';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import { DialogNPC, OptionBtn } from '../../Common/common_styled';
import KakaoIcon from '../../Assets/etc/icon-kakao.png';
import Camera from '../../Assets/etc/camera.png';
import Home from '../../Assets/etc/home.png';
import { useLuckyStore } from '../../Store/User/lucky';

function LuckyPage() {
  const navigate = useNavigate();
  const [selectCard, setSelectCard] = useState(-1); // 선택한 카드
  const [resultPage, setResultPage] = useState(false);
  const [checkSelectState, setCheckSelectState] = useState(false); // 마지막 선택 질문
  const { luckyMent, lucky } = useLuckyStore();

  const cardList = [
    {
      index: 0,
      front: F0,
      num: lucky.card.idx,
      title: lucky.card.name,
      content: `너의 행운 카드는 ${lucky.card.name} 이야! 아마 너에게 특별한 행운을 가져다 줄걸?`,
      result: luckyMent,
    },
    {
      index: 1,
      front: F0,
      num: lucky.card.idx,
      title: lucky.card.name,
      content: `너의 행운 카드는 ${lucky.card.name} 이야! 아마 너에게 특별한 행운을 가져다 줄걸?`,
      result: luckyMent,
    },
    {
      index: 2,
      front: F14,
      num: lucky.card.idx,
      title: lucky.card.name,
      content: `너의 행운 카드는 ${lucky.card.name} 이야! 아마 너에게 특별한 행운을 가져다 줄걸?`,
      result: luckyMent,
    },
  ];

  const resultPageHandler = () => {
    setResultPage(true);
  };

  const cardSelect = checkSelectState ? cardList[selectCard].content : '이 카드를 선택하시겟습니까?';
  const cardContent = selectCard === -1 ? '카드를 골라주세요' : cardSelect;

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

  const capture = () => {
    const downloadImg = (url: string, imgName: string) => {
      const downImg = document.createElement('a');
      downImg.download = imgName;
      downImg.href = url;
      document.body.appendChild(downImg);
      downImg.click();
    };
    html2canvas(document.querySelector('#capture') as HTMLDivElement).then((canvas) => {
      const captureImg = canvas.toDataURL('image/jpeg');
      downloadImg(captureImg, 'tarot.jpg');
    });
  };

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

  const goMain = () => {
    navigate('/');
  };

  return (
    <luckyPage.Body>
      <DialogNPC src={charDialog0} />
      {resultPage ? (
        <LuckyKarmaResult selectCard={selectCard} cardList={cardList} />
      ) : (
        <LuckyKarmaSelect
          selectCard={selectCard}
          setSelectCard={setSelectCard}
          cardList={cardList}
          checkSelectState={checkSelectState}
          setCheckSelectState={setCheckSelectState}
        />
      )}

      <Dialog content={cardContent} next={false}>
        {!resultPage && checkSelectState === true && <OptionBtn onClick={resultPageHandler}>공유하기</OptionBtn>}
        {resultPage && (
          <luckyPage.ButtonBox>
            <div>
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
              <luckyPage.Button onClick={sendKakao} style={{ marginInline: '5px' }}>
                <img src={KakaoIcon} alt="kakaoicon" />
              </luckyPage.Button>
              <luckyPage.Button onClick={capture} style={{ marginInline: '5px' }}>
                <img src={Camera} alt="camera" />
              </luckyPage.Button>
            </div>
            <luckyPage.HomeButton onClick={goMain}>
              <img src={Home} alt="home" />
            </luckyPage.HomeButton>
          </luckyPage.ButtonBox>
        )}
      </Dialog>
    </luckyPage.Body>
  );
}

export default LuckyPage;
