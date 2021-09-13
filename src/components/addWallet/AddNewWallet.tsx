import { useContext, useState } from "react";
import { createWallet } from "../../adapters/wallet";
import { AppContext } from "../../App";
import { CancelIcon } from "../../styles/layout/Icons";
import {
  Button,
  Card,
  Option,
  SelectField,
  Text,
} from "../../styles/layout/UtilStyles";
import { NetworkHorzError } from "../accountList";

interface Wallet {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}

const AddNewWallet = () => {
  const { handleClose, walletList, handleAddAccount } = useContext(AppContext);
  const [isError, setIsError] = useState(false);
  const [selWallet, setSelWallet] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (param: Wallet) => {
    setSelWallet({ currency: param?.currency });
  };

  const create = () => {
    createWallet(
      selWallet,
      setIsError,
      setIsLoading,
      handleClose,
      handleAddAccount
    );
  };

  return (
    <>
      <Card
        verticalCenter
        style={{
          marginLeft: "1em",
          height: "fit-content",
          width: "fit-content",
          marginRight: "1em",
        }}
      >
        <Card flex spaceBetween>
          <Text top={4} color={"#3E4C59"} position={"center"} size={1.2} heavy>
            Add New Wallet
          </Text>
          <CancelIcon
            width={1}
            top={1.2}
            size={2}
            transparent
            color={"#D72C0D"}
            onClick={handleClose}
            pointer
          />
        </Card>
        <Text top={1} size={0.8} color={"#3E4C59"} lineHeight={2}>
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </Text>
        <Text top={2} size={0.8} color={"#3E4C59"} lineHeight={2}>
          Select wallet
        </Text>
        <SelectField
          top={1}
          defaultValue={!walletList.length ? JSON.stringify(walletList[0]) : ""}
          onChange={(e) => handleSelect(JSON.parse(e.target?.value))}
        >
          {walletList.map((eachWallet, pos) => (
            <Option key={pos} value={JSON.stringify(eachWallet)}>
              {eachWallet?.name}
            </Option>
          ))}
        </SelectField>
        <Card>
          <Button
            style={{ marginLeft: "9em" }}
            background={"#000000"}
            top={2}
            width={14}
            radius={2.5}
            onClick={create}
            disabled={isLoading}
            center
          >
            {isLoading ? "Creating..." : "Create wallet"}
          </Button>

          {isError && <NetworkHorzError />}
        </Card>
      </Card>
    </>
  );
};

export default AddNewWallet;
