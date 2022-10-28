import {
    useConnectedWallet,
    useLCDClient,
  } from "@terra-money/wallet-provider";
  import React, { useEffect, useState } from "react";
  
  export default function Query() {
    const lcd = useLCDClient(); // LCD stands for Light Client Daemon
    const connectedWallet = useConnectedWallet();
    const [balance, setBalance] = useState<null | string>();
  
    useEffect(() => {
      if (connectedWallet) {
        lcd.bank.balance(connectedWallet.walletAddress).then(([coins]) => {
            console.log(coins)
          setBalance(coins.toString());
        });
      } else {
        setBalance("");
      }
    }, [connectedWallet, lcd]); // useEffect is called when these variables change
  
    return (
      <div>
        {balance && <p>{balance}</p>}
        {!connectedWallet && <p>Wallet not connected!</p>}
      </div>
    );
  }