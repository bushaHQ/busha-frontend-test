import { ICustomize } from "./types/IWallet.interface";
import styled from "styled-components";
import walletIcons from "./walletIcons";
import Wallet from "./wallet.class";
function Avatar({ name, color }: { name: string; color?: string }) {
  const nameInital = name.charAt(0);
  const customize: ICustomize[] = [
    { name: "NGN", color: "#05A357", icon: walletIcons.Naira },
    { name: "ETH", color: "#FF9900", icon: walletIcons.Bitcoin },
    { name: "BTC", color: "#627EEA", icon: walletIcons.Ethereum },
    { name: "XLM", color: "#00aeef", icon: walletIcons.Litcoin },
    { name: "DOGE", color: "#d5b0ac", icon: walletIcons.Bitcoin },
    { name: "LTC", color: "#CEA0AE", icon: walletIcons.Bitcoin },
    { name: "RMT", color: "#684551", icon: walletIcons.Bitcoin },
    { name: "TRX", color: "#402E2A", icon: walletIcons.Bitcoin },
    { name: "USDT", color: "#9CD08F", icon: walletIcons.Bitcoin },
    { name: "XRP", color: "#402E2A", icon: walletIcons.Bitcoin },
  ];
  return <AvataDiv color={color}>{nameInital}</AvataDiv>;
}

export default Avatar;

const AvataDiv = styled.div<{ color?: string }>`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9aa5b14d;
  font-weight: 600;
  font-size: 18px;
  border-radius: 100%;
  color: ${({ color }) => color ?? "#3e4c59"};
`;
