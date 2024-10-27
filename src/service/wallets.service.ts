import { Bitcoin, Ethereum, Litecoin, Naira } from "../assets";

export type Wallet = {
  tokenIcon: string;
  token: string;
  walletBallance: string;
};

type WalletsService = Array<Wallet>;

export const walletsService: WalletsService = [
  {
    tokenIcon: Naira,
    token: "Naira",
    walletBallance: "₦ 105,160,076.51",
  },
  {
    tokenIcon: Bitcoin,
    token: "Bitcoin",
    walletBallance: "10.36490987 BTC",
  },
  {
    tokenIcon: Ethereum,
    token: "Ethereum",
    walletBallance: "10.36490987 ETH",
  },
  {
    tokenIcon: Litecoin,
    token: "Litecoin",
    walletBallance: "10.36490987 LTC",
  },
];
