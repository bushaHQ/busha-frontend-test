import React from "react";
import styled from "styled-components";

function NetworkErrorBadge() {
  return (
    <BadgeContainer>
      <TextIconContainer>
        <img src="/wallet/network-icon.svg" alt="Network Icon" />
        <Text>Network Error</Text>
      </TextIconContainer>
      <CloseBtn>
        <img src="/wallet/ntwrk-badge-close.svg" alt="Nework Badge Close" />
      </CloseBtn>
    </BadgeContainer>
  );
}

export default NetworkErrorBadge;

const BadgeContainer = styled.div`
  border: 1px solid #e0b3b2;
  background-color: #fff4f4;
  padding: 13px 20px;
  display: flex;
  gap: 40px;
  border-radius: 8px;
  justify-content: space-between;
  width: 100%;
`;

const TextIconContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Text = styled.div`
  color: #d72c0d;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
