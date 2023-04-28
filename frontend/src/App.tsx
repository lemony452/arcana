import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './Page/Main';
import Celtic from './Page/Celtic';
import LuckyPage from './Page/Lucky/lucky_page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/celtic" element={<Celtic />} />
      </Routes>
    </div>
  );
}

export default App;
