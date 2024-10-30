import styled from "styled-components";

export const ErrorWrapper = styled.div`
  .error-img {
    display: block;
    margin: 0 auto 20px;
  }

  .error-message {
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: center;
    outline: none;
    margin-bottom: 30px;
  }
`;

export const ToastErrorWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  gap: 20px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #e0b3b2;

  .error-content {
    display: flex;
    align-item: center;
    gap: 10px;

    img {
      width: 20px;
      height: 20px;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;
