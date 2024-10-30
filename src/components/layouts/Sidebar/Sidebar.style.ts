import styled from "styled-components";

export const SidebarWrapper = styled.div`
  .sidebar-links-ul {
    text-decoration: none;

    .sidebar-link-item {
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
      color: #000000;
      list-style: none;
      padding: 14px 20px;
      cursor: pointer;
    }

    .sidebar-link-item.active,
    .sidebar-link-item:hover {
      background: #f5f7fa;
      border-radius: 3px;
    }
  }
`;
