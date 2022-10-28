import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './polyfills';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css'
import {getChainOptions ,WalletProvider} from '@terra-money/wallet-provider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
getChainOptions().then(chainOptions => {
  root.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
