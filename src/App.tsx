import * as React from "react";
import styled from "styled-components";

import AddNewWallet from "./components/modules/AddNewWallet";
import Loader from "./components/shared/Loader";
import NetworkError from "./components/shared/NetworkError";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as RightArrow } from "./assets/right-arrow.svg";

const sidebarLinks = ["Wallets", "Prices", "Peer2Peer", "Activity", "Settings"];

interface Account {
  id: string;
  currency: string;
  hold: string;
  pending_balance: string;
  balance: string;
  name: string;
  type: "fiat" | "digital";
  deposit: boolean;
  payout: boolean;
  imgURL: string;
}

interface AccountState {
  loading: boolean;
  data: Account[];
  error: boolean;
}

export default function App() {
  const [accounts, setAccounts] = React.useState<AccountState>({
    loading: true,
    data: [],
    error: false,
  });

  React.useEffect(() => {
    (async () => {
      if (!accounts.loading) return;

      setAccounts((info) => ({ ...info, loading: true, error: false }));

      try {
        const response = await fetch("/accounts");
        if (!response.ok) {
          throw new Error("Error fetching accounts");
        }

        const data = await response.json();

        setAccounts((info) => ({ ...info, data, loading: false }));
      } catch (error) {
        setAccounts((info) => ({ ...info, loading: false, error: true }));
      }
    })();
  }, [accounts.loading]);

  return (
    <StyledHome>
      <header className="header">
        <div className="container top-bar">
          <Logo className="logo" />
          <div className="user">
            <span className="avatar">o</span>
            <span className="name">Oluwatobi Akindunjoye</span>
          </div>
        </div>
      </header>
      <main className="main container">
        <aside className="aside">
          <ul className="nav-links">
            {sidebarLinks.map((link) => (
              <li key={link} className="nav-link">
                {link}
              </li>
            ))}
          </ul>
        </aside>

        <section>
          <div className="wallets__header">
            {Boolean(!accounts.loading && !accounts.error) && <h1>Wallets</h1>}

            <AddNewWallet
              onWalletCreate={() =>
                setAccounts((info) => ({ ...info, loading: true }))
              }
            />
          </div>
          {accounts.loading ? (
            <div className="loader">
              <Loader width={4} size={50} />
            </div>
          ) : accounts.error ? (
            <NetworkError
              retryRequest={() =>
                setAccounts((info) => ({ ...info, loading: true }))
              }
            />
          ) : (
            <div className="wallets__grid">
              {accounts.data.map((account) => (
                <div className="wallet" key={account.id}>
                  <div className="name">
                    <img src={account.imgURL} alt="" />
                    <p>{account.name}</p>
                  </div>

                  <div className="currency">
                    {account.type === "fiat" && <span>&#8358;</span>}{" "}
                    <span>{account.balance} </span>
                    <span>
                      {account.type === "digital" && account.currency}
                    </span>
                  </div>

                  <div className="more">
                    <span>
                      <RightArrow className="right__arrow" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  .header {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

    .top-bar {
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      padding-bottom: 2rem;

      .logo {
        width: 7.5rem;
      }
      .user {
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #3e4c59;

        .avatar {
          background: rgba(154, 165, 177, 0.3);
          margin-right: 0.4rem;
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
          text-transform: uppercase;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .name {
          font-size: 0.875rem;
        }
      }
    }
  }

  .main {
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
    margin-top: 3rem;

    @media (min-width: 700px) {
      grid-template-columns: 17rem 1fr;
      gap: 4.5rem;
      margin-top: 4rem;
    }

    .aside {
      overflow: auto;

      ul {
        display: flex;
      }

      .nav-link {
        margin-bottom: 1rem;
        color: #3e4c59;
        font-weight: 400;
        cursor: pointer;
        border-radius: 3px;
        padding: 1rem;
        flex: 1;

        &:first-child {
          color: #000;
          font-weight: 500;
          background: #f5f7fa;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

      @media (min-width: 700px) {
        ul {
          flex-direction: column;
        }
      }
    }

    .loader {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .wallets__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(211, 213, 216, 0.5);
      margin-bottom: 2rem;

      h1 {
        font-size: 2rem;
        margin: 0 0 0.7rem 0;
      }
    }
    .wallets__grid {
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      .wallet {
        background: #111111;
        color: #fff;
        box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
        border-radius: 10px;
        padding: 1.3rem;

        .name {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;

          img {
            width: 2.5rem;
          }

          p {
            color: #9aa5b1;
            margin-left: 0.6rem;
            font-size: 0.875rem;
            font-weight: 500;
          }
        }
        .currency {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .more {
          span {
            background: #303030;
            display: inline-block;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            margin-left: auto;

            .right__arrow {
              width: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
