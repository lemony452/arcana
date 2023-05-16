import React, { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import * as luckyPage from './lucky_page_style';
import LuckyKarmaSelect from './Component/lucky_karma_select';
import LuckyKarmaResult from './Component/lucky_karma_result';
import Dialog from '../../Common/dialog';
import charDialog0 from '../../Assets/characters/charDialog0.png';
import charDialog1 from '../../Assets/characters/charDialog1.png';
import { DialogNPC, OptionBtn } from '../../Common/common_styled';
import KakaoIcon from '../../Assets/etc/icon-kakao.png';
import Camera from '../../Assets/etc/camera.png';
import Home from '../../Assets/etc/home.png';
import { useLuckyStore } from '../../Store/User/lucky';
import { API } from '../../API';
import { userInfoStore } from '../../Store/User/info';
import { useFortuneStore } from '../../Store/User/fortune';

interface SaveDataType {
  uid: string;
  options: string;
  summary: string;
  question: string;
  reports: { cardIdx: number; ment: string }[];
}

function LuckyPage() {
  const navigate = useNavigate();
  const [selectCard, setSelectCard] = useState<number>(-1); // 선택한 카드
  const [resultPage, setResultPage] = useState<boolean>(false);
  const [checkSelectState, setCheckSelectState] = useState<boolean>(false); // 마지막 선택 질문
  const [npc, setNpc] = useState<number>(0);
  const { luckyMent, lucky } = useLuckyStore();
  const location = useLocation();
  const { user } = userInfoStore();
  const { option, summary, tarotList, fortune, inputValue } = useFortuneStore();
  const userSummary = summary;

  // 운세 결과 저장 요청 보낼 변수
  const SaveData: SaveDataType = {
    uid: user.uid,
    options: option,
    summary: userSummary,
    question: inputValue,
    reports: [],
  };

  const cardList = [
    {
      index: 0,
      front: `https://k8d107.p.ssafy.io/api/v1/images/${lucky.card.idx}.png`,
      num: lucky.card.idx,
      title: lucky.card.name,
      contentCeltic: `행운카드는 ${lucky.card.name} 이 나왔어!\n${lucky.ment}`,
      contentTime: `행운카드는 ${lucky.card.name} 이 나왔군!\n${lucky.ment}`,
      result: luckyMent,
    },
    {
      index: 1,
      front: `https://k8d107.p.ssafy.io/api/v1/images/${lucky.card.idx}.png`,
      num: lucky.card.idx,
      title: lucky.card.name,
      contentCeltic: `행운카드는 ${lucky.card.name} 이 나왔어!\n${lucky.ment}`,
      contentTime: `행운카드는 ${lucky.card.name} 이 나왔군!\n${lucky.ment}`,
      result: luckyMent,
    },
    {
      index: 2,
      front: `https://k8d107.p.ssafy.io/api/v1/images/${lucky.card.idx}.png`,
      num: lucky.card.idx,
      title: lucky.card.name,
      contentCeltic: `행운카드는 ${lucky.card.name} 이 나왔어!\n${lucky.ment}`,
      contentTime: `행운카드는 ${lucky.card.name} 이 나왔군!\n${lucky.ment}`,
      result: luckyMent,
    },
  ];

  const resultPageHandler = () => {
    setResultPage(true);
    // 배열에 타로 운세 결과 저장
    if (option === '신년운세' || option === '월별운세') {
      tarotList.forEach((value) => {
        SaveData.reports.push({
          cardIdx: value.card.idx,
          ment: value.ment,
        });
      });
    } else {
      tarotList.forEach((value, idx) => {
        SaveData.reports.push({
          cardIdx: value.card.idx,
          ment: fortune[idx],
        });
      });
    }
    // 럭키 카드 배열 마지막 요소로 저장
    SaveData.reports.push({
      cardIdx: lucky.card.idx,
      ment: luckyMent,
    });
    // 럭키카드 공유하기 버튼 누르면 운세기록 저장 api 요청보내기
    console.log('운세 저장하는 api');
    API.post(`/api/v1/tarot/log`, {
      uid: SaveData.uid,
      options: SaveData.options,
      summary: SaveData.summary,
      question: SaveData.question,
      reports: SaveData.reports,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cardSelectCeltic = checkSelectState ? cardList[selectCard].contentCeltic : '이 카드를 선택할까?';
  const cardContentCeltic = selectCard === -1 ? '너의 행운카드를 골라줘' : cardSelectCeltic;

  const cardSelectTime = checkSelectState ? cardList[selectCard].contentTime : '이 카드를 선택하겠나?';
  const cardContentTime = selectCard === -1 ? '자네의 행운카드를 골라보게' : cardSelectTime;

  const cardContent = npc === 0 ? cardContentCeltic : cardContentTime;
  const dialogImg = npc === 0 ? charDialog0 : charDialog1;

  useEffect(() => {
    if (location.state === 'celtic') {
      setNpc(0);
    }
    if (location.state === 'time') {
      setNpc(1);
    }
  }, []);

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
        title: '내 행운카드는 결과는?', // 공유 타이틀
        description: cardList[selectCard].result, // 공유 내용
        imageUrl: `https://k8d107.p.ssafy.io/api/v1/images/${lucky.card.idx}.png`, // 공유 이미지
        link: {
          webUrl: 'https://k8d107.p.ssafy.io', // 공유 링크
        },
      },
      buttons: [
        {
          title: '내 운세 점치러 가기', // 공유 초대 링크 타이틀
          link: {
            webUrl: 'https://k8d107.p.ssafy.io', // 공유 초대 링크
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
      <DialogNPC src={dialogImg} />
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
                url="https://k8d107.p.ssafy.io"
              >
                <TwitterIcon size={32} round borderRadius={24} />
              </TwitterShareButton>
              <TelegramShareButton
                style={{ marginInline: '10px' }}
                title={cardList[selectCard].result}
                url="https://k8d107.p.ssafy.io"
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
