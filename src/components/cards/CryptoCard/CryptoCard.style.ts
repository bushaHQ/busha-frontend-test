import styled from "styled-components";
import Vector from "assets/vectors/card-vector.svg";

export const CryptoCardWrapper = styled.div`
  background-color: #111111;
  border-radius: 10px;
  padding: 20px;
  height: 150px;
  position: relative;
  background-image: url(${Vector});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 200%;

  .wallet-asset {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .wallet-asset-name {
      color: #9aa5b1;
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
    }

    img {
      border-radius: 50%;
      width: 34px;
      height: 34px;
    }
  }

  .wallet-balance {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #ffffff;
  }

  .nav-arrow {
    position: absolute;
    background: #303030;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    outline: none;
    border: none;
    bottom: 15px;
    right: 15px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DummyCryptoLogo = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
`;
