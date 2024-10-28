import React, { ReactNode, useState } from "react";
import { sidebar } from "../service/sidebar.service";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [selectedPath, setSelectedPath] = useState<string>(sidebar[0].title);

  return (
    <main className="layout">
      <Navbar />
      <div className="layout-children">
        <Sidebar
          selectedPath={selectedPath}
          setSelectedPath={setSelectedPath}
        />

        {children}
      </div>
    </main>
  );
};

export default Layout;
