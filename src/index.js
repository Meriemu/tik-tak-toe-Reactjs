import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { WinnerContextProvider  } from './context/contextFile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WinnerContextProvider>
    <App />
  </WinnerContextProvider>
);