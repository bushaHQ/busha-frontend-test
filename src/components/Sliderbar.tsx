import React, { useEffect, useState } from "react";
import { flexBox, ButtonStyle } from "./style";
import styled from "styled-components";
import Select from "./Select";
import Loader from "./shared/Loader";
import { requestUrls } from "../request";
import { Wallets } from "./types";
import ErrorPage from "./ErrorPage";
import errorNet from "../assets/errorNet.svg";
import redCancel from "../assets/redCancel.svg";

import ModalContainer from "./shared/Modal";
const Sliderbar: React.FC<{
  handleSlider: () => void;
  openSlider: boolean;
}> = ({ handleSlider, openSlider }) => {
  const [wallets, setWallets] = useState<Wallets[]>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const [select, setSelect] = useState("");

  const getWallets = async () => {
    setloading(true);
    try {
      const response = await fetch(requestUrls.wallets);
      const data = await response.json();

      setWallets(data);
      setloading(false);
      setError(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  };

  const postWallets = async () => {
    if (select.trim().length === 0) return;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currency: select }),
    };

    setloading(true);
    try {
      const fetchResponse = await fetch(requestUrls.accounts, requestOptions);
      await fetchResponse.json();
      setSelect("");
      setloading(false);
      setErrorPost(false);
      handleSlider();
    } catch (error) {
      setloading(false);
      setErrorPost(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelect(event.target?.value);
  };

  const optionsWallets = wallets.map((item) => {
    return {
      value: item?.currency,
      label: item?.name,
    };
  });

  useEffect(() => {

    getWallets();
    return () => {
      setWallets([]);
    };
  }, [openSlider]);

  const errorPage = () => {
    return (
      <div className="loader__icon" style={{ left: "0" }}>
        <ErrorPage func={getWallets} />
      </div>
    );
  };

  return (
    <ModalContainer isOpen={openSlider}>
      <SliderWrapper>
        <div className="add__wallet__title">
          <p className="addWallet">Add new wallet</p>
          <button
            type="button"
            className="cancel__btn"
            aria-label="Close button"
            onClick={handleSlider}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4834 12.9889C16.1722 13.6777 16.1722 14.7946 15.4834 15.4834C14.7946 16.1722 13.6777 16.1722 12.9889 15.4834L8 10.4945L3.01108 15.4834C2.32225 16.1722 1.20545 16.1722 0.51662 15.4834C-0.172207 14.7946 -0.172207 13.6777 0.51662 12.9889L5.50554 8L0.51662 3.01108C-0.172207 2.32225 -0.172207 1.20545 0.51662 0.51662C1.20545 -0.172207 2.32225 -0.172207 3.01108 0.51662L8 5.50554L12.9889 0.51662C13.6777 -0.172207 14.7946 -0.172207 15.4834 0.51662C16.1722 1.20545 16.1722 2.32225 15.4834 3.01108L10.4945 8L15.4834 12.9889Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {loading ? (
          <div className="loader__icon">
            <Loader size={100} width={2} />
          </div>
        ) : error ? (
          errorPage()
        ) : (
          <>
            <p className="slider__content">
              The crypto wallet will be created instantly and be available in
              your list of wallets.
            </p>
            <div>
              <Select
                label={"Select wallet"}
                options={optionsWallets}
                handleChange={handleChange}
                select={select}
              />
            </div>
            <div className="create_box">
              <button
                type="submit"
                disabled={loading || !select}
                onClick={postWallets}
                className="create_wallet_btn"
              >
                {loading ? (
                  // <span aria-label="Loading...">
                  <Loader size={10} />
                ) : (
                  // </span>
                  "Create wallet"
                )}
              </button>
            </div>{" "}
            {errorPost && (
              <div className="error__post">
                <div className="error__post2">
                  <span>
                    <img
                      src={errorNet}
                      alt="network__error"
                      aria-label="Network error"
                    />
                  </span>
                  <p>Network error</p>
                </div>

                <div>
                  <button onClick={getWallets} className="error__postbtn">
                    <img src={redCancel} alt="cancel__btn" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </SliderWrapper>
    </ModalContainer>
  );
};

const SliderWrapper = styled.div`
  padding: 1rem 2rem;
 

  .loader__icon {
   position:relative;
   top:40%;
   left:40%;
  }

  .add__wallet__title {
    ${flexBox}
    margin:2rem 0;
  }

  .addWallet{
    font-size:1.3rem;

  }

  .cancel__btn{
      background:transparent;
      border:none;
  }

  .slider__content{
    font-weight: normal;
    font-size: 1.1rem
    line-height: 26px;
    color: #3E4C59;
  }

  .create_box{
    ${flexBox}
    justify-content:center;
    margin:1rem 0;
  }

  .error__post{
    ${flexBox}
    margin:3rem 0;
    padding:.5rem 1rem;
    background: #FFF4F4;
    border: 1px solid #E0B3B2;
    border-radius: 8px;
  }

  .error__post2{
      span,p{
          display:inline-block;
          vertical-align:middle;
      }
      p{
          margin-left:1rem;
      }
  }

  .error__postbtn{
      background:transparent;
      border:none;
   
  }

  .create_wallet_btn {
    ${ButtonStyle}
    padding:.8rem 2rem ;
    display:block;
    margin:0;

  
  }

  



`;
export default Sliderbar;
