import React, { FC, useContext } from "react";
import { AppContext } from "../../App";
import { AddIcon } from "../../styles/layout/Icons";
import {
  LayoutContainer,
  LayoutTitle,
  UserLayout,
} from "../../styles/layout/LayoutStyles";
import { Divider, Grid, Text } from "../../styles/layout/UtilStyles";
import Header from "./Header";
import Sidebar from "./Sidebar";

export interface MainProps {
  addWallet?: boolean;
}
// props: MainProps
const Layout: FC<MainProps> = (props) => {
  // --- Call the handler for the add new wallet functionality ---
  const { handleOpen } = useContext(AppContext);

  return (
    <>
      <Header />
      <Sidebar />
      <UserLayout>
        {/* {props?.children} */}
        <LayoutContainer>
          <Grid flex spacing={2}>
            <Grid lg={6} md={6} xs={6} sm={6}>
              <LayoutTitle>Wallets</LayoutTitle>
            </Grid>
            <Grid lg={6} md={6} xs={6} sm={6}>
              {props?.addWallet && (
                <div
                  style={{
                    float: "right",
                    width: "fit-content",
                    cursor: "pointer",
                  }}
                  onClick={handleOpen}
                >
                  <AddIcon
                    height={1.5}
                    width={1.5}
                    background={"white"}
                    color={"#303030"}
                    top={2.5}
                  />
                  <Text left={2} top={3} bottom={0} size={0.9}>
                    Add new wallet
                  </Text>
                </div>
              )}
            </Grid>
          </Grid>
          {props?.addWallet && <Divider bottom={2} />}
          {props?.children}
        </LayoutContainer>
      </UserLayout>
    </>
  );
};

export default Layout;
