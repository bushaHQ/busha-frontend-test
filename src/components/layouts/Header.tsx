import React from "react";
import { Avatar } from "../../styles/layout/Icons";
import {
  DashboardHeader,
  DashboardHeaderRight,
} from "../../styles/layout/LayoutStyles";
import { Grid, Text } from "../../styles/layout/UtilStyles";

const Header = () => {
  return (
    <>
      <DashboardHeader>
        <Grid flex spacing={0}>
          <Grid lg={4} sm={6} md={6} xs={4}>
            <Text
              color={"black"}
              position={"left"}
              size={1.5}
              style={{ marginLeft: "7em" }}
              top={1}
              bottom={1}
              heavy
            >
              busha
            </Text>
          </Grid>
          <Grid lg={4} sm={6} md={6} xs={4}></Grid>
          <Grid lg={4} sm={6} md={6} xs={4}>
            <DashboardHeaderRight>
              <Grid flex spacing={0}>
                <Grid lg={6} sm={6} md={6} xs={4}>
                  <Avatar style={{ float: "right" }} />
                </Grid>
                <Grid lg={6} sm={6} md={6} xs={4}>
                  <Text
                    color={"#3E4C59"}
                    position={"left"}
                    size={0.9}
                    top={1}
                    bottom={1}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Oluwatobi Akindunjoye
                  </Text>
                </Grid>
              </Grid>
            </DashboardHeaderRight>
          </Grid>
        </Grid>
      </DashboardHeader>
    </>
  );
};

export default Header;
