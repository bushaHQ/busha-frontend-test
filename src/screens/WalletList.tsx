import styled, { keyframes } from "styled-components";
import returnFallbackLogo from "../utils/returnFallbackLogo";
import ImageWithFallback from "../components/other/ImageWithFallback";


function WalletList({ wallets }: { wallets: any[] | null }) {
  console.log(wallets)
  return (
    <WalletGrid>
      {wallets?.map((wallet, index) => (
        <WalletCard key={index} delay={index * 0.1}>

          <WalletHeader>
            <ImageWithFallback
              color="#fff"
              fallbackSrc={returnFallbackLogo(wallet?.name)}
              name={wallet?.name}
              src={`/${wallet?.imgURL}`}
              alt={`${wallet?.name} icon`}
            />
            <WalletName>{wallet?.name}</WalletName>
          </WalletHeader>

          <WalletBalance>
            {wallet?.type === "fiat" && wallet?.currency}{" "}
            {Number(wallet?.balance).toLocaleString()}{" "}
            {wallet?.type !== "fiat" && wallet?.currency}
          </WalletBalance>

          <ArrowButton>
            <img src="/assets/chevron-right.svg" alt="Right arrow" />
          </ArrowButton>
        </WalletCard>
      ))}
    </WalletGrid>
  );
}

export default WalletList;

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WalletGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: center;
  justify-items: center;

  @media (max-width: 1744px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    justify-items: center;
  }

  @media (max-width: 1424px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    justify-items: center;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 15px;
    justify-items: center;
  }
`;

const WalletCard = styled.div<{ delay: number }>`
  width: 230px;
  height: 150px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 20px;
  background-color: #111111;
  background-image: url("/wallet/card-svg.svg"), url("/wallet/card-svg2.svg")
  ;
  background-size: 100%, 100%;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, 60%;
  background-position: bottom 50px, 35% -90%;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 10px 20px 0px #8a8a8a80;
  animation: ${fadeInDown} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1744px) {
    width: 220px;
  }

  @media (max-width: 760px) {
    width: 80%;
  }
`;

const WalletHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WalletName = styled.span`
  color: #9aa5b1;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  font-weight: bold;
`;

const WalletBalance = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

const ArrowButton = styled.button`
  align-self: flex-end;
  background-color: #333;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #444;
  }
`;
