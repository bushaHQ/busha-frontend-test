import styled from "styled-components";

export const AddWalletWrapper = styled.div`
  padding: 70px 20px;
  min-height: 100vh;
  height: 100%;

  .add-w-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .add-w-description {
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
