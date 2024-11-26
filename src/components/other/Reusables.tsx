import styled, { keyframes } from "styled-components";


export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideDown = keyframes`
  from { transform: translateX(20px); }
  to { transform: translateX(0); }
`;

export const ModalContainer = styled.div`
  padding: 74px 24px;
  position: relative;
  animation: ${slideDown} 0.3s ease-out, ${fadeIn} 0.3s ease-out;
`;

export const CloseButton = styled.button.attrs({"aria-label": "Close button"})`
  position: absolute;
  top: 72px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  background-color: transparent;
  border-radius: 4px;
  padding: 4px 6px;
  transform: scale(0.8);
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1);
    background-color: #9aa5b14d;
  }
`;

export const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #3e4c59;
`;

export const Label = styled.label`
  margin-top: 43px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #3e4c59;
`;

export const Select = styled.select.attrs({"aria-label": "combobox"})`
  margin-top: 14px;
  padding: 16px 24px;
  padding-right: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #000;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  background-image: url("/assets/chevron-down.png");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 20px;
  cursor: pointer;
`;

export const CreateBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 27px;
`;

export const ErrorContainer = styled.div`
  margin-top: 50%;
`

export const NetwrkErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 24px;
`

export const Container = styled.div`
  margin-top: 0px;
`;

export const TitleRow = styled.div`
padding: 0 4px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #d3d5d880;
margin-top: -12px;
padding-top: 6px;
padding-bottom: 8px;
position: sticky;
top: 60px;
left: 0;
z-index: 40;
background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
`;

export const AddNewWallet = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #000000;
  border: none;
  background-color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #d3d5d880;
  margin-top: -10px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 170px;
`;

