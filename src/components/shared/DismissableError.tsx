import styled from 'styled-components';
import { useState } from 'react';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFF4F4;
  border: 1px solid #E0B3B2;
  color: #ff0000;
  border-radius: 6px;
  padding: 10px 15px;
  margin: 30px 0;
  font-size: 14px;
`;

const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ErrorIcon = styled.span`
  font-size: 18px;
  color: #D72C0D;
`;

const ErrorText = styled.div`
  text-align: left;
  font-weight: 600;
`;

const CloseIcon = styled.button`
  background: none;
  border: none;
  color: #ff0000;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #cc0000;
  }
`;

const DismissibleError = ({ message }: { message: string }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorIcon>
          <span className="material-symbols-outlined">emergency_home</span>
        </ErrorIcon>
        <ErrorText>{message}</ErrorText>
      </ErrorContent>
      <CloseIcon onClick={() => setVisible(false)}>
        <span className="material-symbols-outlined">close</span>
      </CloseIcon>
    </ErrorContainer>
  );
};

export default DismissibleError;
