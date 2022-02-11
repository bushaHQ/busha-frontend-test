import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { requestUrls } from "../request";
import Card from "./Card";
import Loader from "./shared/Loader";
import { Item } from "./types";
import { flexBox } from "./style";
import ErrorPage from "./ErrorPage";
import Sliderbar from "./Sliderbar";
const Main: React.FC = () => {
  const [accounts, setAccounts] = useState<Item[]>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);

  const getAccounts = async () => {
    setloading(true);

    try {
      const response = await fetch(requestUrls.accounts);
      const data = await response.json();
      setAccounts(data);
      setError(false);
      setloading(false);
    } catch (error) {
      setError(true);
      setloading(false);
    }
  };

  useEffect(() => {
    getAccounts();
    return () => {
      setAccounts([]);
    };
  }, []);

  const handleSlider = () => {
    setOpenSlider(!openSlider);
    getAccounts();
  };

  return (
    <MainWrapper error={error} loading={loading}>
      <div className="main__box">
        <h2 className="main__title">Wallet</h2>
        <button
          onClick={handleSlider}
          className={`add__btn ${(loading || error) && "hide"}`}
        >
          + Add new wallet
        </button>
      </div>

      {loading ? (
        <div className="loader__icon">
          <Loader size={100} width={2} />
        </div>
      ) : error ? (
        <div style={{ margin: "2rem 0" }}>
          <ErrorPage func={getAccounts} />
        </div>
      ) : (
        <div className="main__account__box">
          {accounts.length
            ? accounts.map((item: Item, index) => {
                return <Card item={item} key={item?.id} />;
              })
            : ""}
        </div>
      )}

      <Sliderbar handleSlider={handleSlider} openSlider={openSlider} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div<{ error: boolean; loading: boolean }>`
  width: 100%;
  height: 100%;
  margin-left: 1rem;

  .main__box {
    ${flexBox}
    margin: 3rem 0 1rem 0;
  }
  .main__title {
    color: #000000;
    font-size: 2rem;
    font-weight: bold;
  }
  .add__btn {
    background: transparent;
    border: none;
    font-size: 1rem;
  }
  .loader__icon {
    ${flexBox}
    width:100%;
    justify-content: center;
    align-items: center;
  }

  .main__account__box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem 2rem;

    ::before {
      content: "";

      ${({ error, loading }) =>
        (loading || !error) &&
        `
    background: rgba(211, 213, 216, 0.5);
  `}

      height: 1px;
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    flex-basis: 80%;
    margin-left: 0rem;

    .main__box {
      padding: 0 1rem;
    }

    .main__account__box {
      padding: 0.3rem;
    }
    .main__title {
      font-size: 1rem;
    }
    .add__btn {
      font-size: 0.7rem;
    }
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 289px) {
    .main__box {
      flex-direction: column;
    }
  }
`;

export default Main;
