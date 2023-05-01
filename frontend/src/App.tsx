import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Page/Main';
import Celtic from './Page/Celtic';
import CelticSpread from './Page/Celtic/celtic_spread_idx';
import CelticDetail from './Page/Celtic/celtic_detail';
import LuckyPage from './Page/Lucky/lucky_page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/celtic" element={<Celtic />} />
        <Route path="/celtic/spread" element={<CelticSpread />} />
        <Route path="/celtic/detail" element={<CelticDetail />} />
        <Route path="/lucky" element={<LuckyPage />} />
      </Routes>
    </div>
  );
}

export default App;
