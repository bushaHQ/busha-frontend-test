import styled from "styled-components";

export const SidebarWrapper = styled.div`
  .sidebar-links-ul {
    text-decoration: none;

    .sidebar-link-item {
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      list-style: none;
      padding: 14px 20px;
      cursor: pointer;
      transition: all ease 0.3s;
    }

    .sidebar-link-item.active,
    .sidebar-link-item:hover {
      background: #f5f7fa;
      border-radius: 3px;
      font-weight: 500;
      color: #000000;
    }
  }
`;
