import styled from "styled-components";

export const AccountsContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddButton = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: right;
  border: none;

  color: #000000;

  &:hover {
    font-weight: 700;
  }
`;

export const AccountCardContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); 
  gap: 16px; 
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
  width: 100%;
  margin-top: -100px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 
  }
`;

export const ModalCenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 
  }
`;

export const Button = styled.button`
  padding: 18px 54px;


  background: #000000;
  border-radius: 40px;


  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  text-align: center;
  color: white;
  cursor: pointer;
`;

export const StyledAccountCard = styled.div`
  position: relative;
  padding: 16px;
  background-image: url("/assets/images/card-background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  color: white; 

 
  button {
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: transparent;
    border-radius: 30px;
    height: 32px;
    width: 32px;
    border: none;
  }

  .currency {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #9aa5b1;
  }

  .balance {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 66px; 
  }

  .imgUrl {
    display: flex;
    margin-bottom: 18px;
  }

  .image {
    height: 34px;
    width: 34px;
    margin-right: 10px;
  }
`;

export const StyledModalContent = styled.div`
  padding: 20px;
  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    cursor: pointer;
  }

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3e4c59;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #3e4c59;
  }

  select {
    border: 1px solid #cbd2d9;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    margin-top: 20px;
    appearance: none;
    -webkit-appearance: none; 
    background-image: url("/assets/images/select.svg"); 
    background-repeat: no-repeat;
    background-position: right 16px center; 
    background-size: 12px; 
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Optional: Adds some space above the button */
  }
`;

export const ErrorToast = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 20px;
    background: #FFF4F4;
    border: 1px solid #E0B3B2;
    border-radius: 8px;

`