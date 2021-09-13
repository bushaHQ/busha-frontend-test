import { CancelIcon } from "../../styles/layout/Icons";
import { RedLabel, Text } from "../../styles/layout/UtilStyles";

const NetworkHorzError = () => {
  return (
    <>
      <RedLabel>
        <div
          style={{
            padding: "0em 0.5em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CancelIcon transparent color={"#D72C0D"} />
          <Text color={"#D72C0D"} size={0.8}>
            Network Error!
          </Text>
        </div>
        <div>
          <CancelIcon pointer transparent color={"#D72C0D"} />
        </div>
      </RedLabel>
    </>
  );
};

export default NetworkHorzError;
