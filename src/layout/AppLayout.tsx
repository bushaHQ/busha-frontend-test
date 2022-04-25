/** @format */

import React from "react";
import Aside from "components/custom/aside";
import Header from "components/custom/header";
import { Wrappper } from "./styles";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <div>
      <Header />
      <Wrappper>
        <div>
          <Aside />
        </div>
        <div className="children">{children}</div>
      </Wrappper>
    </div>
  );
};

export default AppLayout;
