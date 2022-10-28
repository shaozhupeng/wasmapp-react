import React from 'react';
import './App.css';

import Connect from './wallet_connect/Connect';
import Query from './wallet_connect/Query';
import SignWallet from './wallet_connect/SignWallet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Connect />
        <Query />
        <SignWallet />
      </header>
    </div>
  );
}

export default App;
