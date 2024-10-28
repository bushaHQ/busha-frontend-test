import React, { Dispatch, SetStateAction } from "react";
import { sidebar, SidebarItem } from "../service/sidebar.service";

interface SidebarProps {
  selectedPath: string;
  setSelectedPath: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({ selectedPath, setSelectedPath }: SidebarProps) => {
  return (
    <div className="sidebar">
      {sidebar.map((item: SidebarItem, index: number) => (
        <div
          key={index}
          aria-label="Sidebar Wallets"
          onClick={() => setSelectedPath(item.title)}
          className={`sidebar-item ${
            selectedPath === item.title && "active-item"
          }`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
