import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Wallet, walletsService } from "../../service/wallets.service";
import { Chevron } from "../../assets";
import Modal from "../../components/shared/Modal";

const WalletPage = () => {
  const [isOpenNewWallet, setIsOpenNewWallet] = useState<boolean>(false);

  const toggleOpenNewWallet = () => setIsOpenNewWallet(!isOpenNewWallet);

  return (
    <div className="wallet-page">
      <div className="page-top-controller">
        <SectionTitle title={"Wallets"} />
        <div onClick={toggleOpenNewWallet} className="new-wallet-action">
          + Add new wallet
        </div>
      </div>

      <div className="divider" />

      <div className="wallets-grid">
        {walletsService.map((wallet: Wallet, index: number) => (
          <div key={index} className="wallet-card">
            <div className="card-header">
              <img
                src={wallet.tokenIcon}
                alt="token icon"
                className="token-icon"
              />
              <p>{wallet.token}</p>
            </div>
            <h5>{wallet.walletBallance}</h5>

            <img src={Chevron} alt="chevron" className="chevron" />
          </div>
        ))}
      </div>

      <Modal isOpen={isOpenNewWallet}>
        <></>
      </Modal>
    </div>
  );
};

export default WalletPage;
