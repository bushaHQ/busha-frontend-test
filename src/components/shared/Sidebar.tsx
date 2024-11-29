import * as React from "react";
import styled, { css } from "styled-components";

export interface SidebarMenuItem {
    title: string;
    route?: string;
}

export default function Sidebar() {
    const menuList: SidebarMenuItem[] = [
        { title: "Wallets" },
        { title: "Prices" },
        { title: "Peer2Peer" },
        { title: "Activity" },
        { title: "Settings" },
    ];

    const activeMenu = menuList[0].title;

    const isActiveMenu = (menuTitle: string) => menuTitle === activeMenu;

    return (
        <SidebarMenu>
            {menuList.map(({ title }) => (
                <SidebarLink
                    as="button"
                    isActive={isActiveMenu(title)}
                    key={title}
                >
                    {title}
                </SidebarLink>
            ))}
        </SidebarMenu>
    );
}

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarLink = styled.button<{ isActive: boolean }>`
  width: 240px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: #000000;
  padding: 8px;
  cursor: pointer;
  background: none;
  border: none;
  text-align: left;

  ${({ isActive }) =>
        isActive
            ? css`
          font-size: 18px;
          font-weight: 600;
          border-radius: 4px;
          background-color: #f5f7fa;
        `
            : css`
          &:hover {
            font-size: 17px;
          }
        `}
`;
