import React from "react";
import {
  DashboardSidebar,
  SidebarContainer,
  SidebarItems,
} from "../../styles/layout/LayoutStyles";
import { Text } from "../../styles/layout/UtilStyles";

const navRoutes = [
  { text: "Wallets", route: "/wallets", isCurrent: true },
  { text: "Prices", route: "/wallets", isCurrent: false },
  { text: "Peer2Peer", route: "/wallets", isCurrent: false },
  { text: "Activity", route: "/wallets", isCurrent: false },
  { text: "Settings", route: "/wallets", isCurrent: false },
];

const Sidebar = () => {
  return (
    <>
      <DashboardSidebar>
        <SidebarContainer>
          {navRoutes.map((item, pos) => (
            <SidebarItems
              key={pos}
              style={{ background: item?.isCurrent ? "#f5f7fa" : "white" }}
            >
              <Text
                color={item?.isCurrent ? "black" : "#3E4C59"}
                position={"left"}
                size={0.85}
                heavy={item?.isCurrent ? true : false}
              >
                {item?.text}
              </Text>
            </SidebarItems>
          ))}
        </SidebarContainer>
      </DashboardSidebar>
    </>
  );
};

export default Sidebar;
