import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Page/Main';
import Celtic from './Page/Celtic';
import Time from './Page/Time';
import CelticSpread from './Page/Celtic/celtic_spread_idx';
import MonthSpread from './Page/Time/Month/month_spread_idx';
import YearSpread from './Page/Time/Year/year_spread_idx';
import LuckyPage from './Page/Lucky/lucky_page';
import CelticDetail from './Page/Celtic/detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/celtic" element={<Celtic />} />
        <Route path="/celtic/spread" element={<CelticSpread />} />
        <Route path="/time" element={<Time />} />
        <Route path="/time/month" element={<MonthSpread />} />
        <Route path="/time/year" element={<YearSpread />} />
        <Route path="/lucky" element={<LuckyPage />} />
        <Route path="/celtic/detail" element={<CelticDetail />} />
      </Routes>
    </div>
  );
}

export default App;
