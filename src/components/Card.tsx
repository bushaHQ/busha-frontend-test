import React from "react";
import styled from "styled-components";
import arrow from "../assets/arrow.svg";

import { Item } from "./types";
const Card: React.FC<{ item: Item }> = (props) => {
  // const nairaCurrencyVal = (number = 0) =>
  //   new Intl.NumberFormat("en-NG", {
  //     style: "currency",
  //     currency: "NGN",
  //   }).format(number);

  return (
    <CardWrapper>
      <div className="currency__details">
        <img
          src={props.item.imgURL}
          alt="currencyImage"
          className="currency__img"
        />
        <p className="currency__name">{props.item.name}</p>
      </div>

      <p className="currency__balance">
        {props.item.currency === "NGN"
          ? `₦ ${props.item.balance}`
          : `${props.item.balance} ${props.item.currency}`}
      </p>
      <div className="arrow__image">
        <img src={arrow} alt="arrowImage" />
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  padding: 1rem;
  height: 150px;
  width: 300px;
  background: #111111;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  position: relative;
  color: #fff;

  .currency__details {
  }
  .currency__img {
    width: 30px;
  }
  .currency__img,
  .currency__name {
    display: inline-block;
    vertical-align: middle;
  }

  .currency__name {
    margin-left: 0.5rem;
  }

  .currency__balance {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1rem;
  }

  .arrow__image {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
  }

  @media screen and (max-width: 450px) {
    width: 200px;
  }

  @media screen and (max-width: 289px) {
    width: 150px;
  }
`;

export default Card;
