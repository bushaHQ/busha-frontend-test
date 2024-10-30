import styled from "styled-components";

export const Container = styled.div`
  max-width: 1105px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const PageContainer = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 50px;
  min-height: calc(100vh - 56px);

  .main-content-left {
    width: 240px;
  }

  .main-content {
    padding-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100%;

    h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 32px;
      color: #000000;
    }
  }

  @media (max-width: 768px) {
    .main-content-left {
      display: none;
    }
  }
`;
