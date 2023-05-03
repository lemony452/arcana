import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Page/Main';
import Celtic from './Page/Celtic';
import Time from './Page/Time';
import Select from './Page/Select';
import CelticSpread from './Page/Celtic/celtic_spread_idx';
import MonthSpread from './Page/Time/Month/month_spread_idx';
import YearSpread from './Page/Time/Year/year_spread_idx';
import SelectTwo from './Page/Select/Two/two_spread_idx';
import SelectThree from './Page/Select/Three/three_spread_idx';
import LuckyPage from './Page/Lucky/lucky_page';
import CelticDetail from './Page/Celtic/detail';

function App() {
  useEffect(() => {
    // 연속 호출 방지(init 연속 호출되면 오류)
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('0ade17c4bb67884b61fea115aa44192b'); // 카카오 api 키
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
        <Route path="/select" element={<Select />} />
        <Route path="/select/two" element={<SelectTwo />} />
        <Route path="/select/three" element={<SelectThree />} />
        <Route path="/lucky" element={<LuckyPage />} />
        <Route path="/celtic/detail" element={<CelticDetail />} />
      </Routes>
    </div>
  );
}

export default App;