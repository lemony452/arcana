import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Celtic from './Page/Celtic/celtic_spread';
import Month from './Page/Time/month_spread';
import Year from './Page/Time/year_spread';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Month />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
