import React, { ReactNode } from "react";
import HeaderNav from "./HeaderNav";
import SideNav from "./SideNav";
import { DashboardWrapperStyle } from "./StyledDashboard";

interface Props {
  children?: ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <DashboardWrapperStyle>
      <HeaderNav />
      <div className="dashboard-content">
        <SideNav />
        <main>{children && children}</main>
      </div>
    </DashboardWrapperStyle>
  );
};

export default index;
