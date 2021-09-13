import React, { useContext } from "react";
import { AppContext } from "../../App";
import { AddWalletPage } from "../../pages/addWallet";
import { ArrowRight, ImgIcon } from "../../styles/layout/Icons";
import { Card, Grid, Text } from "../../styles/layout/UtilStyles";

const Wallets = () => {
  const { accountsList } = useContext(AppContext);

  return (
    <>
      <Grid flex grid spacing={2}>
        {accountsList.map((eachWallet, pos) => (
          <Card
            key={pos}
            height={10}
            shadowAlt={"0px 10px 20px rgba(138, 138, 138, 0.5)"}
            background={"#111111"}
            top={1}
            radius={0.9}
            bgImg={"linear-gradient(-210deg, #111111, rgba(41, 41, 41, 0.3))"}
            shadow
          >
            <div style={{ padding: "1.5em 1em" }}>
              <Card height={3} background={"none"} flex>
                <ImgIcon src={eachWallet?.imgURL} width={2.5} height={2.5} />
                <Text
                  color={"#9AA5B1"}
                  position={"left"}
                  size={0.9}
                  top={1}
                  bottom={1}
                  left={1}
                >
                  {eachWallet?.name}
                </Text>
              </Card>

              <Text
                color={"white"}
                position={"left"}
                size={0.9}
                top={1}
                bottom={1}
              >
                {eachWallet?.currency} {eachWallet?.balance}
              </Text>

              <ArrowRight
                height={2}
                width={2}
                background={"#303030"}
                color={"white"}
                right
              />
            </div>
          </Card>
        ))}
      </Grid>

      {/* --- Call the rightside Modal here --- */}
      <AddWalletPage />
    </>
  );
};

export default Wallets;
