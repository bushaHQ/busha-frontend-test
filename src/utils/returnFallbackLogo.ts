const returnFallbackLogo = (accountName: string) => {
  switch (accountName) {
    case "Naira":
      return "/assets/accountLogos/naira.svg";
    case "Ethereum":
      return "/assets/accountLogos/ethereum.svg";
    case "Bitcoin":
      return "/assets/accountLogos/bitcoin.svg";
    case "Stellar":
      return "/assets/accountLogos/litecoin.svg";
    default: return ""
  }
};

export default returnFallbackLogo;
