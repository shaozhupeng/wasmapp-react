import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import React from "react";
import init, {greet} from 'wasm-hello'
export default function Connect() {
  const {
    connect,
    disconnect,
    status,
    wallets,
    network,
    availableConnectTypes,
  } = useWallet();
  const hello = () =>  {
    init().then(() => {
        greet("hello wasm world!!!!")
    })
  }
  return (
    <>
        <button onClick={hello}>wasm测试</button>
      {JSON.stringify({ status, network, wallets }, null, 2)}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableConnectTypes.map((connectType) => (
            <button
              key={"connect-" + connectType}
              onClick={() => connect(connectType)}
            >
              Connect {connectType}
            </button>
          ))}
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button onClick={() => disconnect()}>Disconnect</button>
      )}
    </>
  );
}
