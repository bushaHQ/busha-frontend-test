import { FormEvent, useEffect, useState } from "react";
import CancelSvg from "assets/icons/cancel.svg";
import Modal from "components/shared/Modal";
import Image from "components/others/Image";
import Button from "components/form/Button";
import Select from "components/form/Select";
import { Error, ToastError } from "components/others/Error";
import { walletServices } from "services/wallets";
import { AddWallletPayload, WalletType } from "types/wallet";
import Loader from "components/shared/Loader";
import { AddWalletWrapper } from "./AddWallet.style";

type AddWalletProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreateWallet: (payload: AddWallletPayload) => void;
  addError: any;
  adding: boolean;
  clearError: () => void;
};

export default function AddWallet({
  isOpen,
  onClose,
  onCreateWallet,
  addError,
  adding,
  clearError,
}: AddWalletProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [error, setError] = useState<any>(null);
  const [currency, setCurrency] = useState<string>("");

  const getWallets = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await walletServices.getWallets();
      setWallets(response);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWallets();

    return () => {
      clearError();
    };
  }, []);

  const renderLoader = (
    <div className="center-on-page">
      <Loader size={84} width={8} />
    </div>
  );

  const renderError = (
    <div className="center-on-page">
      <Error message="Network Error" onRetry={getWallets} />
    </div>
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currency) {
      onCreateWallet({
        currency,
      });
    }
  };

  const renderContent = () => {
    if (loading) return renderLoader;

    return error ? (
      renderError
    ) : (
      <div>
        <div className="add-w-heading">
          <h2 className="color-black">Add new wallet</h2>
          <button type="button" onClick={onClose} aria-label="Close Button">
            <Image src={CancelSvg} alt="Close Button" />
          </button>
        </div>
        <p className="add-w-description color-grey1">
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </p>

        <form className="add-w-form" onSubmit={onSubmit}>
          <Select
            label="Select wallet"
            placeholder="Please select wallet"
            value={currency}
            onChange={setCurrency}
            options={wallets?.map((item) => ({
              label: item.name,
              value: item.currency,
            }))}
          />

          <div className="btn-container">
            <Button text="Create wallet" loading={adding} />
          </div>
        </form>

        {addError && (
          <div className="error-render">
            <ToastError message="Network Error" onRetry={clearError} />
          </div>
        )}
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen}>
      <AddWalletWrapper>{renderContent()}</AddWalletWrapper>
    </Modal>
  );
}
