import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Page/Main';
import Celtic from './Page/Celtic';
import Time from './Page/Time';
import CelticSpread from './Page/Celtic/celtic_spread_idx';
import MonthSpread from './Page/Time/Month/month_spread_idx';
import YearSpread from './Page/Time/Year/year_spread_idx';
import InstantTwo from './Page/Instant/Two/two_spread_idx';
import InstantThree from './Page/Instant/Three/three_spread_idx';
import LuckyPage from './Page/Lucky/lucky_page';
import CelticDetail from './Page/Celtic/detail';
import Instant from './Page/Instant';
import Quiz from './Page/Quiz';
import { KakaoRedirect, GoogleRedirect } from './Page/Login/redirect';
import TarotListDetail from './Page/Mypage/Component/detail';

function App() {
  useEffect(() => {
    // 연속 호출 방지(init 연속 호출되면 오류)
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('38fe1e786f0a6c21d5af6b06ad0e9bc5'); // 카카오 api 키
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/celtic" element={<Celtic />} />
        <Route path="/celtic/spread" element={<CelticSpread />} />
        <Route path="/time" element={<Time />} />
        <Route path="/time/month" element={<MonthSpread />} />
        <Route path="/time/year" element={<YearSpread />} />
        <Route path="/instant" element={<Instant />} />
        <Route path="/instant/two" element={<InstantTwo />} />
        <Route path="/instant/three" element={<InstantThree />} />
        <Route path="/lucky" element={<LuckyPage />} />
        <Route path="/celtic/detail" element={<CelticDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/authgoogle" element={<GoogleRedirect />} />
        <Route path="/authkakao" element={<KakaoRedirect />} />
        <Route path="/detail" element={<TarotListDetail />} />
      </Routes>
    </div>
  );
}

export default App;
