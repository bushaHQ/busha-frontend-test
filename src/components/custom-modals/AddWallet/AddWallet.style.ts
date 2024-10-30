import styled from "styled-components";

export const AddWalletWrapper = styled.div`
  padding: 70px 20px;

  .add-w-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      color: #000000;
    }
  }

  .add-w-description {
    color: #3e4c59;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin-top: 45px;
  }

  .add-w-form {
    margin-top: 40px;

    .btn-container {
      display: flex;
      justify-content: center;
      margin-top: 35px;
    }
  }

  .error-render {
    margin-top: 40px;
  }
`;
