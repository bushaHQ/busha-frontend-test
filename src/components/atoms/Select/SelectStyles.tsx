import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6875rem;

  label {
    margin-bottom: 14px;
    font-size: 1rem;
    font-weight: 500;
    color: #3e4c59;
  }

  .input-container {
    border: 1px solid #cbd2d9;
    border-radius: 5px;
    padding: 24px;
    display: flex;
    align-items: center;

    :focus-within {
      border-color: #111111;
    }
  }

  select {
    flex-grow: 1;
    border: none;
    font-size: 1rem;
    background: none;
    &:focus {
      outline: none;
    }
  }
`;
