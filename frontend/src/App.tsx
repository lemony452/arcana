import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Page/Main';
import Celtic from './Page/Celtic';
import CelticSpread from './Page/Celtic/celtic_spread_idx';
import LuckyPage from './Page/Lucky/lucky_page';
import CelticDetail from './Page/Celtic/detail';

function App() {
  useEffect(() => {
    // 연속 호출 방지(init 연속 호출되면 오류)
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('0ade17c4bb67884b61fea115aa44192b'); // 카카오 api 키
    }
    console.log(window.Kakao.isInitialized());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/celtic" element={<Celtic />} />
        <Route path="/celtic/spread" element={<CelticSpread />} />
        <Route path="/lucky" element={<LuckyPage />} />
        <Route path="/celtic/detail" element={<CelticDetail />} />
      </Routes>
    </div>
  );
}

export default App;
