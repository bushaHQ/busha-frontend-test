import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SideBarStyle>
      <SidebarWalletStyle>
        <p>Wallets</p>
      </SidebarWalletStyle>
      <SideBarLinkStyle>
        <p>Prices</p>
      </SideBarLinkStyle>
      <SideBarLinkStyle>
        <p>Peer2Peer</p>
      </SideBarLinkStyle>
      <SideBarLinkStyle>
        <p>Activity</p>
      </SideBarLinkStyle>
      <SideBarLinkStyle>
        <p>Settings</p>
      </SideBarLinkStyle>
    </SideBarStyle>
  );
};

const SideBarStyle = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: sticky;
  top: 0;
  width: 240px;
`;

const SidebarWalletStyle = styled.div`
  border-radius: 3px;
  background: #f5f7fa;
  width: 100%;
  cursor: pointer;
  padding: 14px 0 14px 17px;
  margin-bottom: 18px;

  & p {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
  }
`;

const SideBarLinkStyle = styled.div`
  cursor: pointer;
  padding: 0 0 0 17px;
  margin-bottom: 32px;
  width: 100%;

  & p {
    font-size: 16px;
    line-height: 16px;
    color: rgba(62, 76, 89, 1);
  }
`;
