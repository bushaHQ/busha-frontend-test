import React from "react";
import { getAccounts, getWallets } from "../../adapters/wallet";
import { NetworkErrorIcon } from "../../styles/layout/Icons";
import { Button, Card, Text } from "../../styles/layout/UtilStyles";

interface MainProps {
  handleSetWalletList?: Function;
  setIsError?: Function;
  setIsFetching?: Function;
  isWalletNetwork?: boolean;
  handleSetAccountsList?: Function;
}

const NetworkError = (props: MainProps) => {
  const {
    handleSetWalletList,
    setIsError,
    setIsFetching,
    isWalletNetwork,
    handleSetAccountsList,
  } = props;

  const tryAgain = () => {
    if (isWalletNetwork) {
      getWallets(handleSetWalletList, setIsError, setIsFetching);
    } else {
      getAccounts(handleSetAccountsList, setIsError, setIsFetching);
    }
  };

  // isWalletNetwork differentiate which page the network error occurs. Disables try again on accounts request
  return (
    <>
      <Card
        flex
        center
        // top={5}
        verticalCenter
      >
        <div>
          <NetworkErrorIcon center />
          <Text color={"#3E4C59"} position={"center"} size={0.9} top={1}>
            Network Error!
          </Text>
          <Button
            width={10}
            top={1}
            center
            background={"rgba(1,1,1,1)"}
            onClick={tryAgain}
          >
            Try again
          </Button>
        </div>
      </Card>
    </>
  );
};

export default NetworkError;
