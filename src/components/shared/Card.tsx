import React from "react";
import "./Card.scss"; // Adjust the import path as necessary

interface Data {
  name: string;
  balance: string;
  imgURL: string; 
  currency: string;
}

function Card({ name, balance, imgURL, currency }: Data) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-info">
          <img src={imgURL} alt="" />
          <p>{name}</p>
        </div>
        <p className="balance">
          {currency === "NGN"
            ? "₦ " + parseInt(balance).toLocaleString()
            : balance}{" "}
          {currency === "NGN" ? " " : currency}
        </p>
      </div>
      <div className="background-images">
        <img src="Vector 3.svg" alt="" />
        <img src="Vector 4.svg" alt="" />
      </div>
    </div>
  );
}

export default Card;
