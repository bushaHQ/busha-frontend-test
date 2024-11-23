import React, { ReactEventHandler, useEffect, useState } from "react";
import CloseIcon from "../icons/closeIcon";
import { Button } from "../shared/button";
import Loader from "../shared/Loader";
import ErrorSpace from "./ErrorSpace";
import NetworkErrorIcon from "../icons/NetworkErrorIcon";
import { useDashboardContext } from "../shared/DashboardProvider";
import { IWallet } from "./types/IWallet.interface";
import CautionIcon from "../../assets/icons/caution.svg";
import styled from "styled-components";

interface Account {
  currency: string;
  name: string;
  imgURL: string;
  id?: string;
  balance?: number;
  pending_balance?: number;
  type: string;
  push_amount?: number;
  payout?: boolean;
}
interface Props {
  setClose?: ReactEventHandler;
  refresh?: ReactEventHandler;
}
const AddWallet: React.FC<Props> = ({ setClose, refresh }: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL as string;
  const { handleSetOldAccount } = useDashboardContext();
  const [accounts, setAccounts] = useState<IWallet[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [creating, setCreating] = useState<Boolean>(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [networkError, setNetworkError] = useState<String | null>("");
  const [formError, setFormError] = useState<String | null>(null);

  const NetworkErrorFallBack = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[400px]">
        <NetworkErrorIcon />
        <p>Network Error</p>
        <div className="text-center">
          <Button onClick={() => fetchWallets()} className="rounded btn">
            Try Again
          </Button>
        </div>
      </div>
    );
  };
  const fetchWallets = async () => {
    setNetworkError(null);
    setFormError(null);
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/wallets`);
      if (!response.ok) {
        setNetworkError("Network Error");
      }
      const data = await response.json();
      setAccounts(data);
      setLoading(false);
    } catch (error: any) {
      setNetworkError("Network Error");
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setClose();
  };
  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSelectedAccount(e.target && e.target?.value);
  };
  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setCreating(true);
    try {
      const resp: any = await fetch(`${baseUrl}/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: selectedAccount,
        }),
      });

      if (!resp.ok) {
        setCreating(false);
        return setFormError(`Network Error`);
      }
      const data = await resp.json();

      const newAccount: IWallet = accounts.filter(
        (item) => item.currency === selectedAccount
      )[0];
      const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      newAccount.id = uniqueId;
      newAccount.balance = 0;
      newAccount.pending_balance = 0;
      newAccount.type = "digital";
      newAccount.payout = false;

      handleSetOldAccount(newAccount);
      setCreating(false);
      // refresh();
      setClose();
    } catch (error: any) {
      setCreating(false);
      setFormError("Network Error");
    }
  };

  useEffect(() => {
    fetchWallets();
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <div className="relative">
        {
          <ErrorSpace fallBack={<NetworkErrorFallBack />}>
            {
              <>
                <div className="modal">
                  <div className="flex justify-end modal-header">
                    <h3>Add new wallet</h3>
                    <Button
                      onClick={() => handleClose()}
                      name="Close button"
                      title="Close button"
                    >
                      <label title="Close button" />
                      <CloseIcon />
                    </Button>
                  </div>
                  <p className="mt-6 w-72">
                    The crypto wallet will be created instantly and be available
                    in your list of wallets.
                  </p>

                  {loading ? (
                    <div className="modal flex flex-col items-center justify-center h-screen">
                      <div>
                        <Loader size={83.37} />
                      </div>
                    </div>
                  ) : networkError ? (
                    <NetworkErrorFallBack />
                  ) : (
                    <ErrorSpace fallBack={<NetworkErrorFallBack />}>
                      <form
                        onSubmit={(e) => handleSubmitForm(e)}
                        className="py-10"
                      >
                        <label htmlFor="wallet">Select Wallet</label>
                        <div>
                          <select
                            className="modal-select te"
                            value={selectedAccount || ""}
                            id="wallet"
                            onChange={(e) => handleInputChange(e)}
                          >
                            <option value="" disabled>
                              Select Wallet
                            </option>
                            {accounts?.map((account: IWallet) => (
                              <option
                                key={`${account.currency}-key-account`}
                                value={account.currency}
                              >
                                {account.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="w-full text-center">
                          <Button
                            type="submit"
                            className="rounded"
                            disabled={!!creating}
                          >
                            {creating ? "Loading..." : "Create Wallet"}
                          </Button>
                          {formError && (
                            <ErrorTab className=" mt-6">
                              <img src={CautionIcon} alt="Caution icon" />
                              {formError}
                            </ErrorTab>
                          )}
                        </div>
                      </form>
                    </ErrorSpace>
                  )}
                </div>
              </>
            }
          </ErrorSpace>
        }
      </div>
    </>
  );
};

export default AddWallet;

const ErrorTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 13px 20px;
  gap: 12px;
  background: #fff4f4;
  border: 1px solid #e0b3b2;
  border-radius: 8px;
`;
