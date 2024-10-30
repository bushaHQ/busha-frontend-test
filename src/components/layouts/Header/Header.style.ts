import styled from "styled-components";

export const HeaderWrapper = styled.div`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    gap: 10px;
    height: fit-content;
    flex-wrap: wrap;

    .busha-logo {
      width: 120.37px;
    }

    .profile-area {
      display: flex;
      align-items: center;
      gap: 10px;

      .user-avatar {
        background: #9aa5b14d;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        font-size: 18px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .user-fullname {
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        text-align: right;
      }
    }
  }
`;
